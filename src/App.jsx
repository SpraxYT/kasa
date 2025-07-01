import React from 'react';
import './styles/main.scss';
import Layout from './components/Layout';
import Router from './router/Router';

function App() {
  return (
    <Layout>
      <Router />
    </Layout>
  );
}

export default App;
