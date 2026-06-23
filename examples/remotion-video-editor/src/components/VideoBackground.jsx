import {AbsoluteFill, OffthreadVideo, useCurrentFrame} from 'remotion';

export const VideoBackground = ({src}) => {
  const frame = useCurrentFrame();

  if (!src) {
    const hue = (frame * 0.5) % 360;
    return (
      <AbsoluteFill
        style={{
          background: `linear-gradient(${frame * 0.3}deg, hsl(${hue}, 60%, 20%), hsl(${(hue + 120) % 360}, 50%, 30%), hsl(${(hue + 240) % 360}, 70%, 15%))`,
        }}
      />
    );
  }

  return (
    <AbsoluteFill>
      <OffthreadVideo
        src={src}
        style={{width: '100%', height: '100%', objectFit: 'cover'}}
      />
    </AbsoluteFill>
  );
};
