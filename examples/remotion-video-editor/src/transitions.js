import {AbsoluteFill} from 'remotion';
import {fade} from '@remotion/transitions/fade';
import {slide} from '@remotion/transitions/slide';
import {wipe} from '@remotion/transitions/wipe';

// Custom presentation: not shipped by @remotion/transitions, built the same
// way its built-ins are — a component keyed off presentationDirection/progress.
const ZoomPresentationComponent = ({
  children,
  presentationProgress,
  presentationDirection,
}) => {
  const isEntering = presentationDirection === 'entering';
  const scale = isEntering
    ? 0.7 + presentationProgress * 0.3
    : 1 + presentationProgress * 0.3;
  const opacity = isEntering ? presentationProgress : 1 - presentationProgress;

  return (
    <AbsoluteFill
      style={{opacity, transform: `scale(${scale})`, transformOrigin: 'center center'}}
    >
      {children}
    </AbsoluteFill>
  );
};

const zoom = () => ({component: ZoomPresentationComponent, props: {}});

// Custom presentation: hard cut with no blending, expressed as a presentation
// so it can slot into the same TransitionSeries.Transition timing model.
const CutPresentationComponent = ({
  children,
  presentationProgress,
  presentationDirection,
}) => {
  const isEntering = presentationDirection === 'entering';
  const visible = isEntering ? presentationProgress >= 1 : presentationProgress < 1;

  return <AbsoluteFill style={{opacity: visible ? 1 : 0}}>{children}</AbsoluteFill>;
};

const cut = () => ({component: CutPresentationComponent, props: {}});

const PRESENTATIONS = {
  crossfade: () => fade(),
  'slide-left': () => slide({direction: 'from-right'}),
  'slide-up': () => slide({direction: 'from-bottom'}),
  wipe: () => wipe({direction: 'from-left'}),
  zoom,
  cut,
};

const CYCLE_ORDER = ['crossfade', 'slide-left', 'slide-up', 'wipe', 'zoom', 'cut'];

/**
 * Returns a @remotion/transitions presentation for the given clip index.
 * style: one of PRESENTATIONS' keys, or 'random' to cycle through all of them
 * so consecutive cuts don't repeat the same look.
 */
export function getPresentation(index, style = 'random') {
  const key = style === 'random' ? CYCLE_ORDER[index % CYCLE_ORDER.length] : style;
  const factory = PRESENTATIONS[key] || PRESENTATIONS.crossfade;
  return factory();
}
