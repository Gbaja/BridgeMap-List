import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from "react-router-dom";

import OrganisationsContainer from "./Organisations/Organisations"

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={OrganisationsContainer}/>
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
