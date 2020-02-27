import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Index from './pages/Index';
import Cart from './pages/Cart';

export default function Routes() {
  return (
    <Switch>
      <Route path="/" exact component={Index} />
      <Route path="/cart" component={Cart} />
    </Switch>
  );
}
