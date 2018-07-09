import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from "react-router-dom";

import PageOrganisation from "./Organisations/PageOrganisation"
import Organisations from "./Organisations/Organisations"
import About from "./StaticPages/About"
import Join from "./StaticPages/Join"
import Organisation from './Organisations/Organisation';
import { parse } from 'path';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Organisations} />
          <Route exact path="/about" component={About} />
          <Route exact path="/join" component={Join}/>
          <Route exact path="/organisation/:name" component={PageOrganisation}/>
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
