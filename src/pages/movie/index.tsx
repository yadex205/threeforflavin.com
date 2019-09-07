import React from 'react';
import Layout from 'layout';
import H1 from 'components/atoms/h1';
import H2 from 'components/atoms/h2';
import Youtube from 'components/molecules/youtube';
import Section from 'components/organisms/section';

export default function MovieIndex() {
  return (
    <Layout>
      <Section>
        <H1>Movie</H1>
      </Section>
      <Section>
        <H2>2nd E.P. -Reply- Trailer</H2>
        <Youtube videoId="N00p2BW0SZI" />
      </Section>
      <Section>
        <H2>1st E.P. -Sprout- Trailer</H2>
        <Youtube videoId="nstElQeVmbw" />
      </Section>
    </Layout>
  );
}
