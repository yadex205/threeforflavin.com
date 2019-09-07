import React from 'react';
import { graphql } from 'gatsby';
import { Live } from 'lib/models';
import Layout from 'layout';
import H1 from 'components/atoms/h1';
import Breadcrumb, { BreadcrumbItem } from 'components/molecules/breadcrumbs';
import Section from 'components/organisms/section';
import Article from 'components/organisms/article';

export const pageQuery = graphql`
  query($id: String!) {
    live: contentfulLive(id: { eq: $id }) {
      title
      date
      venue
      article { childMarkdownRemark { html } }
    }
  }
`;

interface Props {
  data: {
    live: Pick<Live, 'title' | 'date' | 'venue' | 'article'>;
  }
}

export default function LiveEntry({ data: { live } }: Props) {
  return (
    <Layout>
      <Section>
        <Breadcrumb>
          <BreadcrumbItem href="/">TOP</BreadcrumbItem>
          <BreadcrumbItem href="/live">LIVE</BreadcrumbItem>
          <BreadcrumbItem>{live.title}</BreadcrumbItem>
        </Breadcrumb>
        <H1 nobar>{live.title}</H1>
        <Article html={live.article && live.article.childMarkdownRemark.html} />
      </Section>
    </Layout>
  );
}
