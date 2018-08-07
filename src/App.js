import React, { Component } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import PageOrganisation from "./Organisation/PageOrganisation";
import OrganisationsContainer from "./Organisations/OrganisationsContainer";
import About from "./StaticPages/About";
import JoinFormContainer from "./Join/JoinFormContainer";
import FaqContainer from "./StaticPages/Faq/FaqContainer";
import JoinConfirmation from "./StaticPages/JoinConfirmation";
import ClientError from "./ErrorPages/ClientError";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={OrganisationsContainer} />
          <Route exact path="/about" component={About} />
          <Route exact path="/join" component={JoinFormContainer} />
          <Route exact path="/faq" component={FaqContainer} />
          <Route exact path="/join_confirmation" component={JoinConfirmation} />
          <Route
            exact
            path="/organisation/:name"
            component={PageOrganisation}
          />
          <Route path="*" component={ClientError} />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
