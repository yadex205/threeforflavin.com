import React from 'react';
import Layout from 'layout';
import H1 from 'components/atoms/h1';
import Article from 'components/organisms/article';
import Section from 'components/organisms/section';

export default function BiographyIndex() {
  return (
    <Layout>
      <Section>
        <H1>Biography</H1>
        <Article>
          <p>
            インスト・歌モノを奏でる、ポップスにジャズを取り入れたピアノスリーピースバンド。
            <br />
            キャッチーでありながらも独特のアレンジと歌詞で魅了する。
          </p>
          <h2>Members</h2>
          <h3>Key. Vo. れーみ</h3>
          <p>
            Website:&nbsp;
            <a href="https://www.remi-star.com" target="_blank" rel="noopener noreferrer">
              remi-star.com
            </a>
            <br />
            Twitter:&nbsp;
            <a href="https://twitter.com/remiriya27" target="_blank" rel="noopener noreferrer">
              @remiriya27
            </a>
          </p>
          <h3>Ba. スエツグヤスタカ</h3>
          <p>
            Twitter:&nbsp;
            <a href="https://twitter.com/moja_moja_kappa" target="_blank" rel="noopener noreferrer">
              @moja_moja_kappa
            </a>
          </p>
          <h3>Dr.</h3>
          <p>サポートを迎えてのライブとなっております。メンバー募集中。</p>
        </Article>
      </Section>
    </Layout>
  );
}
