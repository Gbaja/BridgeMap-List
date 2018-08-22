import React from "react";
import { Link } from "react-router-dom";

import ScrollTopButton from "./ScrollTopButton";
import Loading from "../Shared/Loading/Loading";
import "./Organisations.css";

const Organisations = ({ data, isLoading }) => {
  const organisations = data || [];
  return (
    <div className="organisations">
      {isLoading ? (
        <Loading />
      ) : data.length === 0 ? (
        <p>
          We currently do not have any organisation that matches your search.
          Please refine your search.
        </p>
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
                {organisation["Services Provided to young people"].join(", ")}
              </p>
              <p className="organisations__type">
                {organisation["Type of Organisation"]}
              </p>
              <Link
                className="organisations__link"
                to={`/organisation/${organisation["Name of Organisation"]
                  .replace(/\s/g, "-")
                  .toLowerCase()}/${organisation.id}`}
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
