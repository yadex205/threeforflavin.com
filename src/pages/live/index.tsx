import React from 'react';
import { Link, graphql } from 'gatsby';
import Layout from 'layout';
import { Live } from 'lib/models';
import H1 from 'components/atoms/h1';
import Breadcrumb, { BreadcrumbItem } from 'components/molecules/breadcrumbs';
import Section from 'components/organisms/section';
import Livelist, { LiveLivelistItem as LivelistItem } from 'components/molecules/live-livelist';

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

export default function LiveIndex(props: Props) {
  return (
    <Layout title="Live">
      <Section>
        <Breadcrumb>
          <BreadcrumbItem href="/">TOP</BreadcrumbItem>
          <BreadcrumbItem>LIVE</BreadcrumbItem>
        </Breadcrumb>
        <H1>Live schedule</H1>
        <Livelist>
          {props.data.allContentfulLive.edges.map(({ node }) => (
            <LivelistItem
              key={node.slug}
              date={node.date}
              title={node.title}
              venue={node.venue}
              href={`/live/${node.slug}`}
            />
          ))}
        </Livelist>
      </Section>
      <Section>
        <Link to="/live/history">過去のライブ一覧はこちら</Link>
      </Section>
    </Layout>
  );
}
