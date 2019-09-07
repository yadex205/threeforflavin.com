import React from 'react';

interface Props {
  nobar?: boolean;
}

const H1: React.FC<Props> = props => (
  <h1 className={props.nobar ? 'a-h1 a-h1--nobar' : 'a-h1'}>
    <span className="a-h1__inner">{props.children}</span>
  </h1>
);

export default H1;
