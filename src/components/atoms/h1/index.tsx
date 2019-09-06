import React from 'react';

const H1: React.FC = props => (
  <h1 className="a-h1">
    <span className="a-h1__inner">
      {props.children}
    </span>
  </h1>
);

export default H1;
