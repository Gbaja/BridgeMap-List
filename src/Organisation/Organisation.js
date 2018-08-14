import React, { Fragment } from "react";

import fetchingDataHOC from "./FetchingDataHOC";
import { fetchOrganisation } from "../requests/airtable";
import Loading from "../Shared/Loading/Loading";
import "./Organisation.css";

const Organisation = props => {
  const organisation = props.data || [];
  if (props.isLoading) {
    return (
      <Fragment>
        <Loading />
      </Fragment>
    );
  }
  return (
    <div>
      {organisation.map(info => (
        <div key={info["Name of Organisation"]} className="org-info__container">
          <div className="org-info__top">
            <h2 className="org-info__name">{info["Name of Organisation"]}</h2>
            <img
              className="org-info__image"
              src={info.logo}
              alt="organisation logo"
            />
          </div>
          <p className="org-info__about">{info.About}</p>
          <div className="org-info__general">
            <p className="org-info__type">
              <span className="org-info__what">Type of organisation:</span>
              <span>{info["Type of Organisation"]}</span>
            </p>
            <p className="org-info__reg-number">
              <span className="org-info__what">Registered number:</span>
              <span>{info["Registered number"]}</span>
            </p>
            <p className="org-info__email">
              <span className="org-info__what">Email:</span>
              <span>{info["Organisation email"]}</span>
            </p>
            <p className="org-info__number">
              <span className="org-info__what">Contact number:</span>
              <span>{info["Organisation contact number"]}</span>
            </p>
            <p>
              <span className="org-info__what">Website:</span>
              <a href={info.Website} className="org-info__website">
                {info.Website}
              </a>
            </p>
            <p className="org-info__age">
              <span className="org-info__what"> Age group we work with:</span>
              <span>{info["Age group we work with"]}</span>
            </p>
          </div>
          <p className="org-info__what">Where we are based:</p>
          {info["Where we are based"].map(service => (
            <ul key={service}>
              <li>{service}</li>
            </ul>
          ))}
          <p className="org-info__areas">{info["Areas we work in"]}</p>
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
