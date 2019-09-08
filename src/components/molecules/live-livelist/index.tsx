import React from 'react';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
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

const LiveLivelist = React.forwardRef<HTMLUListElement, Props>((props, ref) => (
  <ul className="m-live-livelist" ref={ref}>
    <TransitionGroup component={null} appear={true}>
      {React.Children.map(props.children, child => (
        <CSSTransition timeout={500} classNames="m-live-livelist__itemwrapper-">
          <li className="m-live-livelist__itemwrapper">{child}</li>
        </CSSTransition>
      ))}
    </TransitionGroup>
  </ul>
));

LiveLivelist.displayName = 'LiveLivelist';

export default LiveLivelist;
