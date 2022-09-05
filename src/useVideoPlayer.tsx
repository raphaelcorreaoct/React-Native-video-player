import {useMemo, useState} from 'react';
import Video from 'react-native-video';

export const useVideoPlayer = ($video: React.RefObject<Video>) => {
  const [state, setState] = useState({
    paused: true,
    isLoaded: false,
  });

  const NextVideo = () => {};
  const PrevVideo = () => {};

  const playerController = useMemo(
    () => ({
      async play(): Promise<void> {
        setState({...state, paused: false});
      },
      async pause(): Promise<void> {
        setState({...state, paused: true});
      },
      async stop(): Promise<void> {
        setState({...state, paused: true});
      },
      async next(): Promise<void> {},
      async previous(): Promise<void> {},
      async onLoad(): Promise<void> {
        setState({...state, isLoaded: true});
      },
      async togglePlay(): Promise<void> {
        if (state.paused) {
          this.play();
        } else {
          this.pause();
        }
      },
      state,
    }),
    [state],
  );

  return playerController;
};

/**
 * - Play
 * - Pause
 * - Stop
 * - Seekto
 * - FullScreen
 * - PlayList
 *    - Next
 *    - Prev
 * - Speed
 * - Progress
 * - Video State
 */
