import {Composition} from 'remotion';
import {VideoWithOverlays} from './compositions/VideoWithOverlays';
import {TextOverlayDemo} from './compositions/TextOverlayDemo';
import {VideoRecap} from './compositions/VideoRecap';
import {RECAP_CONFIG} from './recap-config';

function calculateRecapDuration(config) {
  const introFrames = config.intro ? config.intro.durationInFrames || 60 : 0;
  const outroFrames = config.outro ? config.outro.durationInFrames || 60 : 0;
  const clipFrames = config.clips.reduce(
    (sum, c) => sum + (c.durationInFrames || 45),
    0,
  );
  return introFrames + clipFrames + outroFrames;
}

export const RemotionRoot = () => {
  const recapDuration = calculateRecapDuration(RECAP_CONFIG);

  return (
    <>
      <Composition
        id="VideoRecap"
        component={VideoRecap}
        durationInFrames={recapDuration}
        fps={RECAP_CONFIG.fps}
        width={RECAP_CONFIG.width}
        height={RECAP_CONFIG.height}
        defaultProps={{
          intro: RECAP_CONFIG.intro,
          outro: RECAP_CONFIG.outro,
          clips: RECAP_CONFIG.clips,
          transitionDuration: RECAP_CONFIG.transitionDuration,
          transitionStyle: RECAP_CONFIG.transitionStyle,
          accentColor: RECAP_CONFIG.accentColor,
        }}
      />
      <Composition
        id="VideoWithOverlays"
        component={VideoWithOverlays}
        durationInFrames={300}
        fps={30}
        width={1920}
        height={1080}
        defaultProps={{
          videoSrc: null,
          overlays: [
            {
              type: 'title',
              text: 'My Video Title',
              startFrame: 0,
              durationInFrames: 90,
              position: 'center',
            },
            {
              type: 'lower-third',
              text: 'John Doe — Director',
              startFrame: 60,
              durationInFrames: 120,
              position: 'bottom-left',
            },
            {
              type: 'caption',
              text: 'Subscribe for more!',
              startFrame: 200,
              durationInFrames: 100,
              position: 'bottom-center',
            },
          ],
        }}
      />
      <Composition
        id="TextOverlayDemo"
        component={TextOverlayDemo}
        durationInFrames={150}
        fps={30}
        width={1920}
        height={1080}
        defaultProps={{
          title: 'Hello Remotion!',
          subtitle: 'Programmatic video editing with React',
        }}
      />
    </>
  );
};
