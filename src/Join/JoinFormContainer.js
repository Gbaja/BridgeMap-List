import React, {Component, Fragment} from "react"

import Header from "../StaticPages/Header";
import {fetchServices, fetchHows, fetchWheres} from "../requests/airtable"
import JoinForm from "./JoinForm"
import "./Join.css";

const byNotEqualTo = value => service => service !== value

class JoinFormContainer extends Component {
  state = {
      services: [],
      how: [],
      where: [],
      loading: false,
      form: {
        orgName: "",
        orgType: "",
        logo: "",
        services: [],
        how: [],
        where: []
      }
  }

  componentDidMount(){
    this.setState({loading: true})
    return Promise.all([fetchServices(), fetchHows(), fetchWheres()])
              .then(([services, how, where])=>{
                this.setState({services, how, where, loading: false})
            })
  }
  
  handleInputChange = (event) => {
    const target = event.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;
    this.setState({
      form:{...this.state.form, [name]: value}
    });
  }

  handleSumbit = (event) =>{
    event.preventDefault();
    console.log(this.state.form)
  }

  handleFileUpload=(event)=>{
    this.setState({form: { ...this.state.form, logo: event.target.files[0] }})
  }


  handleServiceChange = ({target: {checked, value}}) => {
    const {form} = this.state
    const {services} = form
    if(checked){
      /// ...form is because the value we are changing is nested
      this.setState({form: {...form, services: [...services, value]}})
    } else{
      this.setState({form: {...form, services: services.filter(byNotEqualTo(value))}})
    }
      console.log(value, checked)
  }

  handleHowChange = ({target: {checked, value}}) => {
    const {form} = this.state;
    const {how} = form
    if(checked){
      this.setState({form: {...form, how: [...how, value]}})
    } else {
      this.setState({form: {...form, how: how.filter(byNotEqualTo(value))}})
    }
  }

  handleWhereChange = ({target: {checked, value}}) => {
    const { form } = this.state;
    const { where } = form
    if (checked) {
      this.setState({ form: { ...form, where: [...where, value] } })
    } else {
      this.setState({ form: { ...form, where: where.filter(byNotEqualTo(value)) } })
    }
  }
  render(){
    if(this.state.loading){
      return <div>loading form...</div>
    }
    return <div>
      <JoinForm form={this.state.form} handleInputChange={this.handleInputChange} handleServiceChange={this.handleServiceChange} handleHowChange={this.handleHowChange} handleWhereChange={this.handleWhereChange} handleSumbit={this.handleSumbit} handleFileUpload={this.handleFileUpload} services={this.state.services} where={this.state.where} how={this.state.how}/>
      </div>;
  }
}

export default JoinFormContainer
