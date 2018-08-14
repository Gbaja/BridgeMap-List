const { airtable } = require("./airtable");

const getAllServices = async () => {
  try {
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
  } catch (error) {
    console.log(error);
  }
};

module.exports = getAllServices;
