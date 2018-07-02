import React from "react";

const Organisations = ({ organisations }) => (
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


export default Organisations