import React from 'react';
import Layout from 'layout';
import H1 from 'components/atoms/h1';
import Breadcrumb, { BreadcrumbItem } from 'components/molecules/breadcrumbs';
import Discography from 'components/molecules/discography';
import Section from 'components/organisms/section';
// import artworkFlavinRightNow from 'images/artworks/flavin-right-now.png';
import artworkSprout from 'images/artworks/sprout.jpg';
import artworkReply from 'images/artworks/reply.jpg';
import artworkBallad from 'images/artworks/ballad.png';

export default function DiscographyIndex() {
  return (
    <Layout>
      <Section>
        <Breadcrumb>
          <BreadcrumbItem href="/">TOP</BreadcrumbItem>
          <BreadcrumbItem>DISCOGRAPHY</BreadcrumbItem>
        </Breadcrumb>
        <H1>Discography</H1>
      </Section>
      <Section>
        <Discography title="Ballad Single" imgsrc={artworkBallad}>
          2018.11.23発売
        </Discography>
      </Section>
      <Section>
        <Discography title="2nd E.P. -Reply-" imgsrc={artworkReply}>
          2018.4.7発売
        </Discography>
      </Section>
      <Section>
        <Discography title="1st E.P. -Sprout-" imgsrc={artworkSprout}>
          2017.11.26発売
        </Discography>
      </Section>
      {/*
          <Section>
          <Discography title="Flavin / Right now" imgsrc={artworkFlavinRightNow}>
          1st demo CD
          <br />
          2曲入り &yen;500
          </Discography>
          </Section>
        */}
    </Layout>
  );
}
