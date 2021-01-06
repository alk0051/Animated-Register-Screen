import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import PersonalSpace from './pages/PersonalSpace';
import Landing from './pages/Landing';


export default function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Landing} />
        <Route path="/personalspace" component={PersonalSpace} />
      </Switch>
    </BrowserRouter>
  )
}
