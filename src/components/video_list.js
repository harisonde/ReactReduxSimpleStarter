import React from 'react';
import VideoListItem from './video_list_item';

const VideoList = (props) => {

  const videosItems = props.videos.map((video) => {
    return (<VideoListItem
      key={video.etag}
      onVideoSelect={props.onVideoSelect}
      video= {video}/>
    );
  });

  return (
      <ul className="col-md-8 list_group">
          {videosItems}
      </ul>
  );
}

export default VideoList;
