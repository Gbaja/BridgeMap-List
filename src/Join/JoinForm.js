import React, { Fragment } from "react";
import { Link } from "react-router-dom";

import "./Join.css";

const JoinForm = props => (
  <div>
    <div className="join">
      <h2>Join BridgeMap List</h2>
      <p>
        Any organisation that does any kind of work either directly or through
        their outreach/CSR can fill in the form to join BridgeMap list. Before
        filling out this form, we suggest you read through our{" "}
        <Link to="/faq">Frequently Asked Questions</Link>
      </p>
      <form onSubmit={props.handleSubmit} className="join__form">
        {Object.values(props.formErrors).length !== 0 ? (
          <ul>
            {Object.values(props.formErrors).map(error => {
              return (
                error && (
                  <Fragment key={error}>
                    <li className="error-color">{error && error}</li>
                  </Fragment>
                )
              );
            })}
          </ul>
        ) : (
          false
        )}
        <div className="join__form__fields-container">
          <label className="join__form__label">Organisation name</label>
          <input
            className="join__form__input"
            name="orgName"
            type="text"
            value={props.form.orgName}
            onChange={props.handleInputChange}
          />
        </div>
        <div className="join__form__fields-container">
          <label className="join__form__label">Organisation Type</label>
          <select
            name="orgType"
            value={props.form.orgType}
            onChange={props.handleInputChange}
            className="join__form__input"
          >
            <option value="" />
            <option value="Charity">Charity</option>
            <option value="Social enterprise/Not for Profit">
              Social enterprise/Not for Profit
            </option>
            <option value="Community Interest Company">
              Community Interest Company
            </option>
            <option value="Other i.e partnership, sole trader">
              Other i.e partnership, sole trader
            </option>
          </select>
        </div>
        <div className="join__form__fields-container">
          <label className="join__form__label">Website</label>
          <input
            type="url"
            name="website"
            value={props.form.website}
            onChange={props.handleInputChange}
            className="join__form__input"
          />
        </div>
        <div className="join__form__fields-container">
          <label className="join__form__label">Registered number</label>
          <input
            type="text"
            name="regNum"
            value={props.form.regNum}
            onChange={props.handleInputChange}
            className="join__form__input"
          />
        </div>
        <div className="join__form__fields-container">
          <label className="join__form__label">Age group we work with</label>
          <input
            type="text"
            name="ageGroup"
            value={props.form.ageGroup}
            onChange={props.handleInputChange}
            className="join__form__input"
          />
        </div>
        <div className="join-form__file-container">
          <label className="join-form__label-file">
            Upload organisation's logo
          </label>
          <input
            name="logo"
            type="file"
            onChange={props.handleFileUpload}
            className="join-form__input-file"
          />
        </div>
        <p className="logo-error error-color">
          {props.logoError && props.logoError}
        </p>
        <div className="join__form__fields-container">
          <label className="join__form__label">About</label>
          <textarea
            value={props.form.about}
            onChange={props.handleInputChange}
            name="about"
            className="join__form__textarea"
          />
        </div>
        <p className="join__form__checkbox-p">
          Services we offer to young people
        </p>
        <div className="join__form__checkbox-container">
          {props.services.map(service => {
            return (
              <div key={service.id} className="join__form__checkbox-div">
                <label className="join__form__checkbox-label">
                  {service.fields.Name}
                </label>
                <input
                  type="checkbox"
                  value={service.fields.Name}
                  checked={props.form.services.includes(service.fields.Name)}
                  onChange={props.handleServiceChange}
                  className="join__form__checkbox-input"
                />
              </div>
            );
          })}
        </div>
        <p className="join__form__checkbox-p">How we work with young people</p>
        <div className="join__form__checkbox-container" v>
          {props.how.map(how => {
            return (
              <div key={how.id} className="join__form__checkbox-div">
                <label className="join__form__checkbox-label">
                  {how.fields.Name}
                </label>
                <input
                  type="checkbox"
                  value={how.fields.Name}
                  checked={props.form.how.includes(how.fields.Name)}
                  onChange={props.handleHowChange}
                  className="join__form__checkbox-input"
                />
              </div>
            );
          })}
        </div>
        <p className="join__form__checkbox-p">Areas we work within</p>
        <div className="join__form__checkbox-container">
          {props.where.map(where => {
            return (
              <div key={where.id} className="join__form__checkbox-div">
                <label className="join__form__checkbox-label">
                  {where.fields.Name}
                </label>
                <input
                  type="checkbox"
                  value={where.fields.Name}
                  checked={props.form.where.includes(where.fields.Name)}
                  onChange={props.handleWhereChange}
                  className="join__form__checkbox-input"
                />
              </div>
            );
          })}
        </div>
        <div className="join__form__fields-container">
          <label className="join__form__label">Organisation email</label>
          <input
            type="text"
            name="email"
            value={props.form.email}
            onChange={props.handleInputChange}
            className="join__form__input"
          />
        </div>
        <div className="join__form__fields-container">
          <label className="join__form__label">
            Organisation contact number
          </label>
          <input
            type="text"
            name="number"
            value={props.form.number}
            onChange={props.handleInputChange}
            className="join__form__input"
          />
        </div>
        <div className="join__form__fields-container">
          <label className="join__form__label">Twitter Handle</label>
          <input
            type="text"
            name="twitterHandle"
            value={props.form.twitterHandle}
            onChange={props.handleInputChange}
            className="join__form__input"
          />
        </div>
        <div className="join__form__fields-container">
          <label className="join__form__label">Form completed by</label>
          <input
            type="text"
            name="completedBy"
            value={props.form.completedBy}
            onChange={props.handleInputChange}
            className="join__form__input"
          />
        </div>
        <div className="join__form__fields-container">
          <label className="join__form__label">
            Do you work for the organisation you want to add?
          </label>
          <select
            value={props.form.completedByRole}
            name="completedByRole"
            onChange={props.handleInputChange}
            className="join__form__input"
          >
            <option value="" />
            <option value="Yes">Yes</option>
            <option value="No">No</option>
          </select>
        </div>
        <div className="join__form__fields-container">
          <label className="join__form__label">Any other info</label>
          <textarea
            value={props.form.otherInfo}
            onChange={props.handleInputChange}
            name="otherInfo"
            className="join__form__textarea"
          />
        </div>
        <button type="submit" className="join__submit">
          Submit
        </button>
      </form>
    </div>
  </div>
);

export default JoinForm;
