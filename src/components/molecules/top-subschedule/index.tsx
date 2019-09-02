import React from 'react';
import { Link } from 'gatsby';
import dayjs from 'dayjs';

interface Props {
  date: string | Date | dayjs.Dayjs;
  title: string;
  venue: string;
  href: string;
}

const TopSubschedule: React.FC<Props> = props => (
  <Link to={props.href} className="m-top-subschedule">
    <div className="m-top-subschedule__date">{dayjs(props.date).format('YYYY.MM.DD ddd')}</div>
    <div className="m-top-subschedule__title">{props.title}</div>
    <div className="m-top-subschedule__venue">{props.venue}</div>
  </Link>
);

export default TopSubschedule;
