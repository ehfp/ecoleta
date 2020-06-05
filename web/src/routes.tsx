import React from 'react';
import { Route, BrowserRouter } from 'react-router-dom';

import Home from './pages/Home';
import CreatePoint from './pages/CreatePoint';

// import { Container } from './styles';

const src: React.FC = () => {
  return (
    <BrowserRouter>
      <Route component={Home} path="/" exact />
      <Route component={CreatePoint} path="/create-point" />
    </BrowserRouter>
  );
}

export default src;