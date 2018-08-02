import React, { Component, Fragment } from "react";

import { fetchOrganisations, findOrganisations } from "../requests/airtable";
import Organisations from "./Organisations";
import Header from "../Shared/Header/Header";
import SearchForm from "./SearchForm/SearchFormContainer";
import Loading from "../Shared/Loading/Loading";

class OrganisationsContainer extends Component {
  state = {
    data: [],
    isLoading: false,
    error: null
  };

  componentDidMount() {
    this.setState({ isLoading: true });
    fetchOrganisations()
      .then(data => this.setState({ data, isLoading: false }))
      .catch(error => this.setState({ error, isLoading: false }));
  }

  handleSearch = details => {
    this.setState({ isLoading: true });
    findOrganisations(details).then(response => {
      this.setState({ data: response.data, isLoading: false });
    });
  };

  handleViewAll = () => {
    this.setState({ isLoading: true });
    fetchOrganisations().then(data =>
      this.setState({ data, isLoading: false })
    );
  };

  render() {
    return (
      <div>
        <Header />
        <SearchForm
          handleSearch={this.handleSearch}
          handleViewAll={this.handleViewAll}
        />
        <Organisations
          data={this.state.data}
          isLoading={this.state.isLoading}
          error={this.state.error}
        />
      </div>
    );
  }
}

export default OrganisationsContainer;
