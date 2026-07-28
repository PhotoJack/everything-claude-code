import {
  AbsoluteFill,
  interpolate,
  spring,
  useCurrentFrame,
  useVideoConfig,
} from 'remotion';

const POSITION_STYLES = {
  center: {justifyContent: 'center', alignItems: 'center'},
  'top-center': {justifyContent: 'flex-start', alignItems: 'center', paddingTop: 80},
  'bottom-center': {justifyContent: 'flex-end', alignItems: 'center', paddingBottom: 80},
};

export const TitleOverlay = ({text, position = 'center'}) => {
  const frame = useCurrentFrame();
  const {fps, durationInFrames} = useVideoConfig();

  const enterScale = spring({frame, fps, config: {damping: 14}});

  const exitOpacity = interpolate(
    frame,
    [durationInFrames - 15, durationInFrames],
    [1, 0],
    {extrapolateLeft: 'clamp', extrapolateRight: 'clamp'},
  );

  const posStyles = POSITION_STYLES[position] || POSITION_STYLES.center;

  return (
    <AbsoluteFill style={{...posStyles}}>
      <div
        style={{
          transform: `scale(${enterScale})`,
          opacity: exitOpacity,
          color: '#fff',
          fontSize: 72,
          fontWeight: 'bold',
          fontFamily: 'system-ui, sans-serif',
          textShadow: '0 4px 20px rgba(0,0,0,0.7)',
          textAlign: 'center',
          padding: '0 40px',
        }}
      >
        {text}
      </div>
    </AbsoluteFill>
  );
};
