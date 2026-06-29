import {AbsoluteFill, OffthreadVideo, interpolate, useCurrentFrame, useVideoConfig} from 'remotion';

export const ClipWithLabel = ({src, startFrom = 0, label, labelPosition = 'bottom-left'}) => {
  const frame = useCurrentFrame();
  const {durationInFrames} = useVideoConfig();

  const labelOpacity = interpolate(frame, [3, 10], [0, 1], {
    extrapolateLeft: 'clamp',
    extrapolateRight: 'clamp',
  });

  const labelExitOpacity = interpolate(
    frame,
    [durationInFrames - 8, durationInFrames],
    [1, 0],
    {extrapolateLeft: 'clamp', extrapolateRight: 'clamp'},
  );

  const positionStyles = {
    'bottom-left': {bottom: 40, left: 40},
    'bottom-right': {bottom: 40, right: 40},
    'top-left': {top: 40, left: 40},
    'top-right': {top: 40, right: 40},
    'bottom-center': {bottom: 40, left: '50%', transform: 'translateX(-50%)'},
  };

  return (
    <AbsoluteFill>
      <OffthreadVideo
        src={src}
        startFrom={startFrom}
        style={{width: '100%', height: '100%', objectFit: 'cover'}}
      />
      {label && (
        <div
          style={{
            position: 'absolute',
            ...positionStyles[labelPosition],
            opacity: Math.min(labelOpacity, labelExitOpacity),
            backgroundColor: 'rgba(0,0,0,0.7)',
            padding: '8px 20px',
            borderRadius: 6,
            color: '#fff',
            fontSize: 24,
            fontWeight: 600,
            fontFamily: 'system-ui, sans-serif',
          }}
        >
          {label}
        </div>
      )}
    </AbsoluteFill>
  );
};
