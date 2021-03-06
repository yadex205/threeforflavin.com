import React, { useState, createRef } from 'react';
import { graphql } from 'gatsby';
import dayjs from 'dayjs';
import { animateScroll } from 'react-scroll';
import Layout from 'layout';
import { Live } from 'lib/models';
import H1 from 'components/atoms/h1';
import Breadcrumb, { BreadcrumbItem } from 'components/molecules/breadcrumbs';
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
  const livelistRef = createRef<HTMLUListElement>();
  const [page, setPage] = useState(1);
  const currentDate = new Date();
  const startIndex = allContentfulLive.edges.findIndex(({ node }) => dayjs(node.date).isBefore(currentDate));
  const length = Math.trunc((allContentfulLive.edges.length - startIndex + 1) / MAX_AMOUNT) + 1;
  const sliceBegin = startIndex + MAX_AMOUNT * (page - 1);

  function onRequest(index: number) {
    setPage(index);
    if (livelistRef.current) {
      animateScroll.scrollTo(livelistRef.current.getBoundingClientRect().top + window.pageYOffset - 120, {
        duration: 500,
      });
    }
  }

  return (
    <Layout title="History - Live">
      <Section>
        <Breadcrumb>
          <BreadcrumbItem href="/">TOP</BreadcrumbItem>
          <BreadcrumbItem href="/live">LIVE</BreadcrumbItem>
          <BreadcrumbItem>HISTORY</BreadcrumbItem>
        </Breadcrumb>
        <H1>Live history</H1>
        <Livelist ref={livelistRef}>
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
        <Pagination currentIndex={page} length={length} onRequest={onRequest} />
      </Section>
    </Layout>
  );
}
