import React, { Fragment } from "react";

import "./SearchForm.css";

const SearchForm = props => {
  return (
    <div className="search-form">
      <h1 className="search-form__heading">BridgeMap List</h1>
      <p>Find organisations that work with young people quicker</p>
      <form onSubmit={props.handleSubmit}>
        <select
          name="where"
          onChange={props.handleInputChange}
          value={props.form.where}
          className="search-form__select"
        >
          {props.where.map(eachWhere => {
            return (
              <Fragment key={eachWhere.id}>
                <option value={eachWhere.id}>{eachWhere.fields.Name}</option>
              </Fragment>
            );
          })}
        </select>
        <select
          name="how"
          onChange={props.handleInputChange}
          value={props.form.how}
          className="search-form__select"
        >
          {props.how.map(eachHow => {
            return (
              <Fragment key={eachHow.id}>
                <option value={eachHow.id}>{eachHow.fields.Name}</option>
              </Fragment>
            );
          })}
        </select>
        <select
          name="service"
          onChange={props.handleInputChange}
          value={props.form.service}
          className="search-form__select"
        >
          {props.services.map(service => {
            return (
              <Fragment key={service.id}>
                <option value={service.id}>{service.fields.Name}</option>
              </Fragment>
            );
          })}
        </select>
        <div className="search-form__button-container">
          <button className="search-form__button">View all</button>
          <button type="submit" className="search-form__button">
            Filter
          </button>
        </div>
      </form>
    </div>
  );
};

export default SearchForm;
