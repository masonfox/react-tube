import React from 'react';

const VideoDetail = ({video}) => {

  if (!video) {
    return <h5>Loading...</h5>;
  }

  const videoId = video.id.videoId;
  const url = `https://www.youtube.com/embed/${videoId}`;

  return (
    <div className="video-detail col m12 l8">
      <div className="video-container mod-video-container">
        <iframe src={url} allowfullscreen frameborder="0"></iframe>
      </div>
      <div className="details">
        <h5>{video.snippet.title}</h5>
        <p>{video.snippet.description}</p>
      </div>
    </div>
  )
};

export default VideoDetail;
