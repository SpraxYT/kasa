import React from 'react';
import Header from './Header';
import Footer from './Footer';
import Banner from './Banner';

function Layout({ children }) {
  return (
    <div className="page-container">
      <Header />
      <div className="layout">
        <main className="main-content">
          {children}
        </main>
      </div>
      <Footer />
    </div>
  );
}

export default Layout;
