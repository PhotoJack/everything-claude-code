import {AbsoluteFill, Sequence} from 'remotion';
import {VideoBackground} from '../components/VideoBackground';
import {TitleOverlay} from '../components/TitleOverlay';
import {LowerThird} from '../components/LowerThird';
import {CaptionOverlay} from '../components/CaptionOverlay';

const OVERLAY_COMPONENTS = {
  title: TitleOverlay,
  'lower-third': LowerThird,
  caption: CaptionOverlay,
};

export const VideoWithOverlays = ({videoSrc, overlays}) => {
  return (
    <AbsoluteFill>
      <VideoBackground src={videoSrc} />

      {overlays.map((overlay, i) => {
        const Component = OVERLAY_COMPONENTS[overlay.type];
        if (!Component) return null;

        return (
          <Sequence
            key={i}
            from={overlay.startFrame}
            durationInFrames={overlay.durationInFrames}
          >
            <Component text={overlay.text} position={overlay.position} />
          </Sequence>
        );
      })}
    </AbsoluteFill>
  );
};
