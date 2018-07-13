const Airtable = require("airtable");
require("env2")("config.env");

Airtable.configure({
  endpointUrl: "https://api.airtable.com",
    apiKey: process.env.AIRTABLE_API_KEY
});

const base = Airtable.base(process.env.AIRTABLE_BASE);
const ORGANISATION_BASE = "Organisations";

const OrganisationFields = [
    "Name of Organisation",
    "Type of Organisation",
    "Registered number",
    "Website",
    "Organisation email",
    "Organisation contact number",
    "About",
    "Areas we work in",
    "Services Provided to young people",
    "How we work with young people",
    "Age group we work with"
]

const getOrganisations = () => 
    base(ORGANISATION_BASE)
        .select({
            filterByFormula: `{Status} = "Verified"`,
            fields: ["Name of Organisation",
                    "Type of Organisation",
                     "Services Provided to young people", ]
        })
        .all()
        .then(records => {
        return records.map(record => record.fields);
        })
        .catch(err=> {
            console.log(err)
        });

const getOneOrganisation = org_name =>
  base(ORGANISATION_BASE)
    .select({
      filterByFormula: `{Name of Organisation} = \"${org_name}\"`,
      fields: OrganisationFields
    })
    .all()
    .then(record => record.map(record => record.fields));

const addOrganisation = (data) => 
    base(ORGANISATION_BASE).create(data)
        .then(() => {
            return {message: "Your organisation has been added."}
        })
        .catch(err=>{
            console.log("AIRTABLE ADD ORGANISATION ERROR: ", err)
        })

module.exports = {
  getOrganisations,
  getOneOrganisation,
  addOrganisation
};

