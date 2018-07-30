import React, { Component, Fragment } from "react";
import axios from "axios";

import { fetchServices, fetchHows, fetchWheres } from "../../requests/airtable";
import SearchForm from "./SearchForm";
import { findOrganisations } from "../../requests/airtable";

class SearchFormContainer extends Component {
  state = {
    services: [],
    how: [],
    where: [],
    loading: true,
    form: {
      how: "",
      where: "",
      service: ""
    },
    searchResult: []
  };
  componentDidMount() {
    this.setState({ loading: true });
    return Promise.all([fetchServices(), fetchHows(), fetchWheres()]).then(
      ([services, how, where]) => {
        this.setState({
          services: [
            { id: "", fields: { Name: "Choose service" } },
            ...services
          ],
          how: [{ id: "", fields: { Name: "Choose how" } }, ...how],
          where: [{ id: "", fields: { Name: "Choose location" } }, ...where],
          loading: false
        });
      }
    );
  }

  handleInputChange = event => {
    const target = event.target;
    const value = target.value;
    const name = target.name;
    this.setState({
      form: { ...this.state.form, [name]: value }
    });
  };

  handleSubmit = event => {
    event.preventDefault();
    console.log(this.state.form);
    return findOrganisations(this.state.form).then(response => {
      this.setState({ searchResult: response.data });
      console.log("SEARCH RESULT: ", this.state.searchResult);
    });
  };

  render() {
    return (
      <div>
        <SearchForm
          services={this.state.services}
          how={this.state.how}
          where={this.state.where}
          handleInputChange={this.handleInputChange}
          handleSubmit={this.handleSubmit}
          form={this.state.form}
        />
      </div>
    );
  }
}

export default SearchFormContainer;
