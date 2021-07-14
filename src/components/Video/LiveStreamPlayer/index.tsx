import React from 'react';
import VideoPlayer from '../VideoPlayer';

interface IProps {
  eventId: string;
  url: string;
}

export const LiveStreamPlayer = React.memo(({url, eventId}: IProps) => {
  return <VideoPlayer id={eventId} uri={url} aspectRatio="9:16" isLive={true}/>;
}, (prevProps, nextProps) => {
  return prevProps.url === nextProps.url
})

LiveStreamPlayer.displayName = "LiveStreamPlayer";