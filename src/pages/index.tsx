import React from 'react';
import Section from 'components/organisms/section';
import Footer from 'components/organisms/footer';
import TopMainvisual from 'components/organisms/top-mainvisual';
import TopSchedule from 'components/organisms/top-schedule';
import TopSocial from 'components/organisms/top-social';

export default function TopPage() {
  return (
    <>
      <div>
        <Section>
          <TopMainvisual />
        </Section>
        <Section>
          <TopSchedule />
        </Section>
        <Section>
          <TopSocial />
        </Section>
      </div>
      <Footer />
    </>
  );
}
