import React from 'react';
import VideoPlayer from './VideoComponent';

export default function example() {
  return (
    <VideoPlayer source={{uri: 'https://www.w3schools.com/html/mov_bbb.mp4'}} />
  );
}
