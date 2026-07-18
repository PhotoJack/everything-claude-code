# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Two things live in this one repo:

1. **The product** — a distributable collection of AI-coding-tool configuration (agents, skills, commands, hooks, rules, MCP configs) that gets installed *into other projects* via the Claude Code plugin marketplace, `install.sh` / `install.ps1`, or `npx ecc`.
2. **The tooling** — a CommonJS Node.js CLI (`scripts/`) with its own test suite (`tests/`) that builds, validates, and installs that content, plus an experimental Rust TUI (`ecc2/`, a separate Cargo project not wired into the Node pipeline).

When making a change, know which side you're on: editing `agents/`, `skills/`, `commands/`, `hooks/hooks.json`, `rules/`, or `mcp-configs/` changes what gets shipped to consumers. Editing `scripts/` changes how it gets installed, validated, or managed.

## Commands

```bash
# Full CI-equivalent check — chain of structural validators + the test suite. Run before committing.
npm test

# Lint: ESLint over scripts/, markdownlint over all .md
npm run lint

# Run the whole hand-rolled test suite (no framework — plain node + assert, auto-discovers tests/**/*.test.js)
node tests/run-all.js

# Run a single test file
node tests/lib/utils.test.js
node tests/hooks/hooks.test.js

# Coverage — c8, gates at 80% lines/functions/branches/statements over scripts/**
npm run coverage

# The individual validators npm test chains together, runnable standalone:
node scripts/ci/validate-agents.js             # agents/*.md frontmatter
node scripts/ci/validate-skills.js             # skills/*/SKILL.md frontmatter
node scripts/ci/validate-commands.js
node scripts/ci/validate-hooks.js              # hooks/hooks.json schema
node scripts/ci/validate-rules.js
node scripts/ci/validate-install-manifests.js
node scripts/ci/validate-no-personal-paths.js
node scripts/ci/check-unicode-safety.js
node scripts/ci/catalog.js --text              # regenerates/checks the install catalog

# The ECC CLI itself (also usable to test selective install against this repo)
node scripts/ecc.js catalog profiles
node scripts/ecc.js plan --profile core --target cursor
node scripts/ecc.js install --profile developer --target claude
node scripts/ecc.js doctor --target cursor      # diagnose drifted/missing managed files
node scripts/ecc.js status --json               # query the SQLite install/session state store
```

`npm test` is not just `tests/run-all.js` — it's the `scripts/ci/validate-*.js` structural validators run first, then the test suite. A change that only breaks a validator (e.g. bad frontmatter in a new agent/skill) will pass `node tests/run-all.js` but fail `npm test`.

## Architecture

### Cross-harness distribution
Content is authored once under `agents/`, `skills/`, `commands/`, `hooks/`, `rules/` and mirrored into multiple AI-tool formats, which are **not** auto-synced from the canonical source except where noted:

- `.claude-plugin/plugin.json` — Claude Code plugin manifest (paths into `agents/`, `skills/`, `commands/`)
- `.codex/`, `.codex-plugin/`, `AGENTS.md` — Codex CLI/App, auto-detected; synced via `scripts/sync-ecc-to-codex.sh`
- `.cursor/` — Cursor IDE: rules plus a curated *subset* of skills, maintained by hand
- `.opencode/` — OpenCode plugin; has its own `package.json`/`tsconfig.json`/`index.ts`, built separately from the root package
- `.kiro/`, `.trae/` — additional harness targets
- `agent.yaml` — a "gitagent" portable export manifest of the skill catalog; native `agents/`/`commands/`/`hooks/` remain authoritative and this manifest trails them

When a new skill/agent/command should exist on Codex or Cursor too, update the mirror by hand (see CONTRIBUTING.md § "Cross-Harness and Translations") — there is no build step that keeps `.cursor/skills/` or `.kiro/` in sync automatically.

### Selective install system
Consumers don't get the whole repo dumped in — `scripts/install-plan.js` / `scripts/install-apply.js` resolve an install plan from `manifests/install-modules.json` for a given profile/target, `scripts/lib/install-executor.js` + `install-lifecycle.js` copy the files and record them in an install-state SQLite DB (via `sql.js`), and per-target behavior (what "install into Cursor" vs "install into Codex home" means) lives in `scripts/lib/install-targets/*.js`. `scripts/status.js` / `scripts/sessions-cli.js` / `scripts/doctor.js` / `scripts/repair.js` all read or reconcile against that state store. Full design in `docs/SELECTIVE-INSTALL-ARCHITECTURE.md`.

### Hooks
`hooks/hooks.json` registers matcher-driven hooks (`PreToolUse`, `PostToolUse`, `SessionStart`, `Stop`, ...). Nearly every hook is invoked through the wrapper `scripts/hooks/run-with-flags.js "<hook-id>" "<script-path>" "<profiles>"` rather than called directly — the wrapper parses stdin JSON and gates execution on `ECC_HOOK_PROFILE` (default `standard`) and `ECC_DISABLED_HOOKS`. A hook script can parse stdin itself or export `run(rawInput)` and let the wrapper do it. `PreToolUse`/`Stop` hooks must stay fast (<200ms, no network); anything slower needs `"async": true` with a ≤30s timeout.

### Two unrelated "rules" concepts
- `rules/` (repo root) is **product content**: language coding-standard rules (`common/` plus `typescript/`, `python/`, `golang/`, `swift/`, `php/`, etc.) that get installed into consumers' projects.
- `.claude/rules/*.md` is **meta-guidance for developing this repo**, loaded automatically for this session (e.g. `.claude/rules/node.md` covers CommonJS-only style, hook conventions, testing requirements for `scripts/`). Don't conflate the two if asked to "add a rule."

### Skill placement and provenance
Only *curated* skills (`skills/<name>/SKILL.md`, validated by `validate-skills.js`) are tracked in this repo and shipped. Learned (from continuous-learning), imported, and evolved skills live at runtime under a user's `~/.claude/skills/` or `~/.claude/homunculus/` and must never be committed here — see `docs/SKILL-PLACEMENT-POLICY.md`.

### `ecc2/`
An early-stage, separate Rust TUI (Cargo workspace with `session`, `worktree`, `tui`, `observability`, `comms` modules) prototyping a compiled orchestrator. Has its own `Cargo.toml`/`Cargo.lock`; not part of `npm test` / `npm run lint`.

## Conventions

- **Agents** — `agents/<name>.md`; YAML frontmatter `name`, `description`, `tools`, `model`; filename matches `name`; lowercase-hyphenated.
- **Skills** — `skills/<name>/SKILL.md`; frontmatter `name`, `description`, `origin` (`ECC` for first-party, `community` for imported); sections for When to Activate / examples / anti-patterns; ~500 lines typical, 800 max.
- **Commands** — `commands/<name>.md` with a `description:` frontmatter line.
- **Hooks** — registered in `hooks/hooks.json`; matchers as specific as possible; `exit 1` only when intentionally blocking, otherwise always `exit 0`.
- **Commits** — Conventional Commits (`feat(skills): ...`, `fix(hooks): ...`, `docs: ...`).
- **`scripts/`/`tests/`** — CommonJS only (`require`/`module.exports`), no TypeScript, `const` over `let`, never `var`.

## Skill-to-file map

Use the matching skill when working on these files:

| File(s) | Skill |
|---------|-------|
| `README.md` | `/readme` |
| `.github/workflows/*.yml` | `/ci-workflow` |

When spawning subagents, always pass conventions from the respective skill into the agent's prompt.
