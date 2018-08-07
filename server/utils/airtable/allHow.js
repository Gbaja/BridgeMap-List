const { airtable } = require("./airtable");

const getAllHow = async () => {
  try {
    const allHowRecords = await airtable
      .base(airtable.HOW_BASE)
      .select({
        fields: ["Name"]
      })
      .all();
    const howFields = allHowRecords.map(record => {
      return { id: record.id, fields: record.fields };
    });
    return howFields;
  } catch (error) {
    console.log(error);
  }
};

module.exports = getAllHow;
