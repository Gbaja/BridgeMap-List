import React, { Component, Fragment } from "react";

import { fetchOrganisations, findOrganisations } from "../requests/airtable";
import Organisations from "./Organisations";
import SearchForm from "./SearchForm/SearchFormContainer";

class OrgsContainer extends Component {
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
    console.log("VIEW ALL");
    this.setState({ isLoading: true });
    fetchOrganisations().then(data =>
      this.setState({ data, isLoading: false })
    );
  };

  render() {
    if (!this.state.data) return <div>Loading</div>;
    return (
      <div>
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

export default OrgsContainer;
