import React from "react";


import fetchingDataHOC from "./OrganisationsContainer";
import { fetchOrganisation} from "../requests/airtable";
import Header from "../StaticPages/Header";

const Organisation = ({ data, isLoading, error }) => {
    const organisation = data || [];
    if (error)
        <div>
            <Header />
            <p>{error.message}</p>
        </div>


    if (isLoading)
        <div>
            <Header />
            <p>Loading...</p>
        </div>

    return <div>
        <Header />
        {organisation.map(info => <div key={info["Name of Organisation"]}>
            <h1>{info["Name of Organisation"]}</h1>
            <img src={info.Logo[0].url} />
            <p>{info.About}</p>
            <a href={info.Website}>{info.Website}</a>
            <p>{info["Organisation email"]}</p>
            <p>{info["Organisation contact number"]}</p>
            <p>Rgistrated number: {info["Registered number"]}</p>
            <p>Type of Organisation: {info["Type of Organisation"]}</p>
            <p>Areas we work in: {info["Areas we work in"]}</p>
            <p>Age group we work with: {info["Age group we work with"]}</p>
            <p>
              Services we provide to young people:
              {info["Services Provided to young people"].map(service => (
                <ul key={service}>
                  <li>{service}</li>
                </ul>
              ))}
            </p>
            <p>
              How we work with young people:
              {info["How we work with young people"].map(how => (
                <ul key={how}>
                  <li>{how}</li>
                </ul>
              ))}
            </p>
          </div>)}
      </div>;
}


export default fetchingDataHOC(fetchOrganisation)(Organisation);
