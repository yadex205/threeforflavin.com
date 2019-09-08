import React, { useEffect, useState } from 'react';
import { throttle } from 'lodash';

interface Props {
  children: (appeared: boolean) => React.ReactElement<{ ref: React.Ref<HTMLElement> }>;
}

const Appear: React.FC<Props> = props => {
  const ref = React.createRef<HTMLElement>();
  const [appeared, setAppeared] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (appeared || !el) {
      return () => {};
    }

    if (el.getBoundingClientRect().top < window.innerHeight * 0.8) {
      setTimeout(() => {
        setAppeared(true);
      }, 1000);
      return () => {};
    } else {
      const onScroll = throttle(() => {
        if (el.getBoundingClientRect().top < window.innerHeight * 0.8) {
          setAppeared(true);
        }
      }, 200);
      window.addEventListener('scroll', onScroll);

      return () => {
        window.removeEventListener('scroll', onScroll);
      };
    }
  });

  const child = props.children(appeared);

  return <>{React.cloneElement(child, { ...child.props, ref })}</>;
};

export default Appear;
