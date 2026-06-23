import {
  AbsoluteFill,
  interpolate,
  useCurrentFrame,
  useVideoConfig,
} from 'remotion';

export const CaptionOverlay = ({text}) => {
  const frame = useCurrentFrame();
  const {durationInFrames} = useVideoConfig();

  const opacity = interpolate(frame, [0, 10], [0, 1], {
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
        justifyContent: 'flex-end',
        alignItems: 'center',
        paddingBottom: 60,
      }}
    >
      <div
        style={{
          opacity: Math.min(opacity, exitOpacity),
          backgroundColor: 'rgba(0, 0, 0, 0.8)',
          padding: '12px 40px',
          borderRadius: 8,
          maxWidth: '80%',
        }}
      >
        <div
          style={{
            color: '#fff',
            fontSize: 32,
            fontFamily: 'system-ui, sans-serif',
            textAlign: 'center',
            lineHeight: 1.4,
          }}
        >
          {text}
        </div>
      </div>
    </AbsoluteFill>
  );
};
