import React from 'react';
import imageSrc from 'images/mainvisual.jpg';
import logoSrc from 'images/logo-short.svg';

const TopMainvisual: React.FC = () => (
  <div className="o-top-mainvisual">
    <div className="o-top-mainvisual__imagewrapper">
      <img alt="Three for Flavin" src={imageSrc} className="o-top-mainvisual__image" />
    </div>
    <img alt="Three for Flavin" src={logoSrc} className="o-top-mainvisual__logo" />
  </div>
);

export default TopMainvisual;
