import React from 'react';

const VideoListItem = (props) => {
  const {video, onVideoSelect} = props;
  const imgUrl = video.snippet.thumbnails.default.url;
  return (
    <li onClick= {() => onVideoSelect(video)} className="list-group-item">
      <div className="video-list-item">

        <div className="media-left">
          <img className="media-object" src={imgUrl}/>
        </div>

        <div className="media-body">
            <div className="media-heading">{video.snippet.title}</div>
        </div>
      </div>
    </li>
  );
}

export default VideoListItem;