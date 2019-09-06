import React from 'react';
import Layout from 'layout';
import Section from 'components/organisms/section';
import TopMainvisual from 'components/organisms/top-mainvisual';
import TopSchedule from 'components/organisms/top-schedule';
import TopSocial from 'components/organisms/top-social';

export default function TopPage() {
  return (
    <Layout>
      <Section>
        <TopMainvisual />
      </Section>
      <Section>
        <TopSchedule />
      </Section>
      <Section>
        <TopSocial />
      </Section>
    </Layout>
  );
}
