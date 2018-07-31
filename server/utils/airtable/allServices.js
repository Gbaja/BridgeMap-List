const { airtable } = require("./airtable");

const getAllServices = async () => {
  const allServicesRecords = await airtable
    .base(airtable.SERVICES_BASE)
    .select({
      fields: ["Name"]
    })
    .all();
  const servicesField = allServicesRecords.map(record => {
    return { id: record.id, fields: record.fields };
  });
  return servicesField;
};

module.exports = getAllServices;
