import React from "react";
import { Link } from "react-router-dom";

import fetchingDataHOC from "./OrganisationsContainer";
import { fetchOrganisations } from "../requests/airtable";
import Header from "../Shared/Header/Header";
import SearchForm from "./SearchForm/SearchFormContainer";
import ScrollTopButton from "./ScrollTopButton";
import Loading from "../Shared/Loading/Loading";

const Organisations = ({ data, isLoading, error }) => {
  const organisations = data || [];
  return (
    <div>
      <Header />
      <SearchForm />
      {isLoading ? (
        <div>
          <Loading />
        </div>
      ) : (
        organisations.map(organisation => (
          <ul key={organisation["Name of Organisation"]}>
            <li>
              <img
                src={organisation.logo}
                style={{ width: "100px", height: "100px", display: "block" }}
              />
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
