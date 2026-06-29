import {
  AbsoluteFill,
  interpolate,
  useCurrentFrame,
  useVideoConfig,
} from 'remotion';

export const Transition = ({type = 'crossfade', progress, children}) => {
  if (!Array.isArray(children) || children.length !== 2) {
    return <AbsoluteFill>{children}</AbsoluteFill>;
  }

  const [outgoing, incoming] = children;

  if (type === 'crossfade') {
    return (
      <AbsoluteFill>
        <AbsoluteFill style={{opacity: 1 - progress}}>{outgoing}</AbsoluteFill>
        <AbsoluteFill style={{opacity: progress}}>{incoming}</AbsoluteFill>
      </AbsoluteFill>
    );
  }

  if (type === 'slide-left') {
    return (
      <AbsoluteFill>
        <AbsoluteFill
          style={{transform: `translateX(${-progress * 100}%)`}}
        >
          {outgoing}
        </AbsoluteFill>
        <AbsoluteFill
          style={{transform: `translateX(${(1 - progress) * 100}%)`}}
        >
          {incoming}
        </AbsoluteFill>
      </AbsoluteFill>
    );
  }

  if (type === 'slide-up') {
    return (
      <AbsoluteFill>
        <AbsoluteFill
          style={{transform: `translateY(${-progress * 100}%)`}}
        >
          {outgoing}
        </AbsoluteFill>
        <AbsoluteFill
          style={{transform: `translateY(${(1 - progress) * 100}%)`}}
        >
          {incoming}
        </AbsoluteFill>
      </AbsoluteFill>
    );
  }

  if (type === 'wipe') {
    return (
      <AbsoluteFill>
        <AbsoluteFill>{outgoing}</AbsoluteFill>
        <AbsoluteFill
          style={{
            clipPath: `inset(0 ${(1 - progress) * 100}% 0 0)`,
          }}
        >
          {incoming}
        </AbsoluteFill>
      </AbsoluteFill>
    );
  }

  if (type === 'zoom') {
    return (
      <AbsoluteFill>
        <AbsoluteFill
          style={{
            opacity: 1 - progress,
            transform: `scale(${1 + progress * 0.3})`,
          }}
        >
          {outgoing}
        </AbsoluteFill>
        <AbsoluteFill
          style={{
            opacity: progress,
            transform: `scale(${0.7 + progress * 0.3})`,
          }}
        >
          {incoming}
        </AbsoluteFill>
      </AbsoluteFill>
    );
  }

  // 'cut' — hard cut, no transition
  return (
    <AbsoluteFill>
      {progress < 0.5 ? outgoing : incoming}
    </AbsoluteFill>
  );
};
