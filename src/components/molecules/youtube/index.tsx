import React from 'react';

interface Props {
  videoId: string;
}

const Youtube: React.FC<Props> = props => (
  <div className="m-youtube">
    <iframe
      src={`https://www.youtube.com/embed/${props.videoId}`}
      frameBorder="0"
      allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
    />
  </div>
);

export default Youtube;
