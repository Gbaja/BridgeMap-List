import React from "react";
import Organisation from "./Organisation";

const PageOrganisation = props => {
  return <Organisation id={props.match.params.id} />;
};

export default PageOrganisation;
