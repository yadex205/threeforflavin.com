import React from 'react';
import classnames from 'lib/classnames';
import Appear from 'components/utils/appear';
import { Timeline } from 'react-twitter-widgets';

const TopSocial: React.FC = () => (
  <Appear>
    {appeared => (
      <div className={classnames('o-top-social', { 'o-top-social--appeared': appeared })}>
        <div className="o-top-social__twitter">
          <Timeline
            dataSource={{
              sourceType: 'profile',
              screenName: 'ThreeforFlavin',
            }}
            options={{
              username: 'ThreeforFlavin',
              chrome: 'noheader nofooter noborders transparent noscrollbar',
              tweetLimit: 3,
            }}
          />
        </div>
      </div>
    )}
  </Appear>
);

export default TopSocial;
