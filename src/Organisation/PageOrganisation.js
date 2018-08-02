import React from "react";
import Organisation from "./Organisation";

const PageOrganisation = props => {
  console.log(props);
  return <Organisation organisationName={props.match.params.name} />;
};

export default PageOrganisation;
