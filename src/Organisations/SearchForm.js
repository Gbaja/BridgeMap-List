import React, {Component} from "react";

import "./SearchForm.css";

class SearchForm extends Component{
  state = {
    how: "",
    service: ""
  } 

  handleChange = (event) =>{ 
    const target = event.target;
    const value = target.value;
    const name = target.name;

    this.setState({
      [name]: value
    });
  }

  handleSubmit = (event) =>{
    event.preventDefault()
    console.log(this.state)
  }

    render(){
        return <div className="search-form">
            <h1 className="search-form__heading">BridgeMap List</h1>
            <p>
              Find organisations that work with young people quicker
            </p>
            <form onSubmit={this.handleSubmit}>
            <select name="location" onChange={this.handleChange} value={this.state.how} className="search-form__select">
              <option value="Tower Hamlet">
                Tower Hamlet
                </option>
              <option value="Southwark">Southwark</option>
              <option value="Newham">
                Newham
                </option>
              <option value="Young people can come to us directly">
                Young people can come to us directly
                </option>
            </select>
              <select name="how" onChange={this.handleChange} value={this.state.how} className="search-form__select">
                <option value="">
                  How they work with young people
                </option>
                <option value="Referrals">Referrals</option>
                <option value="Through Partnership with schools">
                  Through Partnership with schools
                </option>
                <option value="Young people can come to us directly">
                  Young people can come to us directly
                </option>
              </select>
              <select name="service" onChange={this.handleChange} value={this.state.service} className="search-form__select">
                <option value="">Services they offer</option>
                <option value="Mentoring">Mentoring</option>
                <option value="Housing">Housing</option>
                <option value="Short courses, events and activities">
                  Short courses, events and activities
                </option>
                <option value="Employability advice and support">
                  Employability advice and support
                </option>
                <option value="Paid Apprenticeship/Internship">
                  Paid Apprenticeship/Internship
                </option>
                <option value="Volunteering">Volunteering</option>
                <option value="Mental health support">
                  Mental health support
                </option>
              </select>
              <button type="submit" className="search-form__submit">Search</button>
            </form>
          </div>;
    }
}

export default SearchForm;