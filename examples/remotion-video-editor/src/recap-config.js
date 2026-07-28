/**
 * Recap configuration — edit this file to define your video recap.
 *
 * Each clip needs:
 *   src:              full URL, or a bare filename inside public/ (e.g. 'clip01.mp4')
 *   durationInFrames: how many frames this clip plays (at 30fps, 30 = 1 second)
 *   startFrom:        (optional) start playback from this frame in the source video
 *   playbackRate:     (optional) speed multiplier — 1 = normal, 0.5 = slow-mo, 2 = double speed
 *   kenBurns:         (optional) 'in' | 'out' | 'none' — subtle zoom while the clip plays
 *   label:            (optional) text label overlaid on the clip
 *   labelPosition:    (optional) 'bottom-left' | 'bottom-right' | 'top-left' | 'top-right' | 'bottom-center'
 */

const RECAP_CONFIG = {
  fps: 30,
  width: 1920,
  height: 1080,

  // Transition between clips: 'crossfade' | 'slide-left' | 'slide-up' | 'wipe' | 'zoom' | 'cut' | 'random'
  transitionStyle: 'random',
  transitionDuration: 8,

  accentColor: '#ff4444',

  intro: {
    title: '2024 Recap',
    subtitle: 'The Year in Review',
    durationInFrames: 75,
  },

  outro: {
    title: 'Thanks for Watching',
    subtitle: 'See you next year',
    durationInFrames: 75,
  },

  // Replace these with your actual video file URLs or paths.
  // For local files, drop them in public/ and reference the bare filename
  // (e.g. 'clip01.mp4') — it resolves via staticFile() automatically.
  //
  // Example with 30+ clips at ~45 frames each (1.5s) = ~50s of clip content + intro/outro.
  clips: [
    {src: 'https://example.com/clip01.mp4', durationInFrames: 45, label: 'January', kenBurns: 'in'},
    {src: 'https://example.com/clip02.mp4', durationInFrames: 45, label: 'February', kenBurns: 'out'},
    {src: 'https://example.com/clip03.mp4', durationInFrames: 45, kenBurns: 'in'},
    {src: 'https://example.com/clip04.mp4', durationInFrames: 60, playbackRate: 0.5, kenBurns: 'in'}, // slow-mo hero
    {src: 'https://example.com/clip05.mp4', durationInFrames: 45, label: 'Spring Break', kenBurns: 'out'},
    {src: 'https://example.com/clip06.mp4', durationInFrames: 40, kenBurns: 'in'},
    {src: 'https://example.com/clip07.mp4', durationInFrames: 40, kenBurns: 'out'},
    {src: 'https://example.com/clip08.mp4', durationInFrames: 40, label: 'Summer', kenBurns: 'in'},
    {src: 'https://example.com/clip09.mp4', durationInFrames: 40, kenBurns: 'out'},
    {src: 'https://example.com/clip10.mp4', durationInFrames: 40, kenBurns: 'in'},
    // Add your remaining clips here...
  ],
};

module.exports = {RECAP_CONFIG};
