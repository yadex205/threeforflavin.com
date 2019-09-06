import React from 'react';
import { Link } from 'gatsby';
import dayjs from 'dayjs';

interface ItemProps {
  date: string | Date | dayjs.Dayjs;
  title: string;
  venue: string;
  href: string;
}

export const LiveLivelistItem: React.FC<ItemProps> = props => (
  <Link to={props.href} className="m-live-livelist__item">
    <div className="m-live-livelist__date">{dayjs(props.date).format('YYYY.MM.DD ddd')}</div>
    <div className="m-live-livelist__title">{props.title}</div>
    <div className="m-live-livelist__venue">{props.venue}</div>
  </Link>
);

interface Props {
  children: React.ReactElement<ItemProps> | React.ReactElement<ItemProps>[];
}

const LiveLivelist: React.FC<Props> = props => (
  <ul className="m-live-livelist">
    {React.Children.map(props.children, child => (
      <li>{child}</li>
    ))}
  </ul>
);

export default LiveLivelist;
