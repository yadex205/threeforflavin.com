import React from 'react';
import dayjs from 'dayjs';
import classnames from 'lib/classnames';
import Appear from 'components/utils/appear';
import Textarrow from 'components/atoms/textarrow';
import TopPrimaryschedule from 'components/molecules/top-primaryschedule';
import TopSubschedule from 'components/molecules/top-subschedule';

interface Props {
  acts: {
    date: string | Date | dayjs.Dayjs;
    title: string;
    venue: string;
    href: string;
  }[];
}

const TopSchedule: React.FC<Props> = props => {
  const currentDate = new Date();
  const acts = props.acts.filter(act => dayjs(act.date).isAfter(currentDate));

  const nextAct = acts.shift();

  return (
    <div className="o-top-schedule">
      {nextAct ? (
        <TopPrimaryschedule date={nextAct.date} title={nextAct.title} venue={nextAct.venue} href={nextAct.href} />
      ) : null}
      {acts.length > 0 ? (
        <>
          <ul className="o-top-schedule__sublist">
            {acts.map(act => (
              <li key={act.href}>
                <TopSubschedule date={act.date} title={act.title} venue={act.venue} href={act.href} />
              </li>
            ))}
          </ul>
          <Appear>
            {appeared => (
              <div
                className={classnames('o-top-schedule__morewrapper', {
                  'o-top-schedule__morewrapper--appeared': appeared,
                })}
              >
                <Textarrow.Link href="/live">MORE</Textarrow.Link>
              </div>
            )}
          </Appear>
        </>
      ) : null}
    </div>
  );
};

export default TopSchedule;
