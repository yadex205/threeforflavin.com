import React from 'react';

interface Props {
  title: string;
  imgsrc: string;
}

const Discography: React.FC<Props> = props => (
  <div className="m-discography">
    <div className="m-discography__artwork">
      <img alt={props.title} src={props.imgsrc} />
    </div>
    <div className="m-discography__info">
      <div className="m-discography__title">{props.title}</div>
      <div className="m-discography__detail">{props.children}</div>
    </div>
  </div>
);

export default Discography;
