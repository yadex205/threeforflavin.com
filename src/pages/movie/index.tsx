import React from 'react';
import { Link } from 'gatsby';
import Layout from 'layout';
import H1 from 'components/atoms/h1';
import Section from 'components/organisms/section';

export default function MovieIndex() {
  return (
    <Layout>
      <Section>
        <H1>Movie</H1>
      </Section>
    </Layout>
  );
}
