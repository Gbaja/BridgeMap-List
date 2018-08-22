import React, { Component } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import PageOrganisation from "./Organisation/PageOrganisation";
import OrganisationsContainer from "./Organisations/OrganisationsContainer";
import About from "./StaticPages/About";
import JoinFormContainer from "./Join/JoinFormContainer";
import FaqContainer from "./StaticPages/Faq/FaqContainer";
import JoinConfirmation from "./StaticPages/JoinConfirmation";
import ClientError from "./ErrorPages/ClientError";
import ServerError from "./ErrorPages/ServerError";
import Header from "./Shared/Header/Header";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <Header />
          <Switch>
            <Route exact path="/" component={OrganisationsContainer} />
            <Route exact path="/about" component={About} />
            <Route exact path="/join" component={JoinFormContainer} />
            <Route exact path="/faq" component={FaqContainer} />
            <Route
              exact
              path="/join_confirmation"
              component={JoinConfirmation}
            />
            <Route
              exact
              path="/organisation/:name/:id"
              component={PageOrganisation}
            />
            <Route path="/server_error" component={ServerError} />
            <Route path="*" component={ClientError} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
