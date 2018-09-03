const { airtable, OrganisationFields } = require("./airtable");

const findOrganisations = async data => {
  console.log(data);
  const how = data.how;
  const where = data.where;
  const service = data.service;
  console.log(how);
  console.log(where);
  console.log(service);
  const records = await airtable
    .base(airtable.ORGANISATION_BASE)
    .select({
      filterByFormula: `{Status} = "Verified"`,
      fields: OrganisationFields,
      sort: [{ field: "Name of Organisation", direction: "asc" }]
    })
    .all();
  const organisationsData = records.map(record => {
    return {
      id: record.id,
      ...record.fields
    };
  });
  const allCases = organisationsData.filter(each => {
    return (
      each["Where we are based"].includes(where) &&
      each["How we work with young people"].includes(how) &&
      each["Services Provided to young people"].includes(service)
    );
  });
  // console.log("FIND ORGANISATIONS: ", organisationsData);
  console.log("LOOPP!!: ", allCases);
};

// const findOrganisations = async data => {
//   try {
//     const howData = await airtable
//       .base(airtable.HOW_BASE)
//       .select({
//         filterByFormula: `{Name} = \"${data.how}\"`,
//         fields: ["Name", "Organisations"]
//       })
//       .all();
//     const allHowData = howData.map(record => record.fields.Organisations);

//     const serviceData = await airtable
//       .base(airtable.SERVICES_BASE)
//       .select({
//         filterByFormula: `{Name} = \"${data.service}\"`,
//         fields: ["Name", "Organisations"]
//       })
//       .all();
//     const allServiceData = serviceData.map(
//       record => record.fields.Organisations
//     );

//     const whereData = await airtable
//       .base(airtable.WHERE_BASE)
//       .select({
//         filterByFormula: `{Name} = \"${data.where}\"`,
//         fields: ["Name", "Organisations"]
//       })
//       .all();
//     const allWhereData = whereData.map(record => record.fields.Organisations);

//     const arrayHow = allHowData[0] || [];
//     const arrayService = allServiceData[0] || [];
//     const arrayWhere = allWhereData[0] || [];
//     const organisationsArrayResults = [
//       ...new Set([...arrayHow, ...arrayService, ...arrayWhere])
//     ];
//     const organisationsResults = organisationsArrayResults.map(
//       organisationId => {
//         return airtable
//           .base(airtable.ORGANISATION_BASE)
//           .find(organisationId)
//           .then(record => {
//             const neededData = {
//               "Name of Organisation": record.fields["Name of Organisation"],
//               "Type of Organisation": record.fields["Type of Organisation"],
//               "Services Provided to young people":
//                 record.fields["Services Provided to young people"],
//               logo: record.fields["logo"],
//               status: record.fields["Status"]
//             };
//             //  console.log("NEEDED DATA:", neededData);
//             return neededData;
//           });
//       }
//     );

//     const searchedOrganisations = await Promise.all(organisationsResults).then(
//       organisations => {
//         return organisations.filter(organisation => {
//           return organisation.status === "Verified";
//         });
//       }
//     );
//     const mapSearchedOrganisations = searchedOrganisations.map(
//       async organisation => {
//         const getServiceName = organisation[
//           "Services Provided to young people"
//         ].map(serviceId => {
//           return airtable
//             .base(airtable.SERVICES_BASE)
//             .find(serviceId)
//             .then(record => {
//               return record.fields.Name;
//             });
//         });
//         const namesServices = await Promise.all(getServiceName);
//         organisation["Services Provided to young people"] = namesServices;
//         return organisation;
//       }
//     );
//     const searchOrganisationsData = await Promise.all(mapSearchedOrganisations);
//     return searchOrganisationsData;
//   } catch (error) {
//     console.log(error);
//   }
// };

module.exports = findOrganisations;
