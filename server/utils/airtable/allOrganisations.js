const { airtable } = require("./airtable");

const getOrganisations = async () => {
  const records = await airtable
    .base(airtable.ORGANISATION_BASE)
    .select({
      filterByFormula: `{Status} = "Verified"`,
      fields: [
        "Name of Organisation",
        "Type of Organisation",
        "Services Provided to young people",
        "logo"
      ],
      sort: [{ field: "Name of Organisation", direction: "asc" }]
    })
    .all();
  const organisationsData = records.map(record => {
    return {
      id: record.id,
      ...record.fields
    };
  });
  console.log(organisationsData);
  const mapOrgsServices = organisationsData.map(async organisationData => {
    const services = organisationData["Services Provided to young people"].map(
      id => {
        return airtable
          .base(airtable.HOW_BASE)
          .find(id)
          .then(record => {
            return record.fields.Name;
          });
      }
    );
    const servicesArray = await Promise.all(services);
    organisationData["Services Provided to young people"] = servicesArray;
    return organisationsData;
  });

  const details = await Promise.all(mapOrgsServices);

  return details[0];
};

module.exports = getOrganisations;
