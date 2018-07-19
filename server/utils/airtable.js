const Airtable = require("airtable");
require("env2")("config.env");

Airtable.configure({
  endpointUrl: "https://api.airtable.com",
    apiKey: process.env.AIRTABLE_API_KEY
});

const base = Airtable.base(process.env.AIRTABLE_BASE);
const ORGANISATION_BASE = "Organisations";
const HOW_BASE= "How";

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
        }).then(organisations=>{
            return organisations
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
    .then(record => {
        const data = record.map(record => record.fields)

        const how = data[0]["How we work with young people"].map(id=>{
            return base(HOW_BASE).find(id).then(record=>{
                return record.fields.Name;
            })
        })

        const howArray = Promise.all(how).then((results)=> {
            console.log(results)
            return results
        })

        const services = data[0]["Services Provided to young people"].map(
          id => {
            return base(HOW_BASE)
              .find(id)
              .then(record => {
                return record.fields.Name;
              });
          }
        );

        const servicesArray = Promise.all(services).then((results) => {
            console.log(results)
            return results
        })

        
    
        return data
       
    })

const addOrganisation = (data) => 
    base(ORGANISATION_BASE).create(data)
        .then(() => {
            return {message: "Your organisation has been added."}
        })
        .catch(err=>{
            console.log("AIRTABLE ADD ORGANISATION ERROR: ", err)
        })

const findOrganisations = (data) => 
    base(HOW_BASE)
        .select({
            filterByFormula: `{Name} = \"${data.how}\"`,
            fields: ["Name", "Organisations"]
        })
        .all()
        .then(([record]) => {
            const info = record.fields["Organisations"].map(id => {
              return base(ORGANISATION_BASE)
                .find(id)
                .then(record => {
                    console.log(record.fields)
                  return record.fields;
                });
            });
            Promise.all(info).then(results=>{
                console.log(results)
            })
            return record.fields
      });


module.exports = {
  getOrganisations,
  getOneOrganisation,
  addOrganisation,
  findOrganisations
};

