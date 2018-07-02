import React from "react";
import fetchingDataHOC from "./OrganisationsContainer";
import fetchOrganisations from "../requests/airtable";

const Organisations = ({ data, isLoading, error }) =>{
    const organisations = data || [];
    if (error) {
        return <p>{error.message}</p>;
    }

    if (isLoading) {
        return <p>Loading ...</p>;
    }

    return (
      <div>
        {organisations.map(organisation => (
          <ul key={organisation["Name of Organisation"]}>
            <li>
              <p>{organisation["Name of Organisation"]}</p>
              <p>
                {organisation["Services Provided to young people"].map(service => (
                  <span key={service}>{service}</span>
                ))}
              </p>
              <p>{organisation["Type of Organisation"]}</p>
            </li>
          </ul>
        ))}
      </div>
    );   
}


export default fetchingDataHOC(fetchOrganisations)(Organisations);
