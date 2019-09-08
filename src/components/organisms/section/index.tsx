import React from 'react';
import classnames from 'lib/classnames';

interface Props {
  fullscreen?: boolean;
}

const Section: React.FC<Props> = props => (
  <section className={classnames('o-section', { 'o-section--fullscreen': props.fullscreen })}>{props.children}</section>
);

export default Section;
