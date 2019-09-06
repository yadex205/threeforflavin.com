import React from 'react';
import { Link } from 'gatsby';
import Layout from 'layout';
import H1 from 'components/atoms/h1';
import Section from 'components/organisms/section';
import Livelist, { LiveLivelistItem as LivelistItem } from 'components/molecules/live-livelist';

export default function LiveIndex() {
  return (
    <Layout>
      <Section>
        <H1>Live schedule</H1>
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
      </Section>
      <Section>
        <Link to="/live/history">過去のライブ一覧はこちら</Link>
      </Section>
    </Layout>
  );
}
