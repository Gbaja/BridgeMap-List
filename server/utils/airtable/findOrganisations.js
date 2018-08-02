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
  const mapSearchedOrganisations = searchedOrganisations.map(
    async organisation => {
      const getServiceName = organisation[
        "Services Provided to young people"
      ].map(serviceId => {
        return airtable
          .base(airtable.SERVICES_BASE)
          .find(serviceId)
          .then(record => {
            return record.fields.Name;
          });
      });
      const namesServices = await Promise.all(getServiceName);
      organisation["Services Provided to young people"] = namesServices;
      return organisation;
    }
  );
  const searchOrganisationsData = await Promise.all(mapSearchedOrganisations);
  return searchOrganisationsData;
};

module.exports = findOrganisations;
