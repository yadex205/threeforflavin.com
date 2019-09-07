import React, { useState } from 'react';
import { graphql } from 'gatsby';
import dayjs from 'dayjs';
import Layout from 'layout';
import { Live } from 'lib/models';
import H1 from 'components/atoms/h1';
import Section from 'components/organisms/section';
import Livelist, { LiveLivelistItem as LivelistItem } from 'components/molecules/live-livelist';
import Pagination from 'components/molecules/pagination';

const MAX_AMOUNT = 10;

export const pageQuery = graphql`
  {
    allContentfulLive(filter: { form: { eq: "threeforflavin" } }, sort: { fields: date, order: DESC }) {
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

export default function LiveHistoryIndex({ data: { allContentfulLive } }: Props) {
  const [page, setPage] = useState(1);
  const currentDate = new Date();
  const startIndex = allContentfulLive.edges.findIndex(({ node }) => dayjs(node.date).isBefore(currentDate));
  const length = Math.trunc((allContentfulLive.edges.length - startIndex + 1) / MAX_AMOUNT) + 1;
  const sliceBegin = startIndex + MAX_AMOUNT * (page - 1);

  return (
    <Layout>
      <Section>
        <H1>Live history</H1>
        <Livelist>
          {allContentfulLive.edges.slice(sliceBegin, sliceBegin + MAX_AMOUNT).map(({ node }) => (
            <LivelistItem
              key={node.slug}
              date={node.date}
              title={node.title}
              venue={node.venue}
              href={`/live/${node.slug}`}
            />
          ))}
        </Livelist>
        <Pagination currentIndex={page} length={length} onRequest={index => setPage(index)} />
      </Section>
    </Layout>
  );
}
