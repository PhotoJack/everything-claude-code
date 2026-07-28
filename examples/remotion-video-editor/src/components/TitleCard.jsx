import {
  AbsoluteFill,
  interpolate,
  spring,
  useCurrentFrame,
  useVideoConfig,
} from 'remotion';

export const TitleCard = ({
  title,
  subtitle,
  backgroundColor = '#000',
  accentColor = '#ff4444',
  textColor = '#fff',
}) => {
  const frame = useCurrentFrame();
  const {fps, durationInFrames} = useVideoConfig();

  const lineWidth = spring({frame, fps, config: {damping: 15, stiffness: 80}});

  const titleY = interpolate(
    spring({frame, fps, config: {damping: 14}}),
    [0, 1],
    [40, 0],
  );
  const titleOpacity = spring({frame, fps, config: {damping: 20}});

  const subtitleOpacity = interpolate(frame, [15, 30], [0, 1], {
    extrapolateLeft: 'clamp',
    extrapolateRight: 'clamp',
  });
  const subtitleY = interpolate(frame, [15, 30], [20, 0], {
    extrapolateLeft: 'clamp',
    extrapolateRight: 'clamp',
  });

  const exitOpacity = interpolate(
    frame,
    [durationInFrames - 10, durationInFrames],
    [1, 0],
    {extrapolateLeft: 'clamp', extrapolateRight: 'clamp'},
  );

  return (
    <AbsoluteFill
      style={{
        backgroundColor,
        justifyContent: 'center',
        alignItems: 'center',
        opacity: exitOpacity,
      }}
    >
      <div
        style={{
          width: lineWidth * 120,
          height: 4,
          backgroundColor: accentColor,
          marginBottom: 30,
          borderRadius: 2,
        }}
      />
      <div
        style={{
          transform: `translateY(${titleY}px)`,
          opacity: titleOpacity,
          color: textColor,
          fontSize: 64,
          fontWeight: 'bold',
          fontFamily: 'system-ui, sans-serif',
          textAlign: 'center',
          padding: '0 60px',
        }}
      >
        {title}
      </div>
      {subtitle && (
        <div
          style={{
            transform: `translateY(${subtitleY}px)`,
            opacity: subtitleOpacity,
            color: accentColor,
            fontSize: 28,
            fontWeight: 500,
            fontFamily: 'system-ui, sans-serif',
            marginTop: 16,
            textTransform: 'uppercase',
            letterSpacing: 4,
          }}
        >
          {subtitle}
        </div>
      )}
    </AbsoluteFill>
  );
};
