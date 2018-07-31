const { airtable } = require("./airtable");

const findOrganisations = async data => {
  const howData = await airtable
    .base(airtable.HOW_BASE)
    .select({
      filterByFormula: `{Name} = \"${data.how}\"`,
      fields: ["Name", "Organisations"]
    })
    .all();
  const allHowData = howData.map(record => record.fields.Organisations);

  const serviceData = await airtable
    .base(airtable.SERVICES_BASE)
    .select({
      filterByFormula: `{Name} = \"${data.service}\"`,
      fields: ["Name", "Organisations"]
    })
    .all();
  const allServiceData = serviceData.map(record => record.fields.Organisations);

  const whereData = await airtable
    .base(airtable.WHERE_BASE)
    .select({
      filterByFormula: `{Name} = \"${data.where}\"`,
      fields: ["Name", "Organisations"]
    })
    .all();
  const allWhereData = whereData.map(record => record.fields.Organisations);

  const arrayHow = allHowData[0] || [];
  const arrayService = allServiceData[0] || [];
  const arrayWhere = allWhereData[0] || [];
  const organisationsArrayResults = [
    ...new Set([...arrayHow, ...arrayService, ...arrayWhere])
  ];
  console.log("ORGANISATION ARRAY RESULT: ", organisationsArrayResults);
  const organisationsResults = organisationsArrayResults.map(organisation => {
    return airtable
      .base(airtable.ORGANISATION_BASE)
      .find(organisation)
      .then(record => {
        const neededData = {
          "Name of Organisation": record.fields["Name of Organisation"],
          "Type of Organisation": record.fields["Type of Organisation"],
          "Services Provided to young people":
            record.fields["Services Provided to young people"],
          logo: record.fields["logo"]
        };
        return neededData;
      });
  });

  const searchedOrganisations = await Promise.all(organisationsResults);
  console.log(searchedOrganisations);
  //   const servicesName = searchedOrganisations[
  //     "Services Provided to young people"
  //   ].map(id => {
  //     console.log("SERVICES: ", id);
  //     return airtable
  //       .base(airtable.SERVICES_BASE)
  //       .find(id)
  //       .then(record => {
  //         return record.fields.Name;
  //       });
  //   });
  //   const serviceNameArray = await Promise.all(servicesName);
  //   searchedOrganisations["Services Provided to young people"] = serviceNameArray;
  console.log(searchedOrganisations.length);
  return searchedOrganisations;
};

module.exports = findOrganisations;
