import React from 'react';
import Section from 'components/organisms/section';
import TopMainvisual from 'components/organisms/top-mainvisual';
import TopSchedule from 'components/organisms/top-schedule';

export default function TopPage() {
  return (
    <div>
      <Section>
        <TopMainvisual />
      </Section>
      <Section>
        <TopSchedule />
      </Section>
    </div>
  );
}
