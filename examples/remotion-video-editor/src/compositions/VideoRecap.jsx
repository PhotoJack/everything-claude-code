import {Fragment} from 'react';
import {AbsoluteFill} from 'remotion';
import {TransitionSeries, linearTiming} from '@remotion/transitions';
import {TitleCard} from '../components/TitleCard';
import {ClipWithLabel} from '../components/ClipWithLabel';
import {getPresentation} from '../transitions';

export const VideoRecap = ({
  intro,
  outro,
  clips,
  transitionDuration = 8,
  transitionStyle = 'random',
  accentColor = '#ff4444',
}) => {
  const segments = [];

  if (intro) {
    segments.push({type: 'title', duration: intro.durationInFrames || 60, props: intro});
  }

  clips.forEach((clip) => {
    segments.push({type: 'clip', duration: clip.durationInFrames || 45, props: clip});
  });

  if (outro) {
    segments.push({type: 'title', duration: outro.durationInFrames || 60, props: outro});
  }

  return (
    <AbsoluteFill style={{backgroundColor: '#000'}}>
      <TransitionSeries>
        {segments.map((segment, i) => (
          <Fragment key={i}>
            <TransitionSeries.Sequence durationInFrames={segment.duration}>
              {segment.type === 'title' ? (
                <TitleCard
                  title={segment.props.title}
                  subtitle={segment.props.subtitle}
                  backgroundColor={segment.props.backgroundColor || '#000'}
                  accentColor={accentColor}
                />
              ) : (
                <ClipWithLabel
                  src={segment.props.src}
                  startFrom={segment.props.startFrom || 0}
                  playbackRate={segment.props.playbackRate}
                  kenBurns={segment.props.kenBurns}
                  label={segment.props.label}
                  labelPosition={segment.props.labelPosition}
                />
              )}
            </TransitionSeries.Sequence>

            {i < segments.length - 1 && (
              <TransitionSeries.Transition
                presentation={getPresentation(i, transitionStyle)}
                timing={linearTiming({durationInFrames: transitionDuration})}
              />
            )}
          </Fragment>
        ))}
      </TransitionSeries>
    </AbsoluteFill>
  );
};
