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
          onChange={props.handleChange}
          value={props.form.where}
          className="search-form__select"
        >
          {props.where.map(eachWhere => {
            return (
              <Fragment key={eachWhere.Name}>
                <option value={eachWhere.Name}>{eachWhere.Name}</option>
              </Fragment>
            );
          })}
        </select>
        <select
          name="how"
          onChange={props.handleChange}
          value={props.form.how}
          className="search-form__select"
        >
          {props.how.map(eachHow => {
            return (
              <Fragment key={eachHow.Name}>
                <option value={eachHow.Name}>{eachHow.Name}</option>
              </Fragment>
            );
          })}
        </select>
        <select
          name="service"
          onChange={props.handleChange}
          value={props.form.service}
          className="search-form__select"
        >
          {props.services.map(service => {
            return (
              <Fragment key={service.Name}>
                <option value={service.Name}>{service.Name}</option>
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
