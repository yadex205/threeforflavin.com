import React from 'react';

interface Props {
  onClick?: () => void;
}

const Hamburger: React.FC<Props> = props => {
  return (
    <div className="a-hamburger" onClick={() => (props.onClick || (() => {}))()}>
      <div className="a-hamburger__inner">
        <div className="a-hamburger__line" />
        <div className="a-hamburger__line" />
        <div className="a-hamburger__line" />
      </div>
    </div>
  );
};

export default Hamburger;
