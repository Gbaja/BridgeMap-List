import React, { Component, Fragment } from "react";
import axios from "axios";

import { fetchServices, fetchHows, fetchWheres } from "../requests/airtable";
import JoinForm from "./JoinForm";
import { addOrganisation } from "../requests/airtable";
import "./Join.css";
import Loading from "../Shared/Loading/Loading";

const byNotEqualTo = value => service => service !== value;

class JoinFormContainer extends Component {
  state = {
    services: [],
    how: [],
    where: [],
    loading: false,
    isError: false,
    formErrors: [],
    form: {
      orgName: "",
      orgType: "",
      website: "",
      regNum: "",
      ageGroup: "",
      logo: "",
      twitterHandle: "",
      about: "",
      services: [],
      how: [],
      where: [],
      email: "",
      number: "",
      completedBy: "",
      completedByRole: "",
      otherInfo: ""
    }
  };

  componentDidMount() {
    this.setState({ loading: true });
    return Promise.all([fetchServices(), fetchHows(), fetchWheres()]).then(
      ([services, how, where]) => {
        this.setState({ services, how, where, loading: false });
      }
    );
  }

  checkError = () => {
    if (!this.state.form.name) {
      this.setState({
        isError: true,
        formErrors: [...this.state.formErrors, "Name must be entered."]
      });
    } else {
      this.setState({
        isError: false,
        formErrors: []
      });
    }
  };

  handleInputChange = event => {
    const target = event.target;
    const value = target.value;
    const name = target.name;
    this.setState({
      form: { ...this.state.form, [name]: value }
    });
  };

  handleSumbit = event => {
    event.preventDefault();
    this.checkError();

    if (!this.state.isError) {
      console.log(this.state.form);
      return addOrganisation(this.state.form).then(() => {
        this.props.history.push(`/join_confirmation`);
      });
      // this.setState({
      //   isError: false,
      //   formErrors: []
      // });
    }
  };

  handleFileUpload = event => {
    const data = new FormData();
    data.append("file", event.target.files[0]);
    data.append("name", "some value user types");
    data.append("description", "some value user types");
    axios.post("/files", data).then(response => {
      this.setState({
        form: { ...this.state.form, logo: response.data.imageUrl }
      });
      console.log(this.state.form.logo);
    });
  };

  handleServiceChange = ({ target: { checked, value } }) => {
    const { form } = this.state;
    const { services } = form;
    if (checked) {
      /// ...form is because the value we are changing is nested
      this.setState({ form: { ...form, services: [...services, value] } });
    } else {
      this.setState({
        form: { ...form, services: services.filter(byNotEqualTo(value)) }
      });
    }
    console.log(value, checked);
  };

  handleHowChange = ({ target: { checked, value } }) => {
    const { form } = this.state;
    const { how } = form;
    if (checked) {
      this.setState({ form: { ...form, how: [...how, value] } });
    } else {
      this.setState({
        form: { ...form, how: how.filter(byNotEqualTo(value)) }
      });
    }
  };

  handleWhereChange = ({ target: { checked, value } }) => {
    const { form } = this.state;
    const { where } = form;
    if (checked) {
      this.setState({ form: { ...form, where: [...where, value] } });
    } else {
      this.setState({
        form: { ...form, where: where.filter(byNotEqualTo(value)) }
      });
    }
  };
  render() {
    if (this.state.loading) {
      return (
        <div>
          <Loading />
        </div>
      );
    }
    return (
      <div>
        <JoinForm
          form={this.state.form}
          handleInputChange={this.handleInputChange}
          handleServiceChange={this.handleServiceChange}
          handleHowChange={this.handleHowChange}
          handleWhereChange={this.handleWhereChange}
          handleSumbit={this.handleSumbit}
          handleFileUpload={this.handleFileUpload}
          services={this.state.services}
          where={this.state.where}
          how={this.state.how}
          errors={this.state.formErrors}
        />
      </div>
    );
  }
}

export default JoinFormContainer;
