import {
  AbsoluteFill,
  interpolate,
  useCurrentFrame,
  useVideoConfig,
} from 'remotion';

export const LowerThird = ({text}) => {
  const frame = useCurrentFrame();
  const {durationInFrames} = useVideoConfig();

  const slideIn = interpolate(frame, [0, 15], [-300, 0], {
    extrapolateLeft: 'clamp',
    extrapolateRight: 'clamp',
  });

  const slideOut = interpolate(
    frame,
    [durationInFrames - 15, durationInFrames],
    [0, -300],
    {extrapolateLeft: 'clamp', extrapolateRight: 'clamp'},
  );

  const translateX = frame < durationInFrames - 15 ? slideIn : slideOut;

  const barWidth = interpolate(frame, [5, 20], [0, 4], {
    extrapolateLeft: 'clamp',
    extrapolateRight: 'clamp',
  });

  return (
    <AbsoluteFill
      style={{
        justifyContent: 'flex-end',
        alignItems: 'flex-start',
        padding: '0 0 100px 60px',
      }}
    >
      <div
        style={{
          transform: `translateX(${translateX}px)`,
          display: 'flex',
          alignItems: 'stretch',
        }}
      >
        <div
          style={{
            width: barWidth,
            backgroundColor: '#ff4444',
            marginRight: 16,
            borderRadius: 2,
          }}
        />
        <div
          style={{
            backgroundColor: 'rgba(0, 0, 0, 0.75)',
            padding: '16px 32px',
            borderRadius: 6,
          }}
        >
          <div
            style={{
              color: '#fff',
              fontSize: 28,
              fontWeight: 600,
              fontFamily: 'system-ui, sans-serif',
              whiteSpace: 'nowrap',
            }}
          >
            {text}
          </div>
        </div>
      </div>
    </AbsoluteFill>
  );
};
