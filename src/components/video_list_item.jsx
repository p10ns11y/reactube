import React  from 'react'
import video_list  from './video_list.jsx'

const VideoListItem = ({video, onVideoSelect}) => {

  const imageUrl = video.snippet.thumbnails.default.url;

  return (
    <li onClick={() => onVideoSelect(video) } className="list-group-item">
      <div className="video-list media">
        <div className="media-left">
          <img src={imageUrl} alt="" className="media-object"/>
        </div>
        <div className="media-body">
          <div className="media-heading">{video.snippet.title}</div>
        </div>

      </div>
    </li>
  );
};

export default VideoListItem;
