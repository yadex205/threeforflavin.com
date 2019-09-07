import React from 'react';
import { Location } from '@reach/router';
import { TransitionGroup, CSSTransition } from 'react-transition-group';

const Transition: React.FC = props => (
  <Location>
    {context => (
      <>
        <TransitionGroup className="o-transition" appear={true}>
          <CSSTransition classNames="o-transition__page-" timeout={500} key={context.location.pathname}>
            <div className="o-transition__page">
              {props.children}
            </div>
          </CSSTransition>
        </TransitionGroup>
      </>
    )}
  </Location>
);

export default Transition;
