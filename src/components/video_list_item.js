import React from 'react';

const VideoListItem = ({video, onVideoSelect}) => {
  console.log(video);
  const imageUrl = video.snippet.thumbnails.default.url;
  return (
    <li onClick={ () => onVideoSelect(video) }className="mod-collection-item">
      <div className="video-list-row">
        <div className="list-img">
          <img src={imageUrl} />
        </div>
        <div className="list-title">
          <h6 className="video-title">{video.snippet.title}</h6>
          <h6 className="video-profile">{video.snippet.channelTitle ? video.snippet.channelTitle : 'Unknown Profile'}</h6>
        </div>
      </div>
    </li>
  );
};

export default VideoListItem;
