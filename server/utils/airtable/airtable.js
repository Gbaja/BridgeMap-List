const Airtable = require("airtable");
require("env2")("config.env");

Airtable.configure({
  endpointUrl: "https://api.airtable.com",
  apiKey: process.env.AIRTABLE_API_KEY
});

const airtable = {
  base: Airtable.base(process.env.AIRTABLE_BASE),
  ORGANISATION_BASE: "Organisations",
  HOW_BASE: "How",
  SERVICES_BASE: "Services",
  WHERE_BASE: "Location"
};

const OrganisationFields = [
  "Name of Organisation",
  "Type of Organisation",
  "Registered number",
  "Website",
  "Organisation email",
  "Organisation contact number",
  "About",
  "Where we are based",
  "Services Provided to young people",
  "How we work with young people",
  "Age group we work with",
  "logo"
];

module.exports = {
  airtable,
  OrganisationFields
};
