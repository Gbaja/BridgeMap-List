import React from "react";

import fetchingDataHOC from "./OrganisationsContainer";
import { fetchOrganisation } from "../requests/airtable";
import Header from "../StaticPages/Header";
import "./Organisation.css";

const Organisation = props => {
  const organisation = props.data || [];
  return (
    <div>
      <Header />
      {organisation.map(info => (
        <div key={info["Name of Organisation"]} className="org-info__container">
          <h1 className="org-info__name">{info["Name of Organisation"]}</h1>
          <p className="org-info__what">About</p>
          <p className="org-info__about">{info.About}</p>
          <p className="org-info__what">Website</p>
          <a href={info.Website} className="org-info__website">
            {info.Website}
          </a>
          <p className="org-info__what">Organisation Email </p>
          <p className="org-info__email">{info["Organisation email"]}</p>
          <p className="org-info__what">Organisation Contact Number</p>
          <p className="org-info__number">
            {info["Organisation contact number"]}
          </p>
          <p className="org-info__what">Rgistrated number: </p>
          <p className="org-info__reg-number">{info["Registered number"]}</p>
          <p className="org-info__what">Type of Organisation: </p>
          <p className="org-info__type">{info["Type of Organisation"]}</p>
          <p className="org-info__what">Where we are based:</p>
          {info["Where we are based"].map(service => (
            <ul key={service}>
              <li>{service}</li>
            </ul>
          ))}
          <p className="org-info__areas">{info["Areas we work in"]}</p>
          <p className="org-info__what">Age group we work with: </p>
          <p className="org-info__age">{info["Age group we work with"]}</p>
          <p className="org-info__what">Services we provide to young people:</p>
          {info["Services Provided to young people"].map(service => (
            <ul key={service}>
              <li>{service}</li>
            </ul>
          ))}
          <p className="org-info__what"> How we work with young people:</p>
          {info["How we work with young people"].map(how => (
            <ul key={how}>
              <li>{how}</li>
            </ul>
          ))}
        </div>
      ))}
    </div>
  );
};

export default fetchingDataHOC(fetchOrganisation)(Organisation);
