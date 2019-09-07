import React from 'react';
import Helmet from 'react-helmet';
import Header from 'components/organisms/header';
import Footer from 'components/organisms/footer';
import Menu from 'components/organisms/menu';

interface Props {
  title?: string;
  description?: string;
}

const Layout: React.FC<Props> = props => {
  const title = props.title ? `${props.title} - Three for Flavin` : 'Three for Flavin';

  return (
    <>
      <Helmet>
        <title>{title}</title>
        <meta name="description" content={props.description} />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={props.description} />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="https://www.threeforflavin.com/ogp.jpg" />
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:site" content="@ThreeforFlavin" />
        <meta name="twitter:creator" content="@ThreeforFlavin" />
      </Helmet>
      <Header />
      {props.children}
      <Footer />
      <Menu />
    </>
  );
};

Layout.defaultProps = {
  description: 'インスト・歌モノを奏でる、ポップスにジャズを取り入れたピアノスリーピースバンド。'
};

export default Layout;
