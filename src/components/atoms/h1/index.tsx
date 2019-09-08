import React from 'react';
import classnames from 'lib/classnames';
import Appear from 'components/utils/appear';

interface Props {
  nobar?: boolean;
}

const H1: React.FC<Props> = props => (
  <Appear>
    {appeared => (
      <h1 className={classnames('a-h1', { 'a-h1--nobar': props.nobar, 'a-h1--appeared': appeared })}>
        <span className="a-h1__inner">{props.children}</span>
      </h1>
    )}
  </Appear>
);

export default H1;
