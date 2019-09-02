import React from 'react';
import { Timeline } from 'react-twitter-widgets';

const TopSocial: React.FC = () => (
  <div className="o-top-social">
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
);

export default TopSocial;
