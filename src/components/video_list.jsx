import React  from 'react'
import VideoListItem  from './video_list_item'
// Simple functional component not class based
// HACK : No `this.props`
// AVOID: using for loop use map
const VideoList = (props) => {

  // Remove the code logically refactor the {list} with map
  // let list = []
  // for(let i=0 ; i < props.videos.length; i++){
  //   list.push(<VideoListItem/>)
  // }

  const videoItems = props.videos.map((video) => {
    return (
      <VideoListItem
      onVideoSelect={props.onVideoSelect}
      key={video.etag}
      video={video} />
    );
  });

  return (
    <ul className ="col-md-4 list-group">
    {videoItems}
    </ul>
  );
};

export default VideoList;
