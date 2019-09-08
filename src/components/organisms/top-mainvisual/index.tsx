import React from 'react';
import classnames from 'lib/classnames';
import Appear from 'components/utils/appear';
import imageSrc from 'images/mainvisual.jpg';
import logoSrc from 'images/logo-short.svg';

const TopMainvisual: React.FC = () => (
  <Appear>
    {appeared => (
      <div className={classnames('o-top-mainvisual', { 'o-top-mainvisual--appeared': appeared })}>
        <div className="o-top-mainvisual__imagewrapper">
          <img alt="Three for Flavin" src={imageSrc} className="o-top-mainvisual__image" />
        </div>
        <img alt="Three for Flavin" src={logoSrc} className="o-top-mainvisual__logo" />
      </div>
    )}
  </Appear>
);

export default TopMainvisual;
