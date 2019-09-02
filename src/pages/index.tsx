import React from 'react';
import Section from 'components/organisms/section';
import Header from 'components/organisms/header';
import Footer from 'components/organisms/footer';
import TopMainvisual from 'components/organisms/top-mainvisual';
import TopSchedule from 'components/organisms/top-schedule';
import TopSocial from 'components/organisms/top-social';

export default function TopPage() {
  return (
    <>
      <Header />
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
