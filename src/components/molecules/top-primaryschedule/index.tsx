import React from 'react';
import { Link } from 'gatsby';
import dayjs from 'dayjs';
import classnames from 'lib/classnames';
import Appear from 'components/utils/appear';
import Textarrow from 'components/atoms/textarrow';

interface Props {
  date: string | Date | dayjs.Dayjs;
  title: string;
  venue: string;
  href: string;
}

const TopPrimaryschedule: React.FC<Props> = props => (
  <Appear>
    {appear => (
      <Link
        to={props.href}
        className={classnames('m-top-primaryschedule', { 'm-top-primaryschedule--appeared': appear })}
      >
        <div className="m-top-primaryschedule__circle">SEE DETAILS</div>
        <div className="m-top-primaryschedule__wrapper">
          <Textarrow>NEXT {dayjs(props.date).format('YYYY.MM.DD ddd')}</Textarrow>
          <div className="m-top-primaryschedule__title">{props.title}</div>
          <div className="m-top-primaryschedule__venue">{props.venue}</div>
        </div>
      </Link>
    )}
  </Appear>
);

export default TopPrimaryschedule;
