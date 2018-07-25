import React from "react";
import { Link } from "react-router-dom";

import fetchingDataHOC from "./OrganisationsContainer";
import { fetchOrganisations } from "../requests/airtable";
import Header from "../StaticPages/Header/Header";
import SearchForm from "./SearchForm";
import ScrollTopButton from "./ScrollTopButton";

const Organisations = ({ data, isLoading, error }) => {
  const organisations = data || [];
  return (
    <div>
      <Header />
      <SearchForm />
      {isLoading ? (
        <div>
          {" "}
          <div className="loading-spinner" />
          <p className="loading-text">Loading organisations...</p>
        </div>
      ) : (
        organisations.map(organisation => (
          <ul key={organisation["Name of Organisation"]}>
            <li>
              <p>{organisation["Name of Organisation"]}</p>
              <p>
                {organisation["Services Provided to young people"].map(
                  service => <span key={service}>{service}</span>
                )}
              </p>
              <p>{organisation["Type of Organisation"]}</p>
              <Link
                to={`/organisation/${organisation["Name of Organisation"]}`}
              >
                View more info
              </Link>
            </li>
          </ul>
        ))
      )}
      <ScrollTopButton />
    </div>
  );
};

export default fetchingDataHOC(fetchOrganisations)(Organisations);
