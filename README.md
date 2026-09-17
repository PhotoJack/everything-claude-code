**Language:** English | [Português (Brasil)](docs/pt-BR/README.md) | [简体中文](README.zh-CN.md) | [繁體中文](docs/zh-TW/README.md) | [日本語](docs/ja-JP/README.md) | [한국어](docs/ko-KR/README.md) | [Türkçe](docs/tr/README.md)

# Everything Claude Code

[![Stars](https://img.shields.io/github/stars/affaan-m/everything-claude-code?style=flat)](https://github.com/affaan-m/everything-claude-code/stargazers)
[![Forks](https://img.shields.io/github/forks/affaan-m/everything-claude-code?style=flat)](https://github.com/affaan-m/everything-claude-code/network/members)
[![Contributors](https://img.shields.io/github/contributors/affaan-m/everything-claude-code?style=flat)](https://github.com/affaan-m/everything-claude-code/graphs/contributors)
[![npm ecc-universal](https://img.shields.io/npm/dw/ecc-universal?label=ecc-universal%20weekly%20downloads&logo=npm)](https://www.npmjs.com/package/ecc-universal)
[![npm ecc-agentshield](https://img.shields.io/npm/dw/ecc-agentshield?label=ecc-agentshield%20weekly%20downloads&logo=npm)](https://www.npmjs.com/package/ecc-agentshield)
[![GitHub App Install](https://img.shields.io/badge/GitHub%20App-150%20installs-2ea44f?logo=github)](https://github.com/marketplace/ecc-tools)
[![License](https://img.shields.io/badge/license-MIT-blue.svg)](LICENSE)
![Shell](https://img.shields.io/badge/-Shell-4EAA25?logo=gnu-bash&logoColor=white)
![TypeScript](https://img.shields.io/badge/-TypeScript-3178C6?logo=typescript&logoColor=white)
![Python](https://img.shields.io/badge/-Python-3776AB?logo=python&logoColor=white)
![Go](https://img.shields.io/badge/-Go-00ADD8?logo=go&logoColor=white)
![Java](https://img.shields.io/badge/-Java-ED8B00?logo=openjdk&logoColor=white)
![Perl](https://img.shields.io/badge/-Perl-39457E?logo=perl&logoColor=white)
![Markdown](https://img.shields.io/badge/-Markdown-000000?logo=markdown&logoColor=white)

> **50K+ stars** | **6K+ forks** | **30 contributors** | **7 languages supported** | **Anthropic Hackathon Winner**

---

<div align="center">

**Language / 语言 / 語言 / Dil**

[**English**](README.md) | [Português (Brasil)](docs/pt-BR/README.md) | [简体中文](README.zh-CN.md) | [繁體中文](docs/zh-TW/README.md) | [日本語](docs/ja-JP/README.md) | [한국어](docs/ko-KR/README.md)
 | [Türkçe](docs/tr/README.md)

</div>

---

**The performance optimization system for AI agent harnesses. From an Anthropic hackathon winner.**

Not just configs. A complete system: skills, instincts, memory optimization, continuous learning, security scanning, and research-first development. Production-ready agents, hooks, commands, rules, and MCP configurations evolved over 10+ months of intensive daily use building real products.

Works across **Claude Code**, **Codex**, **Cowork**, and other AI agent harnesses.

---

## The Guides

This repo is the raw code only. The guides explain everything.

<table>
<tr>
<td width="33%">
<a href="https://x.com/affaanmustafa/status/2012378465664745795">
<img src="./assets/images/guides/shorthand-guide.png" alt="The Shorthand Guide to Everything Claude Code" />
</a>
</td>
<td width="33%">
<a href="https://x.com/affaanmustafa/status/2014040193557471352">
<img src="./assets/images/guides/longform-guide.png" alt="The Longform Guide to Everything Claude Code" />
</a>
</td>
<td width="33%">
<a href="https://x.com/affaanmustafa/status/2033263813387223421">
<img src="./assets/images/security/security-guide-header.png" alt="The Shorthand Guide to Everything Agentic Security" />
</a>
</td>
</tr>
<tr>
<td align="center"><b>Shorthand Guide</b><br/>Setup, foundations, philosophy. <b>Read this first.</b></td>
<td align="center"><b>Longform Guide</b><br/>Token optimization, memory persistence, evals, parallelization.</td>
<td align="center"><b>Security Guide</b><br/>Attack vectors, sandboxing, sanitization, CVEs, AgentShield.</td>
</tr>
</table>

| Topic | What You'll Learn |
|-------|-------------------|
| Token Optimization | Model selection, system prompt slimming, background processes |
| Memory Persistence | Hooks that save/load context across sessions automatically |
| Continuous Learning | Auto-extract patterns from sessions into reusable skills |
| Verification Loops | Checkpoint vs continuous evals, grader types, pass@k metrics |
| Parallelization | Git worktrees, cascade method, when to scale instances |
| Subagent Orchestration | The context problem, iterative retrieval pattern |

---

## What's New

### v1.9.0 — Selective Install & Language Expansion (Mar 2026)

- **Selective install architecture** — Manifest-driven install pipeline with `install-plan.js` and `install-apply.js` for targeted component installation. State store tracks what's installed and enables incremental updates.
- **6 new agents** — `typescript-reviewer`, `pytorch-build-resolver`, `java-build-resolver`, `java-reviewer`, `kotlin-reviewer`, `kotlin-build-resolver` expand language coverage to 10 languages.
- **New skills** — `pytorch-patterns` for deep learning workflows, `documentation-lookup` for API reference research, `bun-runtime` and `nextjs-turbopack` for modern JS toolchains, plus 8 operational domain skills and `mcp-server-patterns`.
- **Session & state infrastructure** — SQLite state store with query CLI, session adapters for structured recording, skill evolution foundation for self-improving skills.
- **Orchestration overhaul** — Harness audit scoring made deterministic, orchestration status and launcher compatibility hardened, observer loop prevention with 5-layer guard.
- **Observer reliability** — Memory explosion fix with throttling and tail sampling, sandbox access fix, lazy-start logic, and re-entrancy guard.
- **12 language ecosystems** — New rules for Java, PHP, Perl, Kotlin/Android/KMP, C++, and Rust join existing TypeScript, Python, Go, and common rules.
- **Community contributions** — Korean and Chinese translations, security hook, biome hook optimization, video processing skills, operational skills, PowerShell installer, Antigravity IDE support.
- **CI hardening** — 19 test failure fixes, catalog count enforcement, install manifest validation, and full test suite green.

### v1.8.0 — Harness Performance System (Mar 2026)

- **Harness-first release** — ECC is now explicitly framed as an agent harness performance system, not just a config pack.
- **Hook reliability overhaul** — SessionStart root fallback, Stop-phase session summaries, and script-based hooks replacing fragile inline one-liners.
- **Hook runtime controls** — `ECC_HOOK_PROFILE=minimal|standard|strict` and `ECC_DISABLED_HOOKS=...` for runtime gating without editing hook files.
- **New harness commands** — `/harness-audit`, `/loop-start`, `/loop-status`, `/quality-gate`, `/model-route`.
- **NanoClaw v2** — model routing, skill hot-load, session branch/search/export/compact/metrics.
- **Cross-harness parity** — behavior tightened across Claude Code, Cursor, OpenCode, and Codex app/CLI.
- **997 internal tests passing** — full suite green after hook/runtime refactor and compatibility updates.

### v1.7.0 — Cross-Platform Expansion & Presentation Builder (Feb 2026)

- **Codex app + CLI support** — Direct `AGENTS.md`-based Codex support, installer targeting, and Codex docs
- **`frontend-slides` skill** — Zero-dependency HTML presentation builder with PPTX conversion guidance and strict viewport-fit rules
- **5 new generic business/content skills** — `article-writing`, `content-engine`, `market-research`, `investor-materials`, `investor-outreach`
- **Broader tool coverage** — Cursor, Codex, and OpenCode support tightened so the same repo ships cleanly across all major harnesses
- **992 internal tests** — Expanded validation and regression coverage across plugin, hooks, skills, and packaging

### v1.6.0 — Codex CLI, AgentShield & Marketplace (Feb 2026)

- **Codex CLI support** — New `/codex-setup` command generates `codex.md` for OpenAI Codex CLI compatibility
- **7 new skills** — `search-first`, `swift-actor-persistence`, `swift-protocol-di-testing`, `regex-vs-llm-structured-text`, `content-hash-cache-pattern`, `cost-aware-llm-pipeline`, `skill-stocktake`
- **AgentShield integration** — `/security-scan` skill runs AgentShield directly from Claude Code; 1282 tests, 102 rules
- **GitHub Marketplace** — ECC Tools GitHub App live at [github.com/marketplace/ecc-tools](https://github.com/marketplace/ecc-tools) with free/pro/enterprise tiers
- **30+ community PRs merged** — Contributions from 30 contributors across 6 languages
- **978 internal tests** — Expanded validation suite across agents, skills, commands, hooks, and rules

### v1.4.1 — Bug Fix (Feb 2026)

- **Fixed instinct import content loss** — `parse_instinct_file()` was silently dropping all content after frontmatter (Action, Evidence, Examples sections) during `/instinct-import`. ([#148](https://github.com/affaan-m/everything-claude-code/issues/148), [#161](https://github.com/affaan-m/everything-claude-code/pull/161))

### v1.4.0 — Multi-Language Rules, Installation Wizard & PM2 (Feb 2026)

- **Interactive installation wizard** — New `configure-ecc` skill provides guided setup with merge/overwrite detection
- **PM2 & multi-agent orchestration** — 6 new commands (`/pm2`, `/multi-plan`, `/multi-execute`, `/multi-backend`, `/multi-frontend`, `/multi-workflow`) for managing complex multi-service workflows
- **Multi-language rules architecture** — Rules restructured from flat files into `common/` + `typescript/` + `python/` + `golang/` directories. Install only the languages you need
- **Chinese (zh-CN) translations** — Complete translation of all agents, commands, skills, and rules (80+ files)
- **GitHub Sponsors support** — Sponsor the project via GitHub Sponsors
- **Enhanced CONTRIBUTING.md** — Detailed PR templates for each contribution type

### v1.3.0 — OpenCode Plugin Support (Feb 2026)

- **Full OpenCode integration** — 12 agents, 24 commands, 16 skills with hook support via OpenCode's plugin system (20+ event types)
- **3 native custom tools** — run-tests, check-coverage, security-audit
- **LLM documentation** — `llms.txt` for comprehensive OpenCode docs

### v1.2.0 — Unified Commands & Skills (Feb 2026)

- **Python/Django support** — Django patterns, security, TDD, and verification skills
- **Java Spring Boot skills** — Patterns, security, TDD, and verification for Spring Boot
- **Session management** — `/sessions` command for session history
- **Continuous learning v2** — Instinct-based learning with confidence scoring, import/export, evolution

See the full changelog in [Releases](https://github.com/affaan-m/everything-claude-code/releases).

---

## Quick Start

Get up and running in under 2 minutes:

### Step 1: Install the Plugin

```bash
# Add marketplace
/plugin marketplace add affaan-m/everything-claude-code

# Install plugin
/plugin install everything-claude-code@everything-claude-code
```

### Step 2: Install Rules (Required)

> WARNING: **Important:** Claude Code plugins cannot distribute `rules` automatically. Install them manually:

```bash
# Clone the repo first
git clone https://github.com/affaan-m/everything-claude-code.git
cd everything-claude-code

# Install dependencies (pick your package manager)
npm install        # or: pnpm install | yarn install | bun install

# macOS/Linux

# Recommended: install everything (full profile)
./install.sh --profile full

# Or install for specific languages only
./install.sh typescript    # or python or golang or swift or php
# ./install.sh typescript python golang swift php
# ./install.sh --target cursor typescript
# ./install.sh --target antigravity typescript
```

```powershell
# Windows PowerShell

# Recommended: install everything (full profile)
.\install.ps1 --profile full

# Or install for specific languages only
.\install.ps1 typescript   # or python or golang or swift or php
# .\install.ps1 typescript python golang swift php
# .\install.ps1 --target cursor typescript
# .\install.ps1 --target antigravity typescript

# npm-installed compatibility entrypoint also works cross-platform
npx ecc-install typescript
```

For manual install instructions see the README in the `rules/` folder. When copying rules manually, copy the whole language directory (for example `rules/common` or `rules/golang`), not the files inside it, so relative references keep working and filenames do not collide.

### Step 3: Start Using

```bash
# Try a command (plugin install uses namespaced form)
/everything-claude-code:plan "Add user authentication"

# Manual install (Option 2) uses the shorter form:
# /plan "Add user authentication"

# Check available commands
/plugin list everything-claude-code@everything-claude-code
```

**That's it!** You now have access to 30 agents, 136 skills, and 60 commands.

### Multi-model commands require additional setup

> WARNING: `multi-*` commands are **not** covered by the base plugin/rules install above.
>
> To use `/multi-plan`, `/multi-execute`, `/multi-backend`, `/multi-frontend`, and `/multi-workflow`, you must also install the `ccg-workflow` runtime.
>
> Initialize it with `npx ccg-workflow`.
>
> That runtime provides the external dependencies these commands expect, including:
> - `~/.claude/bin/codeagent-wrapper`
> - `~/.claude/.ccg/prompts/*`
>
> Without `ccg-workflow`, these `multi-*` commands will not run correctly.

---

## Cross-Platform Support

This plugin now fully supports **Windows, macOS, and Linux**, alongside tight integration across major IDEs (Cursor, OpenCode, Antigravity) and CLI harnesses. All hooks and scripts have been rewritten in Node.js for maximum compatibility.

### Package Manager Detection

The plugin automatically detects your preferred package manager (npm, pnpm, yarn, or bun) with the following priority:

1. **Environment variable**: `CLAUDE_PACKAGE_MANAGER`
2. **Project config**: `.claude/package-manager.json`
3. **package.json**: `packageManager` field
4. **Lock file**: Detection from package-lock.json, yarn.lock, pnpm-lock.yaml, or bun.lockb
5. **Global config**: `~/.claude/package-manager.json`
6. **Fallback**: First available package manager

To set your preferred package manager:

```bash
# Via environment variable
export CLAUDE_PACKAGE_MANAGER=pnpm

# Via global config
node scripts/setup-package-manager.js --global pnpm

# Via project config
node scripts/setup-package-manager.js --project bun

# Detect current setting
node scripts/setup-package-manager.js --detect
```

Or use the `/setup-pm` command in Claude Code.

### Hook Runtime Controls

Use runtime flags to tune strictness or disable specific hooks temporarily:

```bash
# Hook strictness profile (default: standard)
export ECC_HOOK_PROFILE=standard

# Comma-separated hook IDs to disable
export ECC_DISABLED_HOOKS="pre:bash:tmux-reminder,post:edit:typecheck"
```

---

## What's Inside

This repo is a **Claude Code plugin** - install it directly or copy components manually.

```
everything-claude-code/
|-- .claude-plugin/   # Plugin and marketplace manifests
|   |-- plugin.json            # Plugin metadata and component paths
|   |-- marketplace.json       # Marketplace catalog for /plugin marketplace add
|   |-- PLUGIN_SCHEMA_NOTES.md # Notes on the plugin manifest schema
|   |-- README.md              # Plugin manifest documentation
|
|-- agents/           # 30 specialized subagents for delegation
|   |-- planner.md           # Feature implementation planning
|   |-- architect.md         # System design decisions
|   |-- tdd-guide.md         # Test-driven development
|   |-- code-reviewer.md     # Quality and security review
|   |-- security-reviewer.md # Vulnerability analysis
|   |-- build-error-resolver.md
|   |-- e2e-runner.md        # Playwright E2E testing
|   |-- refactor-cleaner.md  # Dead code cleanup
|   |-- doc-updater.md       # Documentation sync
|   |-- docs-lookup.md       # Documentation/API lookup
|   |-- chief-of-staff.md    # Communication triage and drafts
|   |-- loop-operator.md     # Autonomous loop execution
|   |-- harness-optimizer.md # Harness config tuning
|   |-- performance-optimizer.md # Performance analysis & optimization
|   |-- cpp-reviewer.md      # C++ code review
|   |-- cpp-build-resolver.md # C++ build error resolution
|   |-- go-reviewer.md       # Go code review
|   |-- go-build-resolver.md # Go build error resolution
|   |-- python-reviewer.md   # Python code review
|   |-- database-reviewer.md # Database/Supabase review
|   |-- typescript-reviewer.md # TypeScript/JavaScript code review
|   |-- java-reviewer.md     # Java/Spring Boot code review
|   |-- java-build-resolver.md # Java/Maven/Gradle build errors
|   |-- kotlin-reviewer.md   # Kotlin/Android/KMP code review
|   |-- kotlin-build-resolver.md # Kotlin/Gradle build errors
|   |-- rust-reviewer.md     # Rust code review
|   |-- rust-build-resolver.md # Rust build error resolution
|   |-- pytorch-build-resolver.md # PyTorch/CUDA training errors
|   |-- flutter-reviewer.md   # Flutter/Dart code review
|   |-- healthcare-reviewer.md # Healthcare code review (clinical safety, PHI)
|
|-- skills/           # 136 skills - workflow definitions & domain knowledge
|   |                 #   (representative subset shown; run `ls skills/` for the full list)
|   |-- coding-standards/           # Language best practices
|   |-- clickhouse-io/              # ClickHouse analytics, queries, data engineering
|   |-- backend-patterns/           # API, database, caching patterns
|   |-- frontend-patterns/          # React, Next.js patterns
|   |-- frontend-slides/            # HTML slide decks and PPTX-to-web presentation workflows (NEW)
|   |-- article-writing/            # Long-form writing in a supplied voice without generic AI tone (NEW)
|   |-- content-engine/             # Multi-platform social content and repurposing workflows (NEW)
|   |-- market-research/            # Source-attributed market, competitor, and investor research (NEW)
|   |-- investor-materials/         # Pitch decks, one-pagers, memos, and financial models (NEW)
|   |-- investor-outreach/          # Personalized fundraising outreach and follow-up (NEW)
|   |-- continuous-learning/        # Auto-extract patterns from sessions (Longform Guide)
|   |-- continuous-learning-v2/     # Instinct-based learning with confidence scoring
|   |-- iterative-retrieval/        # Progressive context refinement for subagents
|   |-- strategic-compact/          # Manual compaction suggestions (Longform Guide)
|   |-- tdd-workflow/               # TDD methodology
|   |-- security-review/            # Security checklist
|   |-- eval-harness/               # Verification loop evaluation (Longform Guide)
|   |-- verification-loop/          # Continuous verification (Longform Guide)
|   |-- videodb/                   # Video and audio: ingest, search, edit, generate, stream (NEW)
|   |-- golang-patterns/            # Go idioms and best practices
|   |-- golang-testing/             # Go testing patterns, TDD, benchmarks
|   |-- cpp-coding-standards/         # C++ coding standards from C++ Core Guidelines (NEW)
|   |-- cpp-testing/                # C++ testing with GoogleTest, CMake/CTest (NEW)
|   |-- django-patterns/            # Django patterns, models, views (NEW)
|   |-- django-security/            # Django security best practices (NEW)
|   |-- django-tdd/                 # Django TDD workflow (NEW)
|   |-- django-verification/        # Django verification loops (NEW)
|   |-- laravel-patterns/           # Laravel architecture patterns (NEW)
|   |-- laravel-security/           # Laravel security best practices (NEW)
|   |-- laravel-tdd/                # Laravel TDD workflow (NEW)
|   |-- laravel-verification/       # Laravel verification loops (NEW)
|   |-- python-patterns/            # Python idioms and best practices (NEW)
|   |-- python-testing/             # Python testing with pytest (NEW)
|   |-- springboot-patterns/        # Java Spring Boot patterns (NEW)
|   |-- springboot-security/        # Spring Boot security (NEW)
|   |-- springboot-tdd/             # Spring Boot TDD (NEW)
|   |-- springboot-verification/    # Spring Boot verification (NEW)
|   |-- configure-ecc/              # Interactive installation wizard (NEW)
|   |-- security-scan/              # AgentShield security auditor integration (NEW)
|   |-- java-coding-standards/     # Java coding standards (NEW)
|   |-- jpa-patterns/              # JPA/Hibernate patterns (NEW)
|   |-- postgres-patterns/         # PostgreSQL optimization patterns (NEW)
|   |-- nutrient-document-processing/ # Document processing with Nutrient API (NEW)
|   |-- project-guidelines-example/   # Template for project-specific skills
|   |-- database-migrations/         # Migration patterns (Prisma, Drizzle, Django, Go) (NEW)
|   |-- api-design/                  # REST API design, pagination, error responses (NEW)
|   |-- deployment-patterns/         # CI/CD, Docker, health checks, rollbacks (NEW)
|   |-- docker-patterns/            # Docker Compose, networking, volumes, container security (NEW)
|   |-- e2e-testing/                 # Playwright E2E patterns and Page Object Model (NEW)
|   |-- content-hash-cache-pattern/  # SHA-256 content hash caching for file processing (NEW)
|   |-- cost-aware-llm-pipeline/     # LLM cost optimization, model routing, budget tracking (NEW)
|   |-- regex-vs-llm-structured-text/ # Decision framework: regex vs LLM for text parsing (NEW)
|   |-- swift-actor-persistence/     # Thread-safe Swift data persistence with actors (NEW)
|   |-- swift-protocol-di-testing/   # Protocol-based DI for testable Swift code (NEW)
|   |-- search-first/               # Research-before-coding workflow (NEW)
|   |-- skill-stocktake/            # Audit skills and commands for quality (NEW)
|   |-- liquid-glass-design/         # iOS 26 Liquid Glass design system (NEW)
|   |-- foundation-models-on-device/ # Apple on-device LLM with FoundationModels (NEW)
|   |-- swift-concurrency-6-2/       # Swift 6.2 Approachable Concurrency (NEW)
|   |-- perl-patterns/             # Modern Perl 5.36+ idioms and best practices (NEW)
|   |-- perl-security/             # Perl security patterns, taint mode, safe I/O (NEW)
|   |-- perl-testing/              # Perl TDD with Test2::V0, prove, Devel::Cover (NEW)
|   |-- autonomous-loops/           # Autonomous loop patterns: sequential pipelines, PR loops, DAG orchestration (NEW)
|   |-- plankton-code-quality/      # Write-time code quality enforcement with Plankton hooks (NEW)
|
|-- commands/         # 60 slash commands for quick execution
|   # Core workflow
|   |-- tdd.md              # /tdd - Test-driven development
|   |-- plan.md             # /plan - Implementation planning
|   |-- e2e.md              # /e2e - E2E test generation
|   |-- code-review.md      # /code-review - Quality review
|   |-- build-fix.md        # /build-fix - Fix build errors
|   |-- refactor-clean.md   # /refactor-clean - Dead code removal
|   |-- verify.md           # /verify - Run verification loop
|   |-- checkpoint.md       # /checkpoint - Save verification state
|   |-- test-coverage.md    # /test-coverage - Test coverage analysis
|   |-- eval.md             # /eval - Evaluate against criteria
|   |-- quality-gate.md     # /quality-gate - Run the ECC quality pipeline
|   # Learning, skills & instincts
|   |-- learn.md            # /learn - Extract patterns mid-session
|   |-- learn-eval.md       # /learn-eval - Extract, evaluate & save patterns
|   |-- skill-create.md     # /skill-create - Generate skills from git history
|   |-- skill-health.md     # /skill-health - Skill portfolio health dashboard
|   |-- evolve.md           # /evolve - Cluster instincts into skills
|   |-- prune.md            # /prune - Delete expired pending instincts
|   |-- promote.md          # /promote - Promote instincts to global scope
|   |-- projects.md         # /projects - List projects & instinct stats
|   |-- instinct-status.md  # /instinct-status - View learned instincts
|   |-- instinct-import.md  # /instinct-import - Import instincts
|   |-- instinct-export.md  # /instinct-export - Export instincts
|   |-- rules-distill.md    # /rules-distill - Distill skills into rules
|   # Sessions & context
|   |-- sessions.md         # /sessions - Session history management
|   |-- save-session.md     # /save-session - Save session state
|   |-- resume-session.md   # /resume-session - Resume most recent session
|   |-- context-budget.md   # /context-budget - Analyze context window usage
|   |-- aside.md            # /aside - Answer a side question without losing context
|   # Multi-agent & loops
|   |-- orchestrate.md      # /orchestrate - Multi-agent coordination
|   |-- multi-plan.md       # /multi-plan - Multi-agent task decomposition
|   |-- multi-execute.md    # /multi-execute - Orchestrated multi-agent workflows
|   |-- multi-backend.md    # /multi-backend - Backend multi-service orchestration
|   |-- multi-frontend.md   # /multi-frontend - Frontend multi-service orchestration
|   |-- multi-workflow.md   # /multi-workflow - General multi-service workflows
|   |-- devfleet.md         # /devfleet - Orchestrate parallel agents (DevFleet)
|   |-- loop-start.md       # /loop-start - Start a managed autonomous loop
|   |-- loop-status.md      # /loop-status - Inspect active loop state
|   # Language-specific (review / test / build)
|   |-- python-review.md    # /python-review - Python code review
|   |-- go-review.md        # /go-review - Go code review
|   |-- go-test.md          # /go-test - Go TDD workflow
|   |-- go-build.md         # /go-build - Fix Go build errors
|   |-- cpp-review.md       # /cpp-review - C++ code review
|   |-- cpp-test.md         # /cpp-test - C++ TDD workflow
|   |-- cpp-build.md        # /cpp-build - Fix C++ build errors
|   |-- kotlin-review.md    # /kotlin-review - Kotlin code review
|   |-- kotlin-test.md      # /kotlin-test - Kotlin TDD workflow
|   |-- kotlin-build.md     # /kotlin-build - Fix Kotlin/Gradle build errors
|   |-- rust-review.md      # /rust-review - Rust code review
|   |-- rust-test.md        # /rust-test - Rust TDD workflow
|   |-- rust-build.md       # /rust-build - Fix Rust build/borrow errors
|   |-- gradle-build.md     # /gradle-build - Fix Gradle build errors (Android/KMP)
|   # Docs, harness & tooling
|   |-- update-docs.md      # /update-docs - Update documentation
|   |-- update-codemaps.md  # /update-codemaps - Update codemaps
|   |-- docs.md             # /docs - Look up library docs via Context7
|   |-- setup-pm.md         # /setup-pm - Configure package manager
|   |-- pm2.md              # /pm2 - PM2 service lifecycle management
|   |-- harness-audit.md    # /harness-audit - Repository harness audit scorecard
|   |-- model-route.md      # /model-route - Recommend model tier for a task
|   |-- prompt-optimize.md  # /prompt-optimize - Optimize a draft prompt
|   |-- claw.md             # /claw - NanoClaw v2 persistent REPL
|
|-- rules/            # Always-follow guidelines (copy to ~/.claude/rules/)
|   |-- README.md            # Structure overview and installation guide
|   |-- common/              # Language-agnostic principles
|   |   |-- coding-style.md         # Immutability, file organization
|   |   |-- git-workflow.md         # Commit format, PR process
|   |   |-- testing.md              # TDD, 80% coverage requirement
|   |   |-- performance.md          # Model selection, context management
|   |   |-- patterns.md             # Design patterns, skeleton projects
|   |   |-- hooks.md                # Hook architecture, TodoWrite
|   |   |-- agents.md               # When to delegate to subagents
|   |   |-- security.md             # Mandatory security checks
|   |   |-- code-review.md          # Code review guidelines
|   |   |-- development-workflow.md # End-to-end development workflow
|   |-- typescript/          # TypeScript/JavaScript rules
|   |-- python/              # Python rules
|   |-- golang/              # Go rules
|   |-- rust/                # Rust rules
|   |-- java/                # Java rules
|   |-- kotlin/              # Kotlin rules
|   |-- swift/               # Swift rules
|   |-- cpp/                 # C++ rules
|   |-- csharp/              # C# rules
|   |-- php/                 # PHP rules
|   |-- perl/                # Perl rules
|   |-- zh/                  # Chinese (zh) translations of the rules
|
|-- hooks/            # Plugin hook configuration
|   |-- hooks.json                # All hooks config (PreToolUse, PostToolUse, Stop, etc.)
|   |-- README.md                 # Hook documentation, recipes, and customization guide
|   |                             # (hook scripts live in scripts/hooks/)
|
|-- scripts/          # Cross-platform Node.js scripts (hooks, install, CI, tooling)
|   |-- lib/                     # Shared utilities (utils, package-manager, install-*,
|   |                            #   session-adapters, skill-evolution, state-store, ...)
|   |-- hooks/                   # Hook implementations (session-start/end, pre-compact,
|   |                            #   post-edit-format, quality-gate, cost-tracker, ...)
|   |-- ci/                      # Validators (agents, commands, hooks, rules, skills, ...)
|   |-- codemaps/                # Codemap generation
|   |-- codex/                   # Codex adapter helpers
|   |-- ecc.js                   # ECC CLI entry point
|   |-- doctor.js                # Environment/health diagnostics
|   |-- claw.js                  # NanoClaw REPL launcher
|   |-- setup-package-manager.js # Interactive PM setup
|
|-- tests/            # Test suite (node tests/run-all.js)
|   |-- lib/                     # Library tests
|   |-- hooks/                   # Hook tests
|   |-- scripts/                 # Script/CLI tests
|   |-- ci/                      # CI validator tests
|   |-- integration/             # Integration tests
|   |-- run-all.js               # Run all tests
|
|-- contexts/         # Dynamic system prompt injection contexts (Longform Guide)
|   |-- dev.md              # Development mode context
|   |-- review.md           # Code review mode context
|   |-- research.md         # Research/exploration mode context
|
|-- examples/         # Example configurations and sessions
|   |-- CLAUDE.md                 # Example project-level config
|   |-- user-CLAUDE.md            # Example user-level config
|   |-- saas-nextjs-CLAUDE.md     # Real-world SaaS (Next.js + Supabase + Stripe)
|   |-- go-microservice-CLAUDE.md # Real-world Go microservice (gRPC + PostgreSQL)
|   |-- django-api-CLAUDE.md      # Real-world Django REST API (DRF + Celery)
|   |-- laravel-api-CLAUDE.md     # Real-world Laravel API (PostgreSQL + Redis)
|   |-- rust-api-CLAUDE.md        # Real-world Rust API (Axum + SQLx + PostgreSQL)
|   |-- statusline.json           # Example status line configuration
|   |-- remotion-video-editor/    # Example Remotion video editor project
|
|-- mcp-configs/      # MCP server configurations
|   |-- mcp-servers.json    # GitHub, Supabase, Vercel, Railway, etc.
|
|-- docs/             # Extended documentation, guides & translations (ja-JP, ko-KR, pt-BR)
|-- schemas/          # JSON schemas (install config, hooks, components, modules, profiles)
|-- manifests/        # Install manifests (components, modules, profiles)
|-- assets/           # Images and static assets
|-- ecc2/             # ECC 2.0 Rust implementation (Cargo crate)
|-- research/         # Research notes and analyses
|-- plugins/          # Plugin & marketplace usage guide
|
|-- .agents/          # Portable agent assets (skills, plugins) for cross-tool install
|-- .claude/          # ECC's own Claude Code config used to build this repo
|-- .cursor/          # Cursor IDE adapter (rules, skills, hooks, commands)
|-- .codex/           # Codex CLI/app adapter (+ .codex-plugin/ manifest)
|-- .opencode/        # OpenCode adapter (commands, instructions, plugins)
|-- .kiro/            # Kiro IDE adapter
|-- .trae/            # Trae IDE adapter
|-- .github/          # GitHub Actions workflows & issue templates
|
|-- Guides:  the-longform-guide.md, the-shortform-guide.md, the-security-guide.md
|-- Docs:    README.md, README.zh-CN.md, CONTRIBUTING.md, CHANGELOG.md, AGENTS.md,
|            CLAUDE.md, RULES.md, COMMANDS-QUICK-REF.md, TROUBLESHOOTING.md,
|            EVALUATION.md, REPO-ASSESSMENT.md, SECURITY.md, CODE_OF_CONDUCT.md,
|            SOUL.md, SPONSORS.md, SPONSORING.md, LICENSE
|-- Install: install.sh, install.ps1, agent.yaml
|-- Config:  package.json, eslint.config.js, commitlint.config.js, .markdownlint.json,
|            .mcp.json, .prettierrc, .tool-versions, .yarnrc.yml, .env.example, VERSION
```

---

## Skills by Domain

ECC ships **136 skills** — packaged domain knowledge that auto-activates when your
task matches (e.g. editing a Django file pulls in the Django patterns/security/TDD
skills). The `skills/` tree above shows a representative subset; the full catalog,
grouped by domain, is below.

### Languages & framework patterns (29)

- `coding-standards` — TS/JS/React/Node standards & patterns
- `backend-patterns` — Node/Express/Next API & server-side architecture
- `frontend-patterns` — React/Next state, performance, UI
- `python-patterns` — Pythonic idioms, PEP 8, type hints
- `golang-patterns` — idiomatic Go conventions
- `rust-patterns` — ownership, traits, error handling, concurrency
- `kotlin-patterns` — idiomatic Kotlin with coroutines
- `perl-patterns` — modern Perl 5.36+ idioms
- `pytorch-patterns` — training pipelines & model architecture
- `cpp-coding-standards` — C++ Core Guidelines enforcement
- `java-coding-standards` — Spring Boot Java conventions
- `django-patterns` — Django + DRF, ORM, caching, middleware
- `laravel-patterns` — routing, Eloquent, queues, events, API resources
- `springboot-patterns` — layered services, REST, caching, async
- `kotlin-ktor-patterns` — Ktor routing, plugins, auth, DI, serialization
- `kotlin-exposed-patterns` — Exposed ORM, HikariCP, Flyway
- `kotlin-coroutines-flows` — structured concurrency, Flow, StateFlow
- `android-clean-architecture` — Android/KMP module & dependency structure
- `compose-multiplatform-patterns` — Compose/KMP state, navigation, theming
- `swiftui-patterns` — SwiftUI @Observable, navigation, performance
- `swift-actor-persistence` — actor-based thread-safe persistence
- `swift-concurrency-6-2` — Swift 6.2 Approachable Concurrency
- `foundation-models-on-device` — Apple on-device LLM (@Generable, tools)
- `liquid-glass-design` — iOS 26 Liquid Glass material system
- `nextjs-turbopack` — Next.js 16+/Turbopack bundling & dev speed
- `nuxt4-patterns` — Nuxt 4 hydration-safe SSR data fetching
- `bun-runtime` — Bun as runtime/PM/bundler/test runner
- `flutter-dart-code-review` — Flutter/Dart widget & state-mgmt review

### Testing, TDD, verification & quality (23)

- `tdd-workflow` — enforce TDD with 80%+ coverage
- `python-testing` — pytest, fixtures, mocking, coverage
- `golang-testing` — table-driven tests, benchmarks, fuzzing
- `rust-testing` — unit/integration/async/property tests
- `kotlin-testing` — Kotest, MockK, coroutine testing, Kover
- `cpp-testing` — GoogleTest/CTest, sanitizers, coverage
- `perl-testing` — Test2::V0, prove, Devel::Cover
- `django-tdd` — pytest-django, factory_boy, DRF testing
- `laravel-tdd` — PHPUnit/Pest, factories, DB testing
- `springboot-tdd` — JUnit 5, Mockito, MockMvc, Testcontainers
- `django-verification` — Django pre-release verification loop
- `laravel-verification` — Laravel pre-release verification loop
- `springboot-verification` — Spring Boot pre-release verification loop
- `verification-loop` — general continuous-verification system
- `eval-harness` — eval-driven development framework
- `e2e-testing` — Playwright, Page Object Model, CI artifacts
- `browser-qa` — automated visual/UI verification via browser automation
- `ai-regression-testing` — sandbox-mode regression testing for AI dev
- `click-path-audit` — trace UI touchpoints' state changes for hidden bugs
- `benchmark` — measure perf baselines, detect regressions
- `canary-watch` — monitor a deployed URL for post-deploy regressions
- `swift-protocol-di-testing` — protocol-based DI for testable Swift
- `plankton-code-quality` — write-time format/lint/fix via hooks

### Security & safety (7)

- `security-review` — checklist for auth, input, secrets, payments
- `security-scan` — audit `.claude/` config for vulnerabilities (AgentShield)
- `safety-guard` — prevent destructive ops in prod/autonomous runs
- `django-security` — authn/z, CSRF, SQLi/XSS prevention
- `laravel-security` — authn/z, validation, uploads, secrets
- `springboot-security` — Spring Security authn/z, headers, rate limits
- `perl-security` — taint mode, parameterized DBI, web security

### APIs, databases & data (6)

- `api-design` — REST naming, status codes, pagination, versioning
- `database-migrations` — schema/data migrations, zero-downtime, rollbacks
- `postgres-patterns` — query optimization & indexing (Supabase best practices)
- `jpa-patterns` — JPA/Hibernate entities, queries, transactions, pooling
- `clickhouse-io` — ClickHouse analytics & query optimization
- `content-hash-cache-pattern` — SHA-256 content-hash caching

### DevOps & deployment (2)

- `deployment-patterns` — CI/CD, Docker, health checks, rollbacks
- `docker-patterns` — Compose, networking, volumes, container security

### AI agents, LLM engineering & orchestration (27)

- `claude-api` — Anthropic API (Messages, streaming, tools, caching)
- `mcp-server-patterns` — build MCP servers (Node/TS SDK)
- `agent-harness-construction` — design agent action spaces/tools/observations
- `agentic-engineering` — eval-first, decomposition, cost-aware routing
- `ai-first-engineering` — operating model for AI-heavy teams
- `enterprise-agent-ops` — long-lived agent observability & lifecycle
- `agent-eval` — head-to-head coding-agent benchmarking
- `agent-payment-x402` — agent budgets/wallets via x402 MCP
- `autonomous-loops` — architectures for autonomous Claude Code loops
- `continuous-agent-loop` — continuous loops with quality gates/recovery
- `claude-devfleet` — orchestrate parallel agents in isolated worktrees
- `dmux-workflows` — multi-agent orchestration via dmux (tmux)
- `team-builder` — pick & dispatch parallel agent teams
- `santa-method` — dual adversarial review with convergence loop
- `ralphinho-rfc-pipeline` — RFC-driven multi-agent DAG with merge queues
- `blueprint` — turn a one-line objective into a construction plan
- `iterative-retrieval` — progressive context refinement for subagents
- `cost-aware-llm-pipeline` — model routing, budget tracking, caching
- `context-budget` — audit context-window consumption
- `token-budget-advisor` — offer informed response-depth choices
- `strategic-compact` — suggest manual compaction at logical points
- `prompt-optimizer` — analyze/optimize prompts into ECC-enriched versions
- `regex-vs-llm-structured-text` — decide regex vs LLM for parsing
- `deep-research` — multi-source cited web research (firecrawl/exa)
- `exa-search` — neural web/code/company search via Exa MCP
- `nanoclaw-repl` — operate/extend NanoClaw v2 REPL
- `openclaw-persona-forge` — novelty: forge "OpenClaw" agent personas

### Dev workflow, learning & repo intelligence (13)

- `git-workflow` — branching, commits, merge vs rebase, conflicts
- `search-first` — research existing tools/libraries before coding
- `documentation-lookup` — up-to-date library docs via Context7 MCP
- `codebase-onboarding` — generate an onboarding guide for unfamiliar code
- `repo-scan` — audit/classify source assets & embedded third-party libs
- `architecture-decision-records` — capture ADRs from sessions
- `continuous-learning` — extract reusable patterns from sessions → saved skills
- `continuous-learning-v2` — instinct-based learning with confidence scoring
- `rules-distill` — distill skills into cross-cutting rules
- `skill-stocktake` — audit skills/commands for quality
- `skill-comply` — check whether skills/rules are actually followed
- `configure-ecc` — interactive ECC installer wizard
- `project-guidelines-example` — template for project-specific skills

### Content, media & creative (9)

- `article-writing` — long-form writing in a supplied voice
- `content-engine` — platform-native content systems (X, LinkedIn, TikTok, YT)
- `crosspost` — distribute across X, LinkedIn, Threads, Bluesky
- `x-api` — X/Twitter posting, timelines, search, analytics
- `frontend-slides` — animation-rich HTML decks (+ PPTX conversion)
- `design-system` — generate/audit design systems, style-PR review
- `videodb` — see/understand/act on video & audio
- `video-editing` — AI-assisted real-footage editing pipeline
- `fal-ai-media` — image/video/audio generation via fal.ai MCP

### Business, product & fundraising (4)

- `market-research` — sourced market/competitor/investor research
- `investor-materials` — pitch decks, one-pagers, memos, financial models
- `investor-outreach` — cold emails, warm intros, investor updates
- `product-lens` — validate the "why", product diagnostics, specs

### Healthcare vertical (4)

- `healthcare-cdss-patterns` — clinical decision support (drug/dose/scoring)
- `healthcare-emr-patterns` — EMR/EHR clinical workflows & safety
- `healthcare-eval-harness` — patient-safety evaluation suites
- `healthcare-phi-compliance` — PHI/PII compliance patterns

### Supply chain, logistics & operations (8)

- `carrier-relationship-management` — carrier portfolios, freight-rate negotiation
- `customs-trade-compliance` — customs docs, tariff classification, duty
- `energy-procurement` — electricity/gas procurement & tariff optimization
- `inventory-demand-planning` — demand forecasting, safety-stock optimization
- `logistics-exception-management` — freight exceptions, shipment delays
- `production-scheduling` — job sequencing, line balancing
- `quality-nonconformance` — QC & non-conformance root-cause
- `returns-reverse-logistics` — returns authorization, receipt & inspection

### Document processing & utilities (4)

- `nutrient-document-processing` — convert/OCR/redact/sign/fill docs (Nutrient DWS)
- `visa-doc-translate` — translate visa docs → bilingual PDF
- `data-scraper-agent` — build automated public-source scraping agents
- `ck` — persistent per-project memory for Claude Code

> Totals by group: 29 + 23 + 7 + 6 + 2 + 27 + 13 + 9 + 4 + 4 + 8 + 4 = **136**.

---

## Ecosystem Tools

### Skill Creator

Two ways to generate Claude Code skills from your repository:

#### Option A: Local Analysis (Built-in)

Use the `/skill-create` command for local analysis without external services:

```bash
/skill-create                    # Analyze current repo
/skill-create --instincts        # Also generate instincts for continuous-learning
```

This analyzes your git history locally and generates SKILL.md files.

#### Option B: GitHub App (Advanced)

For advanced features (10k+ commits, auto-PRs, team sharing):

[Install GitHub App](https://github.com/apps/skill-creator) | [ecc.tools](https://ecc.tools)

```bash
# Comment on any issue:
/skill-creator analyze

# Or auto-triggers on push to default branch
```

Both options create:
- **SKILL.md files** - Ready-to-use skills for Claude Code
- **Instinct collections** - For continuous-learning-v2
- **Pattern extraction** - Learns from your commit history

### AgentShield — Security Auditor

> Built at the Claude Code Hackathon (Cerebral Valley x Anthropic, Feb 2026). 1282 tests, 98% coverage, 102 static analysis rules.

Scan your Claude Code configuration for vulnerabilities, misconfigurations, and injection risks.

```bash
# Quick scan (no install needed)
npx ecc-agentshield scan

# Auto-fix safe issues
npx ecc-agentshield scan --fix

# Deep analysis with three Opus 4.6 agents
npx ecc-agentshield scan --opus --stream

# Generate secure config from scratch
npx ecc-agentshield init
```

**What it scans:** CLAUDE.md, settings.json, MCP configs, hooks, agent definitions, and skills across 5 categories — secrets detection (14 patterns), permission auditing, hook injection analysis, MCP server risk profiling, and agent config review.

**The `--opus` flag** runs three Claude Opus 4.6 agents in a red-team/blue-team/auditor pipeline. The attacker finds exploit chains, the defender evaluates protections, and the auditor synthesizes both into a prioritized risk assessment. Adversarial reasoning, not just pattern matching.

**Output formats:** Terminal (color-graded A-F), JSON (CI pipelines), Markdown, HTML. Exit code 2 on critical findings for build gates.

Use `/security-scan` in Claude Code to run it, or add to CI with the [GitHub Action](https://github.com/affaan-m/agentshield).

[GitHub](https://github.com/affaan-m/agentshield) | [npm](https://www.npmjs.com/package/ecc-agentshield)

### Continuous Learning v2

The instinct-based learning system automatically learns your patterns:

```bash
/instinct-status        # Show learned instincts with confidence
/instinct-import <file> # Import instincts from others
/instinct-export        # Export your instincts for sharing
/evolve                 # Cluster related instincts into skills
```

See `skills/continuous-learning-v2/` for full documentation.

---

## Requirements

### Claude Code CLI Version

**Minimum version: v2.1.0 or later**

This plugin requires Claude Code CLI v2.1.0+ due to changes in how the plugin system handles hooks.

Check your version:
```bash
claude --version
```

### Important: Hooks Auto-Loading Behavior

> WARNING: **For Contributors:** Do NOT add a `"hooks"` field to `.claude-plugin/plugin.json`. This is enforced by a regression test.

Claude Code v2.1+ **automatically loads** `hooks/hooks.json` from any installed plugin by convention. Explicitly declaring it in `plugin.json` causes a duplicate detection error:

```
Duplicate hooks file detected: ./hooks/hooks.json resolves to already-loaded file
```

**History:** This has caused repeated fix/revert cycles in this repo ([#29](https://github.com/affaan-m/everything-claude-code/issues/29), [#52](https://github.com/affaan-m/everything-claude-code/issues/52), [#103](https://github.com/affaan-m/everything-claude-code/issues/103)). The behavior changed between Claude Code versions, leading to confusion. We now have a regression test to prevent this from being reintroduced.

---

## Installation

### Option 1: Install as Plugin (Recommended)

The easiest way to use this repo - install as a Claude Code plugin:

```bash
# Add this repo as a marketplace
/plugin marketplace add affaan-m/everything-claude-code

# Install the plugin
/plugin install everything-claude-code@everything-claude-code
```

Or add directly to your `~/.claude/settings.json`:

```json
{
  "extraKnownMarketplaces": {
    "everything-claude-code": {
      "source": {
        "source": "github",
        "repo": "affaan-m/everything-claude-code"
      }
    }
  },
  "enabledPlugins": {
    "everything-claude-code@everything-claude-code": true
  }
}
```

This gives you instant access to all commands, agents, skills, and hooks.

> **Note:** The Claude Code plugin system does not support distributing `rules` via plugins ([upstream limitation](https://code.claude.com/docs/en/plugins-reference)). You need to install rules manually:
>
> ```bash
> # Clone the repo first
> git clone https://github.com/affaan-m/everything-claude-code.git
>
> # Option A: User-level rules (applies to all projects)
> mkdir -p ~/.claude/rules
> cp -r everything-claude-code/rules/common ~/.claude/rules/
> cp -r everything-claude-code/rules/typescript ~/.claude/rules/   # pick your stack
> cp -r everything-claude-code/rules/python ~/.claude/rules/
> cp -r everything-claude-code/rules/golang ~/.claude/rules/
> cp -r everything-claude-code/rules/php ~/.claude/rules/
>
> # Option B: Project-level rules (applies to current project only)
> mkdir -p .claude/rules
> cp -r everything-claude-code/rules/common .claude/rules/
> cp -r everything-claude-code/rules/typescript .claude/rules/     # pick your stack
> ```

---

### Option 2: Manual Installation

If you prefer manual control over what's installed:

```bash
# Clone the repo
git clone https://github.com/affaan-m/everything-claude-code.git

# Copy agents to your Claude config
cp everything-claude-code/agents/*.md ~/.claude/agents/

# Copy rules directories (common + language-specific)
mkdir -p ~/.claude/rules
cp -r everything-claude-code/rules/common ~/.claude/rules/
cp -r everything-claude-code/rules/typescript ~/.claude/rules/   # pick your stack
cp -r everything-claude-code/rules/python ~/.claude/rules/
cp -r everything-claude-code/rules/golang ~/.claude/rules/
cp -r everything-claude-code/rules/php ~/.claude/rules/

# Copy commands
cp everything-claude-code/commands/*.md ~/.claude/commands/

# Copy skills (core vs niche)
# Recommended (new users): core/general skills only
cp -r everything-claude-code/.agents/skills/* ~/.claude/skills/
cp -r everything-claude-code/skills/search-first ~/.claude/skills/

# Optional: add niche/framework-specific skills only when needed
# for s in django-patterns django-tdd laravel-patterns springboot-patterns; do
# cp -r everything-claude-code/skills/$s ~/.claude/skills/
# done
```

#### Add hooks to settings.json

Copy the hooks from `hooks/hooks.json` to your `~/.claude/settings.json`.

#### Configure MCPs

Copy desired MCP servers from `mcp-configs/mcp-servers.json` to your `~/.claude.json`.

**Important:** Replace `YOUR_*_HERE` placeholders with your actual API keys.

---

## Key Concepts

### Agents

Subagents handle delegated tasks with limited scope. Example:

```markdown
---
name: code-reviewer
description: Reviews code for quality, security, and maintainability
tools: ["Read", "Grep", "Glob", "Bash"]
model: opus
---

You are a senior code reviewer...
```

### Skills

Skills are workflow definitions invoked by commands or agents:

```markdown
# TDD Workflow

1. Define interfaces first
2. Write failing tests (RED)
3. Implement minimal code (GREEN)
4. Refactor (IMPROVE)
5. Verify 80%+ coverage
```

### Hooks

Hooks fire on tool events. Example - warn about console.log:

```json
{
  "matcher": "tool == \"Edit\" && tool_input.file_path matches \"\\\\.(ts|tsx|js|jsx)$\"",
  "hooks": [{
    "type": "command",
    "command": "#!/bin/bash\ngrep -n 'console\\.log' \"$file_path\" && echo '[Hook] Remove console.log' >&2"
  }]
}
```

### Rules

Rules are always-follow guidelines, organized into `common/` (language-agnostic) + language-specific directories:

```
rules/
  common/          # Universal principles (always install)
  typescript/      # TS/JS specific patterns and tools
  python/          # Python specific patterns and tools
  golang/          # Go specific patterns and tools
  swift/           # Swift specific patterns and tools
  php/             # PHP specific patterns and tools
```

See [`rules/README.md`](rules/README.md) for installation and structure details.

---

## Which Agent Should I Use?

Not sure where to start? Use this quick reference:

| I want to... | Use this command | Agent used |
|--------------|-----------------|------------|
| Plan a new feature | `/everything-claude-code:plan "Add auth"` | planner |
| Design system architecture | `/everything-claude-code:plan` + architect agent | architect |
| Write code with tests first | `/tdd` | tdd-guide |
| Review code I just wrote | `/code-review` | code-reviewer |
| Fix a failing build | `/build-fix` | build-error-resolver |
| Run end-to-end tests | `/e2e` | e2e-runner |
| Find security vulnerabilities | `/security-scan` | security-reviewer |
| Remove dead code | `/refactor-clean` | refactor-cleaner |
| Update documentation | `/update-docs` | doc-updater |
| Review Go code | `/go-review` | go-reviewer |
| Review Python code | `/python-review` | python-reviewer |
| Review TypeScript/JavaScript code | *(invoke `typescript-reviewer` directly)* | typescript-reviewer |
| Audit database queries | *(auto-delegated)* | database-reviewer |

### Common Workflows

**Starting a new feature:**
```
/everything-claude-code:plan "Add user authentication with OAuth"
                                              → planner creates implementation blueprint
/tdd                                          → tdd-guide enforces write-tests-first
/code-review                                  → code-reviewer checks your work
```

**Fixing a bug:**
```
/tdd                                          → tdd-guide: write a failing test that reproduces it
                                              → implement the fix, verify test passes
/code-review                                  → code-reviewer: catch regressions
```

**Preparing for production:**
```
/security-scan                                → security-reviewer: OWASP Top 10 audit
/e2e                                          → e2e-runner: critical user flow tests
/test-coverage                                → verify 80%+ coverage
```

---

## FAQ

<details>
<summary><b>How do I check which agents/commands are installed?</b></summary>

```bash
/plugin list everything-claude-code@everything-claude-code
```

This shows all available agents, commands, and skills from the plugin.
</details>

<details>
<summary><b>My hooks aren't working / I see "Duplicate hooks file" errors</b></summary>

This is the most common issue. **Do NOT add a `"hooks"` field to `.claude-plugin/plugin.json`.** Claude Code v2.1+ automatically loads `hooks/hooks.json` from installed plugins. Explicitly declaring it causes duplicate detection errors. See [#29](https://github.com/affaan-m/everything-claude-code/issues/29), [#52](https://github.com/affaan-m/everything-claude-code/issues/52), [#103](https://github.com/affaan-m/everything-claude-code/issues/103).
</details>

<details>
<summary><b>Can I use ECC with Claude Code on a custom API endpoint or model gateway?</b></summary>

Yes. ECC does not hardcode Anthropic-hosted transport settings. It runs locally through Claude Code's normal CLI/plugin surface, so it works with:

- Anthropic-hosted Claude Code
- Official Claude Code gateway setups using `ANTHROPIC_BASE_URL` and `ANTHROPIC_AUTH_TOKEN`
- Compatible custom endpoints that speak the Anthropic API Claude Code expects

Minimal example:

```bash
export ANTHROPIC_BASE_URL=https://your-gateway.example.com
export ANTHROPIC_AUTH_TOKEN=your-token
claude
```

If your gateway remaps model names, configure that in Claude Code rather than in ECC. ECC's hooks, skills, commands, and rules are model-provider agnostic once the `claude` CLI is already working.

Official references:
- [Claude Code LLM gateway docs](https://docs.anthropic.com/en/docs/claude-code/llm-gateway)
- [Claude Code model configuration docs](https://docs.anthropic.com/en/docs/claude-code/model-config)

</details>

<details>
<summary><b>My context window is shrinking / Claude is running out of context</b></summary>

Too many MCP servers eat your context. Each MCP tool description consumes tokens from your 200k window, potentially reducing it to ~70k.

**Fix:** Disable unused MCPs per project:
```json
// In your project's .claude/settings.json
{
  "disabledMcpServers": ["supabase", "railway", "vercel"]
}
```

Keep under 10 MCPs enabled and under 80 tools active.
</details>

<details>
<summary><b>Can I use only some components (e.g., just agents)?</b></summary>

Yes. Use Option 2 (manual installation) and copy only what you need:

```bash
# Just agents
cp everything-claude-code/agents/*.md ~/.claude/agents/

# Just rules
mkdir -p ~/.claude/rules/
cp -r everything-claude-code/rules/common ~/.claude/rules/
```

Each component is fully independent.
</details>

<details>
<summary><b>Does this work with Cursor / OpenCode / Codex / Antigravity?</b></summary>

Yes. ECC is cross-platform:
- **Cursor**: Pre-translated configs in `.cursor/`. See [Cursor IDE Support](#cursor-ide-support).
- **OpenCode**: Full plugin support in `.opencode/`. See [OpenCode Support](#-opencode-support).
- **Codex**: First-class support for both macOS app and CLI, with adapter drift guards and SessionStart fallback. See PR [#257](https://github.com/affaan-m/everything-claude-code/pull/257).
- **Antigravity**: Tightly integrated setup for workflows, skills, and flattened rules in `.agent/`. See [Antigravity Guide](docs/ANTIGRAVITY-GUIDE.md).
- **Claude Code**: Native — this is the primary target.
</details>

<details>
<summary><b>How do I contribute a new skill or agent?</b></summary>

See [CONTRIBUTING.md](CONTRIBUTING.md). The short version:
1. Fork the repo
2. Create your skill in `skills/your-skill-name/SKILL.md` (with YAML frontmatter)
3. Or create an agent in `agents/your-agent.md`
4. Submit a PR with a clear description of what it does and when to use it
</details>

---

## Running Tests

The plugin includes a comprehensive test suite:

```bash
# Run all tests
node tests/run-all.js

# Run individual test files
node tests/lib/utils.test.js
node tests/lib/package-manager.test.js
node tests/hooks/hooks.test.js
```

---

## Contributing

**Contributions are welcome and encouraged.**

This repo is meant to be a community resource. If you have:
- Useful agents or skills
- Clever hooks
- Better MCP configurations
- Improved rules

Please contribute! See [CONTRIBUTING.md](CONTRIBUTING.md) for guidelines.

### Ideas for Contributions

- Language-specific skills (Rust, C#, Kotlin, Java) — Go, Python, Perl, Swift, and TypeScript already included
- Framework-specific configs (Rails, FastAPI, NestJS) — Django, Spring Boot, Laravel already included
- DevOps agents (Kubernetes, Terraform, AWS, Docker)
- Testing strategies (different frameworks, visual regression)
- Domain-specific knowledge (ML, data engineering, mobile)

---

## Cursor IDE Support

ECC provides **full Cursor IDE support** with hooks, rules, agents, skills, commands, and MCP configs adapted for Cursor's native format.

### Quick Start (Cursor)

```bash
# macOS/Linux
./install.sh --target cursor typescript
./install.sh --target cursor python golang swift php
```

```powershell
# Windows PowerShell
.\install.ps1 --target cursor typescript
.\install.ps1 --target cursor python golang swift php
```

### What's Included

| Component | Count | Details |
|-----------|-------|---------|
| Hook Events | 15 | sessionStart, beforeShellExecution, afterFileEdit, beforeMCPExecution, beforeSubmitPrompt, and 10 more |
| Hook Scripts | 16 | Thin Node.js scripts delegating to `scripts/hooks/` via shared adapter |
| Rules | 34 | 9 common (alwaysApply) + 25 language-specific (TypeScript, Python, Go, Swift, PHP) |
| Agents | Shared | Via AGENTS.md at root (read by Cursor natively) |
| Skills | Shared + Bundled | Via AGENTS.md at root and `.cursor/skills/` for translated additions |
| Commands | Shared | `.cursor/commands/` if installed |
| MCP Config | Shared | `.cursor/mcp.json` if installed |

### Hook Architecture (DRY Adapter Pattern)

Cursor has **more hook events than Claude Code** (20 vs 8). The `.cursor/hooks/adapter.js` module transforms Cursor's stdin JSON to Claude Code's format, allowing existing `scripts/hooks/*.js` to be reused without duplication.

```
Cursor stdin JSON → adapter.js → transforms → scripts/hooks/*.js
                                              (shared with Claude Code)
```

Key hooks:
- **beforeShellExecution** — Blocks dev servers outside tmux (exit 2), git push review
- **afterFileEdit** — Auto-format + TypeScript check + console.log warning
- **beforeSubmitPrompt** — Detects secrets (sk-, ghp_, AKIA patterns) in prompts
- **beforeTabFileRead** — Blocks Tab from reading .env, .key, .pem files (exit 2)
- **beforeMCPExecution / afterMCPExecution** — MCP audit logging

### Rules Format

Cursor rules use YAML frontmatter with `description`, `globs`, and `alwaysApply`:

```yaml
---
description: "TypeScript coding style extending common rules"
globs: ["**/*.ts", "**/*.tsx", "**/*.js", "**/*.jsx"]
alwaysApply: false
---
```

---

## Codex macOS App + CLI Support

ECC provides **first-class Codex support** for both the macOS app and CLI, with a reference configuration, Codex-specific AGENTS.md supplement, and shared skills.

### Quick Start (Codex App + CLI)

```bash
# Run Codex CLI in the repo — AGENTS.md and .codex/ are auto-detected
codex

# Automatic setup: sync ECC assets (AGENTS.md, skills, MCP servers) into ~/.codex
npm install && bash scripts/sync-ecc-to-codex.sh
# or: pnpm install && bash scripts/sync-ecc-to-codex.sh
# or: yarn install && bash scripts/sync-ecc-to-codex.sh
# or: bun install && bash scripts/sync-ecc-to-codex.sh

# Or manually: copy the reference config to your home directory
cp .codex/config.toml ~/.codex/config.toml
```

The sync script safely merges ECC MCP servers into your existing `~/.codex/config.toml` using an **add-only** strategy — it never removes or modifies your existing servers. Run with `--dry-run` to preview changes, or `--update-mcp` to force-refresh ECC servers to the latest recommended config.

For Context7, ECC uses the canonical Codex section name `[mcp_servers.context7]` while still launching the `@upstash/context7-mcp` package. If you already have a legacy `[mcp_servers.context7-mcp]` entry, `--update-mcp` migrates it to the canonical section name.

Codex macOS app:
- Open this repository as your workspace.
- The root `AGENTS.md` is auto-detected.
- `.codex/config.toml` and `.codex/agents/*.toml` work best when kept project-local.
- The reference `.codex/config.toml` intentionally does not pin `model` or `model_provider`, so Codex uses its own current default unless you override it.
- Optional: copy `.codex/config.toml` to `~/.codex/config.toml` for global defaults; keep the multi-agent role files project-local unless you also copy `.codex/agents/`.

### What's Included

| Component | Count | Details |
|-----------|-------|---------|
| Config | 1 | `.codex/config.toml` — top-level approvals/sandbox/web_search, MCP servers, notifications, profiles |
| AGENTS.md | 2 | Root (universal) + `.codex/AGENTS.md` (Codex-specific supplement) |
| Skills | 16 | `.agents/skills/` — SKILL.md + agents/openai.yaml per skill |
| MCP Servers | 6 | Supabase, Playwright, Context7, GitHub, Memory, Sequential Thinking (auto-merged via add-only sync) |
| Profiles | 2 | `strict` (read-only sandbox) and `yolo` (full auto-approve) |
| Agent Roles | 3 | `.codex/agents/` — explorer, reviewer, docs-researcher |

### Skills

Skills at `.agents/skills/` are auto-loaded by Codex:

| Skill | Description |
|-------|-------------|
| tdd-workflow | Test-driven development with 80%+ coverage |
| security-review | Comprehensive security checklist |
| coding-standards | Universal coding standards |
| frontend-patterns | React/Next.js patterns |
| frontend-slides | HTML presentations, PPTX conversion, visual style exploration |
| article-writing | Long-form writing from notes and voice references |
| content-engine | Platform-native social content and repurposing |
| market-research | Source-attributed market and competitor research |
| investor-materials | Decks, memos, models, and one-pagers |
| investor-outreach | Personalized outreach, follow-ups, and intro blurbs |
| backend-patterns | API design, database, caching |
| e2e-testing | Playwright E2E tests |
| eval-harness | Eval-driven development |
| strategic-compact | Context management |
| api-design | REST API design patterns |
| verification-loop | Build, test, lint, typecheck, security |

### Key Limitation

Codex does **not yet provide Claude-style hook execution parity**. ECC enforcement there is instruction-based via `AGENTS.md`, optional `model_instructions_file` overrides, and sandbox/approval settings.

### Multi-Agent Support

Current Codex builds support experimental multi-agent workflows.

- Enable `features.multi_agent = true` in `.codex/config.toml`
- Define roles under `[agents.<name>]`
- Point each role at a file under `.codex/agents/`
- Use `/agent` in the CLI to inspect or steer child agents

ECC ships three sample role configs:

| Role | Purpose |
|------|---------|
| `explorer` | Read-only codebase evidence gathering before edits |
| `reviewer` | Correctness, security, and missing-test review |
| `docs_researcher` | Documentation and API verification before release/docs changes |

---

## OpenCode Support

ECC provides **full OpenCode support** including plugins and hooks.

### Quick Start

```bash
# Install OpenCode
npm install -g opencode

# Run in the repository root
opencode
```

The configuration is automatically detected from `.opencode/opencode.json`.

### Feature Parity

| Feature | Claude Code | OpenCode | Status |
|---------|-------------|----------|--------|
| Agents | PASS: 30 agents | PASS: 12 agents | **Claude Code leads** |
| Commands | PASS: 60 commands | PASS: 31 commands | **Claude Code leads** |
| Skills | PASS: 136 skills | PASS: 37 skills | **Claude Code leads** |
| Hooks | PASS: 8 event types | PASS: 11 events | **OpenCode has more!** |
| Rules | PASS: 29 rules | PASS: 13 instructions | **Claude Code leads** |
| MCP Servers | PASS: 14 servers | PASS: Full | **Full parity** |
| Custom Tools | PASS: Via hooks | PASS: 6 native tools | **OpenCode is better** |

### Hook Support via Plugins

OpenCode's plugin system is MORE sophisticated than Claude Code with 20+ event types:

| Claude Code Hook | OpenCode Plugin Event |
|-----------------|----------------------|
| PreToolUse | `tool.execute.before` |
| PostToolUse | `tool.execute.after` |
| Stop | `session.idle` |
| SessionStart | `session.created` |
| SessionEnd | `session.deleted` |

**Additional OpenCode events**: `file.edited`, `file.watcher.updated`, `message.updated`, `lsp.client.diagnostics`, `tui.toast.show`, and more.

### Available Commands (31+)

| Command | Description |
|---------|-------------|
| `/plan` | Create implementation plan |
| `/tdd` | Enforce TDD workflow |
| `/code-review` | Review code changes |
| `/build-fix` | Fix build errors |
| `/e2e` | Generate E2E tests |
| `/refactor-clean` | Remove dead code |
| `/orchestrate` | Multi-agent workflow |
| `/learn` | Extract patterns from session |
| `/checkpoint` | Save verification state |
| `/verify` | Run verification loop |
| `/eval` | Evaluate against criteria |
| `/update-docs` | Update documentation |
| `/update-codemaps` | Update codemaps |
| `/test-coverage` | Analyze coverage |
| `/go-review` | Go code review |
| `/go-test` | Go TDD workflow |
| `/go-build` | Fix Go build errors |
| `/python-review` | Python code review (PEP 8, type hints, security) |
| `/multi-plan` | Multi-model collaborative planning |
| `/multi-execute` | Multi-model collaborative execution |
| `/multi-backend` | Backend-focused multi-model workflow |
| `/multi-frontend` | Frontend-focused multi-model workflow |
| `/multi-workflow` | Full multi-model development workflow |
| `/pm2` | Auto-generate PM2 service commands |
| `/sessions` | Manage session history |
| `/skill-create` | Generate skills from git |
| `/instinct-status` | View learned instincts |
| `/instinct-import` | Import instincts |
| `/instinct-export` | Export instincts |
| `/evolve` | Cluster instincts into skills |
| `/promote` | Promote project instincts to global scope |
| `/projects` | List known projects and instinct stats |
| `/prune` | Delete expired pending instincts (30d TTL) |
| `/learn-eval` | Extract and evaluate patterns before saving |
| `/setup-pm` | Configure package manager |
| `/harness-audit` | Audit harness reliability, eval readiness, and risk posture |
| `/loop-start` | Start controlled agentic loop execution pattern |
| `/loop-status` | Inspect active loop status and checkpoints |
| `/quality-gate` | Run quality gate checks for paths or entire repo |
| `/model-route` | Route tasks to models by complexity and budget |

### Plugin Installation

**Option 1: Use directly**
```bash
cd everything-claude-code
opencode
```

**Option 2: Install as npm package**
```bash
npm install ecc-universal
```

Then add to your `opencode.json`:
```json
{
  "plugin": ["ecc-universal"]
}
```

That npm plugin entry enables ECC's published OpenCode plugin module (hooks/events and plugin tools).
It does **not** automatically add ECC's full command/agent/instruction catalog to your project config.

For the full ECC OpenCode setup, either:
- run OpenCode inside this repository, or
- copy the bundled `.opencode/` config assets into your project and wire the `instructions`, `agent`, and `command` entries in `opencode.json`

### Documentation

- **Migration Guide**: `.opencode/MIGRATION.md`
- **OpenCode Plugin README**: `.opencode/README.md`
- **Consolidated Rules**: `.opencode/instructions/INSTRUCTIONS.md`
- **LLM Documentation**: `llms.txt` (complete OpenCode docs for LLMs)

---

## Cross-Tool Feature Parity

ECC is the **first plugin to maximize every major AI coding tool**. Here's how each harness compares:

| Feature | Claude Code | Cursor IDE | Codex CLI | OpenCode |
|---------|------------|------------|-----------|----------|
| **Agents** | 21 | Shared (AGENTS.md) | Shared (AGENTS.md) | 12 |
| **Commands** | 52 | Shared | Instruction-based | 31 |
| **Skills** | 102 | Shared | 10 (native format) | 37 |
| **Hook Events** | 8 types | 15 types | None yet | 11 types |
| **Hook Scripts** | 20+ scripts | 16 scripts (DRY adapter) | N/A | Plugin hooks |
| **Rules** | 34 (common + lang) | 34 (YAML frontmatter) | Instruction-based | 13 instructions |
| **Custom Tools** | Via hooks | Via hooks | N/A | 6 native tools |
| **MCP Servers** | 14 | Shared (mcp.json) | 7 (auto-merged via TOML parser) | Full |
| **Config Format** | settings.json | hooks.json + rules/ | config.toml | opencode.json |
| **Context File** | CLAUDE.md + AGENTS.md | AGENTS.md | AGENTS.md | AGENTS.md |
| **Secret Detection** | Hook-based | beforeSubmitPrompt hook | Sandbox-based | Hook-based |
| **Auto-Format** | PostToolUse hook | afterFileEdit hook | N/A | file.edited hook |
| **Version** | Plugin | Plugin | Reference config | 1.9.0 |

**Key architectural decisions:**
- **AGENTS.md** at root is the universal cross-tool file (read by all 4 tools)
- **DRY adapter pattern** lets Cursor reuse Claude Code's hook scripts without duplication
- **Skills format** (SKILL.md with YAML frontmatter) works across Claude Code, Codex, and OpenCode
- Codex's lack of hooks is compensated by `AGENTS.md`, optional `model_instructions_file` overrides, and sandbox permissions

---

## Background

I've been using Claude Code since the experimental rollout. Won the Anthropic x Forum Ventures hackathon in Sep 2025 with [@DRodriguezFX](https://x.com/DRodriguezFX) — built [zenith.chat](https://zenith.chat) entirely using Claude Code.

These configs are battle-tested across multiple production applications.

---

## Token Optimization

Claude Code usage can be expensive if you don't manage token consumption. These settings significantly reduce costs without sacrificing quality.

### Recommended Settings

Add to `~/.claude/settings.json`:

```json
{
  "model": "sonnet",
  "env": {
    "MAX_THINKING_TOKENS": "10000",
    "CLAUDE_AUTOCOMPACT_PCT_OVERRIDE": "50"
  }
}
```

| Setting | Default | Recommended | Impact |
|---------|---------|-------------|--------|
| `model` | opus | **sonnet** | ~60% cost reduction; handles 80%+ of coding tasks |
| `MAX_THINKING_TOKENS` | 31,999 | **10,000** | ~70% reduction in hidden thinking cost per request |
| `CLAUDE_AUTOCOMPACT_PCT_OVERRIDE` | 95 | **50** | Compacts earlier — better quality in long sessions |

Switch to Opus only when you need deep architectural reasoning:
```
/model opus
```

### Daily Workflow Commands

| Command | When to Use |
|---------|-------------|
| `/model sonnet` | Default for most tasks |
| `/model opus` | Complex architecture, debugging, deep reasoning |
| `/clear` | Between unrelated tasks (free, instant reset) |
| `/compact` | At logical task breakpoints (research done, milestone complete) |
| `/cost` | Monitor token spending during session |

### Strategic Compaction

The `strategic-compact` skill (included in this plugin) suggests `/compact` at logical breakpoints instead of relying on auto-compaction at 95% context. See `skills/strategic-compact/SKILL.md` for the full decision guide.

**When to compact:**
- After research/exploration, before implementation
- After completing a milestone, before starting the next
- After debugging, before continuing feature work
- After a failed approach, before trying a new one

**When NOT to compact:**
- Mid-implementation (you'll lose variable names, file paths, partial state)

### Context Window Management

**Critical:** Don't enable all MCPs at once. Each MCP tool description consumes tokens from your 200k window, potentially reducing it to ~70k.

- Keep under 10 MCPs enabled per project
- Keep under 80 tools active
- Use `disabledMcpServers` in project config to disable unused ones

### Agent Teams Cost Warning

Agent Teams spawns multiple context windows. Each teammate consumes tokens independently. Only use for tasks where parallelism provides clear value (multi-module work, parallel reviews). For simple sequential tasks, subagents are more token-efficient.

---

## WARNING: Important Notes

### Token Optimization

Hitting daily limits? See the **[Token Optimization Guide](docs/token-optimization.md)** for recommended settings and workflow tips.

Quick wins:

```json
// ~/.claude/settings.json
{
  "model": "sonnet",
  "env": {
    "MAX_THINKING_TOKENS": "10000",
    "CLAUDE_AUTOCOMPACT_PCT_OVERRIDE": "50",
    "CLAUDE_CODE_SUBAGENT_MODEL": "haiku"
  }
}
```

Use `/clear` between unrelated tasks, `/compact` at logical breakpoints, and `/cost` to monitor spending.

### Customization

These configs work for my workflow. You should:
1. Start with what resonates
2. Modify for your stack
3. Remove what you don't use
4. Add your own patterns

---

## Sponsors

This project is free and open source. Sponsors help keep it maintained and growing.

[**Become a Sponsor**](https://github.com/sponsors/affaan-m) | [Sponsor Tiers](SPONSORS.md) | [Sponsorship Program](SPONSORING.md)

---

## Star History

[![Star History Chart](https://api.star-history.com/svg?repos=affaan-m/everything-claude-code&type=Date)](https://star-history.com/#affaan-m/everything-claude-code&Date)

---

## Links

- **Shorthand Guide (Start Here):** [The Shorthand Guide to Everything Claude Code](https://x.com/affaanmustafa/status/2012378465664745795)
- **Longform Guide (Advanced):** [The Longform Guide to Everything Claude Code](https://x.com/affaanmustafa/status/2014040193557471352)
- **Security Guide:** [Security Guide](./the-security-guide.md) | [Thread](https://x.com/affaanmustafa/status/2033263813387223421)
- **Follow:** [@affaanmustafa](https://x.com/affaanmustafa)

---

## License

MIT - Use freely, modify as needed, contribute back if you can.

---

**Star this repo if it helps. Read both guides. Build something great.**
