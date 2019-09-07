import React from 'react';
import { Location } from '@reach/router';
import { TransitionGroup, CSSTransition } from 'react-transition-group';

const Transition: React.FC = props => {
  function onEntered() {
    window.scrollTo(0, 0);
  }

  return (
    <Location>
      {context => (
        <>
          <TransitionGroup className="o-transition" appear={true}>
            <CSSTransition
              classNames="o-transition__page-"
              timeout={500}
              onEntered={onEntered}
              key={context.location.pathname}
            >
              <div className="o-transition__page">
                {props.children}
              </div>
            </CSSTransition>
          </TransitionGroup>
        </>
      )}
    </Location>
  );
};

export default Transition;
