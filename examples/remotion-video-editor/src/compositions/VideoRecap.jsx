import {AbsoluteFill, Sequence, interpolate, useCurrentFrame, useVideoConfig} from 'remotion';
import {TitleCard} from '../components/TitleCard';
import {ClipWithLabel} from '../components/ClipWithLabel';
import {Transition} from '../components/Transition';

const TRANSITION_TYPES = ['crossfade', 'slide-left', 'slide-up', 'wipe', 'zoom', 'cut'];

function pickTransition(index, style) {
  if (style === 'random') {
    return TRANSITION_TYPES[index % TRANSITION_TYPES.length];
  }
  return style || 'crossfade';
}

export const VideoRecap = ({
  intro,
  outro,
  clips,
  transitionDuration = 8,
  transitionStyle = 'random',
  accentColor = '#ff4444',
}) => {
  const frame = useCurrentFrame();

  const introFrames = intro ? intro.durationInFrames || 60 : 0;
  const outroFrames = outro ? outro.durationInFrames || 60 : 0;

  const segments = [];

  if (intro) {
    segments.push({
      type: 'title',
      from: 0,
      duration: introFrames,
      props: intro,
    });
  }

  let currentFrame = introFrames;
  clips.forEach((clip, i) => {
    const clipDuration = clip.durationInFrames || 45;
    const overlapWithPrev = i > 0 || intro ? transitionDuration : 0;

    segments.push({
      type: 'clip',
      from: currentFrame - overlapWithPrev,
      duration: clipDuration + overlapWithPrev,
      transitionFrames: overlapWithPrev,
      transitionType: pickTransition(i, transitionStyle),
      props: clip,
      index: i,
    });

    currentFrame += clipDuration - (i < clips.length - 1 ? 0 : 0);
  });

  if (outro) {
    segments.push({
      type: 'title',
      from: currentFrame - transitionDuration,
      duration: outroFrames + transitionDuration,
      props: outro,
    });
  }

  return (
    <AbsoluteFill style={{backgroundColor: '#000'}}>
      {segments.map((seg, i) => (
        <Sequence key={i} from={seg.from} durationInFrames={seg.duration}>
          {seg.type === 'title' ? (
            <TitleCard
              title={seg.props.title}
              subtitle={seg.props.subtitle}
              backgroundColor={seg.props.backgroundColor || '#000'}
              accentColor={accentColor}
            />
          ) : (
            <ClipSegment
              segment={seg}
              prevSegment={segments[i - 1]}
              transitionDuration={transitionDuration}
            />
          )}
        </Sequence>
      ))}
    </AbsoluteFill>
  );
};

const ClipSegment = ({segment, prevSegment, transitionDuration}) => {
  const frame = useCurrentFrame();
  const {durationInFrames} = useVideoConfig();

  const {props, transitionFrames, transitionType} = segment;

  if (transitionFrames > 0 && frame < transitionFrames) {
    const progress = interpolate(frame, [0, transitionFrames], [0, 1], {
      extrapolateLeft: 'clamp',
      extrapolateRight: 'clamp',
    });

    return (
      <Transition type={transitionType} progress={progress}>
        <AbsoluteFill style={{backgroundColor: '#000'}} />
        <ClipWithLabel
          src={props.src}
          startFrom={props.startFrom || 0}
          label={props.label}
          labelPosition={props.labelPosition}
        />
      </Transition>
    );
  }

  return (
    <ClipWithLabel
      src={props.src}
      startFrom={(props.startFrom || 0) + Math.max(0, frame - transitionFrames)}
      label={props.label}
      labelPosition={props.labelPosition}
    />
  );
};
