const { airtable, OrganisationFields } = require("./airtable");

const getOneOrganisation = async id => {
  try {
    // const record = await airtable
    //   .base(airtable.ORGANISATION_BASE)
    //   .select({
    //     filterByFormula: `{Name of Organisation} = \"${id}\"`,
    //     fields: OrganisationFields
    //   })
    //   .all();
    const record = await airtable.base(airtable.ORGANISATION_BASE).find(id);
    // .then(record => {
    //   return record.fields;
    // });

    console.log("ONE ORGANISATION RECORD: ", record.fields);

    // const data = record.map(record => record.fields);
    const where = record.fields["Where we are based"].map(id => {
      return airtable
        .base(airtable.WHERE_BASE)
        .find(id)
        .then(record => {
          return record.fields.Name;
        });
    });
    const how = record.fields["How we work with young people"].map(id => {
      return airtable
        .base(airtable.HOW_BASE)
        .find(id)
        .then(record => {
          return record.fields.Name;
        });
    });
    const services = record.fields["Services Provided to young people"].map(
      id => {
        return airtable
          .base(airtable.SERVICES_BASE)
          .find(id)
          .then(record => {
            return record.fields.Name;
          });
      }
    );
    const howArray = await Promise.all(how);
    const servicesArray = await Promise.all(services);
    const whereArray = await Promise.all(where);
    record.fields["Services Provided to young people"] = servicesArray;
    record.fields["How we work with young people"] = howArray;
    record.fields["Where we are based"] = whereArray;
    return record.fields;
  } catch (error) {
    console.log(error);
  }
};

module.exports = getOneOrganisation;
