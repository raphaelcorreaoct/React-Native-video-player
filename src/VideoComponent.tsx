import {Button, View} from 'react-native';
import React, {useRef} from 'react';
import Video, {VideoProperties} from 'react-native-video';
import {useVideoPlayer} from './useVideoPlayer';

export default function VideoPlayer(props: VideoProperties) {
  const $videoRef = useRef(null);
  const videoPlayer = useVideoPlayer($videoRef);

  return (
    <View>
      <Video {...props} ref={$videoRef} onLoad={videoPlayer.onLoad} />
      <View>
        <View></View>
        <View>
          <Button title="Back" onPress={videoPlayer.previous} />
          <Button
            title={videoPlayer.state.paused ? 'Play' : 'Pause'}
            onPress={videoPlayer.togglePlay}
          />
          <Button title="Back" onPress={videoPlayer.previous} />
        </View>
        <View></View>
      </View>
    </View>
  );
}
