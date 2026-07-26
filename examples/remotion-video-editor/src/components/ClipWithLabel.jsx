import {
  AbsoluteFill,
  OffthreadVideo,
  interpolate,
  staticFile,
  useCurrentFrame,
  useVideoConfig,
} from 'remotion';

export const ClipWithLabel = ({
  src,
  startFrom = 0,
  playbackRate = 1,
  kenBurns = 'none',
  label,
  labelPosition = 'bottom-left',
}) => {
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

  // 'in' zooms 100% -> 112% (pushes toward the subject), 'out' reverses that.
  const scale =
    kenBurns === 'none'
      ? 1
      : interpolate(
          frame,
          [0, durationInFrames],
          kenBurns === 'in' ? [1.0, 1.12] : [1.12, 1.0],
          {extrapolateLeft: 'clamp', extrapolateRight: 'clamp'},
        );

  // Absolute URLs pass through; bare filenames resolve against public/.
  const resolvedSrc = /^(https?:|blob:|data:)/.test(src) ? src : staticFile(src);

  const positionStyles = {
    'bottom-left': {bottom: 40, left: 40},
    'bottom-right': {bottom: 40, right: 40},
    'top-left': {top: 40, left: 40},
    'top-right': {top: 40, right: 40},
    'bottom-center': {bottom: 40, left: '50%', transform: 'translateX(-50%)'},
  };

  return (
    <AbsoluteFill>
      <AbsoluteFill style={{transform: `scale(${scale})`, transformOrigin: 'center center'}}>
        <OffthreadVideo
          src={resolvedSrc}
          startFrom={startFrom}
          playbackRate={playbackRate}
          style={{width: '100%', height: '100%', objectFit: 'cover'}}
        />
      </AbsoluteFill>
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
