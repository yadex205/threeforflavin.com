import React from 'react';
import { graphql } from 'gatsby';
import { Live } from 'lib/models';
import Layout from 'layout';
import Section from 'components/organisms/section';
import TopMainvisual from 'components/organisms/top-mainvisual';
import TopSchedule from 'components/organisms/top-schedule';
import TopSocial from 'components/organisms/top-social';

export const pageQuery = graphql`
  query($builtat: Date!) {
    allContentfulLive(
      filter: { form: { eq: "threeforflavin" }, date: { gt: $builtat } }
      sort: { fields: date, order: ASC }
    ) {
      edges {
        node {
          slug
          title
          date
          venue
        }
      }
    }
  }
`;

interface Props {
  data: {
    allContentfulLive: {
      edges: {
        node: Pick<Live, 'slug' | 'title' | 'date' | 'venue'>;
      }[];
    };
  };
}

export default function TopPage({ data: { allContentfulLive } }: Props) {
  const acts = allContentfulLive.edges.map(({ node }) => ({
    date: node.date,
    title: node.title,
    venue: node.venue,
    href: `/live/${node.slug}`,
  }));

  return (
    <Layout>
      <Section>
        <TopMainvisual />
      </Section>
      <Section>
        <TopSchedule acts={acts} />
      </Section>
      <Section>
        <TopSocial />
      </Section>
    </Layout>
  );
}
