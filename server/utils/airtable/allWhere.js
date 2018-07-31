const { airtable } = require("./airtable");

const getAllWhere = async () => {
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
};

module.exports = getAllWhere;
