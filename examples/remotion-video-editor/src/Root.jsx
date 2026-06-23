import {Composition} from 'remotion';
import {VideoWithOverlays} from './compositions/VideoWithOverlays';
import {TextOverlayDemo} from './compositions/TextOverlayDemo';

export const RemotionRoot = () => {
  return (
    <>
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
