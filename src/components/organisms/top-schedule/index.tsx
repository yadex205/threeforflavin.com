import React from 'react';
import Textarrow from 'components/atoms/textarrow';
import TopPrimaryschedule from 'components/molecules/top-primaryschedule';
import TopSubschedule from 'components/molecules/top-subschedule';

const TopSchedule: React.FC = () => (
  <div className="o-top-schedule">
    <TopPrimaryschedule date="2019-11-23" title="Three for Flavin 3rd One-man Live!" venue="代官山 LOOP" href="#" />
    <ul className="o-top-schedule__sublist">
      <li>
        <TopSubschedule date="2019-09-01" title={'ライブ名'.repeat(10)} venue="北参道 GRAPES" href="#" />
      </li>
      <li>
        <TopSubschedule date="2019-09-01" title={'ライブ名'.repeat(1)} venue="北参道 GRAPES" href="#" />
      </li>
      <li>
        <TopSubschedule date="2019-09-01" title={'ライブ名'.repeat(50)} venue="北参道 GRAPES" href="#" />
      </li>
      <li>
        <TopSubschedule date="2019-09-01" title={'ライブ名'.repeat(7)} venue="北参道 GRAPES" href="#" />
      </li>
    </ul>
    <div className="o-top-schedule__morewrapper">
      <Textarrow.Link href="#">MORE</Textarrow.Link>
    </div>
  </div>
);

export default TopSchedule;
