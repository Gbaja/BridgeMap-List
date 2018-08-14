const { airtable } = require("./airtable");

const getAllWhere = async () => {
  try {
    const allWhereRecords = await airtable
      .base(airtable.WHERE_BASE)
      .select({
        fields: ["Name"]
      })
      .all();
    const whereField = allWhereRecords.map(record => {
      return { id: record.id, fields: record.fields };
    });
    return whereField;
  } catch (error) {
    console.log(error);
  }
};

module.exports = getAllWhere;
