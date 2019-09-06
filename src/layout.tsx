import React from 'react';
import Header from 'components/organisms/header';
import Footer from 'components/organisms/footer';
import Menu from 'components/organisms/menu';


const Layout: React.FC = props => {
  return (
    <>
      <Header />
      {props.children}
      <Footer />
      <Menu />
    </>
  );
}

export default Layout;
