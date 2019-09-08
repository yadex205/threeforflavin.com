import React from 'react';
import { Link } from 'gatsby';
import dayjs from 'dayjs';
import classnames from 'lib/classnames';
import Appear from 'components/utils/appear';

interface Props {
  date: string | Date | dayjs.Dayjs;
  title: string;
  venue: string;
  href: string;
}

const TopSubschedule: React.FC<Props> = props => (
  <Appear>
    {appeared => (
      <Link to={props.href} className={classnames('m-top-subschedule', { 'm-top-subschedule--appeared': appeared })}>
        <div className="m-top-subschedule__date">{dayjs(props.date).format('YYYY.MM.DD ddd')}</div>
        <div className="m-top-subschedule__title">{props.title}</div>
        <div className="m-top-subschedule__venue">{props.venue}</div>
      </Link>
    )}
  </Appear>
);

export default TopSubschedule;
