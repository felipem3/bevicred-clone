import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import Landing from './pages/Landing';
function routes() {
  return (
    <BrowserRouter>
      <Route path="/" exact component={Landing}></Route>
    </BrowserRouter>
  );
}

export default routes;
