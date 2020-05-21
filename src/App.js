import React from 'react';
import { Switch, Route } from "react-router-dom";

import PageDetail from './components/Product/PageDetail';
import NotFound from './components/NotFound'
import HomePage from './containers/HomePage';




function App() {
  return (
    <>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/product" component={PageDetail} />
        <Route component={NotFound} />
      </Switch>
    </>

  );
}

export default App;
