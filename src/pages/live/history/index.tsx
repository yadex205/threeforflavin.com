import React from 'react';
import Layout from 'layout';
import H1 from 'components/atoms/h1';
import Section from 'components/organisms/section';
import Livelist, { LiveLivelistItem as LivelistItem } from 'components/molecules/live-livelist';
import Pagination from 'components/molecules/pagination';

export default function LiveHistoryIndex() {
  return (
    <Layout>
      <Section>
        <H1>Live history</H1>
        <Livelist>
          <LivelistItem
            date="2019-12-31"
            title="Three for Flavin 3rd One-man live!"
            venue="代々木 labo"
            href="#"
          />
          <LivelistItem
            date="2019-12-31"
            title="Three for Flavin 3rd One-man live! めっちゃながい めっちゃながい めっちゃながい"
            venue="代々木 laboうわあああああああああああ"
            href="#"
          />
        </Livelist>
        <Pagination
          currentIndex={1}
          length={2}
          onRequest={index => { console.log(index) }}
        />
      </Section>
    </Layout>
  );
}
