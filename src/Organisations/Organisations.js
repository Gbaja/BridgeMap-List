import React from "react";
import { Link } from "react-router-dom";

// import fetchingDataHOC from "./OrganisationsContainer";
// import { fetchOrganisations } from "../requests/airtable";
import Header from "../Shared/Header/Header";
// import SearchForm from "./SearchForm/SearchFormContainer";
import ScrollTopButton from "./ScrollTopButton";
import Loading from "../Shared/Loading/Loading";

const Organisations = ({ data, isLoading }) => {
  const organisations = data || [];
  return (
    <div className="organisations">
      <Header />
      {/* <SearchForm /> */}
      {isLoading ? (
        <div>
          <Loading />
        </div>
      ) : (
        <ul className="organisations__container">
          {organisations.map(organisation => (
            <li
              className="organisations__list"
              key={organisation["Name of Organisation"]}
            >
              <div className="organisations__img-container">
                <img
                  className="organisations__img"
                  alt="organisation logo"
                  src={organisation.logo}
                />
              </div>
              <h3 className="organisations__name">
                {organisation["Name of Organisation"]}
              </h3>
              <p className="organisations__services">
                {organisation["Services Provided to young people"].map(
                  service => <span key={service}>{service}</span>
                )}
              </p>
              <p className="organisations__type">
                {organisation["Type of Organisation"]}
              </p>
              <Link
                className="organisations__link"
                to={`/organisation/${organisation["Name of Organisation"]}`}
              >
                View more info
              </Link>
            </li>
          ))}
        </ul>
      )}
      <ScrollTopButton />
    </div>
  );
};

//export default fetchingDataHOC(fetchOrganisations)(Organisations);
export default Organisations;
