const { airtable, OrganisationFields } = require("./airtable");

const getOneOrganisation = async org_name => {
  const record = await airtable
    .base(airtable.ORGANISATION_BASE)
    .select({
      filterByFormula: `{Name of Organisation} = \"${org_name}\"`,
      fields: OrganisationFields
    })
    .all();

  const data = record.map(record => record.fields);
  const where = data[0]["Where we are based"].map(id => {
    return airtable
      .base(airtable.WHERE_BASE)
      .find(id)
      .then(record => {
        return record.fields.Name;
      });
  });
  const how = data[0]["How we work with young people"].map(id => {
    return airtable
      .base(airtable.HOW_BASE)
      .find(id)
      .then(record => {
        return record.fields.Name;
      });
  });
  const services = data[0]["Services Provided to young people"].map(id => {
    return airtable
      .base(airtable.SERVICES_BASE)
      .find(id)
      .then(record => {
        return record.fields.Name;
      });
  });
  const howArray = await Promise.all(how);
  const servicesArray = await Promise.all(services);
  const whereArray = await Promise.all(where);
  data[0]["Services Provided to young people"] = servicesArray;
  data[0]["How we work with young people"] = howArray;
  data[0]["Where we are based"] = whereArray;
  return data;
};

module.exports = getOneOrganisation;
