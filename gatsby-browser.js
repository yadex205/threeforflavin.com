import React from 'react';
import './src/app.scss';
import './src/vendor/typekit';
import Transition from './src/components/organisms/transition';

export function shouldUpdateScroll() {
  return false;
}

export function wrapPageElement({ element }) {
  return <Transition>{element}</Transition>;
}
