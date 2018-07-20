import React, { Fragment } from "react";

import "./Join.css";
import Header from "../StaticPages/Header";

const JoinForm = props => (
  <div>
    <Header />
    <h2>Join BridgeMap List</h2>
    <form onSubmit={props.handleSumbit}>
      <fieldset>
        <legend>Basic info</legend>
        <label>Organisation name</label>
        <input
          name="orgName"
          type="text"
          value={props.form.orgName}
          onChange={props.handleInputChange}
        />
        <label>Organisation Type</label>
        <select
          name="orgType"
          value={props.form.orgType}
          onChange={props.handleInputChange}
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
        <label>Website</label>
        <input
          type="url"
          name="website"
          value={props.form.website}
          onChange={props.handleInputChange}
        />
        <label>Registered number</label>
        <input
          type="text"
          name="regNum"
          value={props.form.regNum}
          onChange={props.handleInputChange}
        />
        <label>Age group we work with</label>
        <input
          type="text"
          name="ageGroup"
          value={props.form.ageGroup}
          onChange={props.handleInputChange}
        />
        <label>Logo</label>
        <input name="logo" type="file" onChange={props.handleFileUpload} />
      </fieldset>
      <fieldset>
        <legend>About</legend>
        <label>About</label>
        <textarea
          value={props.form.about}
          onChange={props.handleInputChange}
          name="about"
        />
        <label>Services we offer to young people</label>
        {props.services.map(({ Name }) => {
          return (
            <Fragment key={Name}>
              <label>{Name}</label>
              <input
                type="checkbox"
                value={Name}
                checked={props.form.services.includes(Name)}
                onChange={props.handleServiceChange}
              />
            </Fragment>
          );
        })}
        <label>How we work with young people</label>
        {props.how.map(({ Name }) => {
          return (
            <Fragment key={Name}>
              <label>{Name}</label>
              <input
                type="checkbox"
                value={Name}
                checked={props.form.how.includes(Name)}
                onChange={props.handleHowChange}
              />
            </Fragment>
          );
        })}
        <label>Areas we work within</label>
        {props.where.map(({ Name }) => {
          return (
            <Fragment key={Name}>
              <label>{Name}</label>
              <input
                type="checkbox"
                value={Name}
                checked={props.form.where.includes(Name)}
                onChange={props.handleWhereChange}
              />
            </Fragment>
          );
        })}
      </fieldset>
      <fieldset>
        <legend>Contact</legend>
        <label>Organisation email</label>
        <input
          type="text"
          name="email"
          value={props.form.email}
          onChange={props.handleInputChange}
        />
        <label>Organisation contact number</label>
        <input
          type="text"
          name="number"
          value={props.form.number}
          onChange={props.handleInputChange}
        />
      </fieldset>
      <fieldset>
        <legend>Other</legend>
        <label>Form completed by</label>
        <input
          type="text"
          name="completedBy"
          value={props.form.completedBy}
          onChange={props.handleInputChange}
        />
        <label>Any other info</label>
        <textarea
          value={props.form.otherInfo}
          onChange={props.handleInputChange}
          name="otherInfo"
        />
      </fieldset>
      <button type="submit">Submit</button>
    </form>
  </div>
);

export default JoinForm;
