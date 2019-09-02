import React from 'react';
import { Link } from 'gatsby';
import dayjs from 'dayjs';
import Textarrow from 'components/atoms/textarrow';

interface Props {
  date: string | Date | dayjs.Dayjs;
  title: string;
  venue: string;
  href: string;
}

const TopPrimaryschedule: React.FC<Props> = props => (
  <Link to={props.href} className="m-top-primaryschedule">
    <div className="m-top-primaryschedule__circle">SEE DETAILS</div>
    <div className="m-top-primaryschedule__wrapper">
      <Textarrow>NEXT {dayjs(props.date).format('YYYY.MM.DD ddd')}</Textarrow>
      <div className="m-top-primaryschedule__title">{props.title}</div>
      <div className="m-top-primaryschedule__venue">{props.venue}</div>
    </div>
  </Link>
);

export default TopPrimaryschedule;
