import React, { Component } from "react";

import { fetchServices, fetchHows, fetchWheres } from "../../requests/airtable";
import SearchForm from "./SearchForm";

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
    }
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
    this.props.handleSearch(this.state.form);
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
          handleViewAll={this.props.handleViewAll}
        />
      </div>
    );
  }
}

export default SearchFormContainer;
