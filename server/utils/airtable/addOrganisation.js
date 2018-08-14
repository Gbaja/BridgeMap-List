const { airtable } = require("./airtable");
const joinConfirmationEmail = require("../joinConfirmationEmail");

const addOrganisation = async (res, data) => {
  const {
    about,
    ageGroup,
    completedBy,
    completedByRole,
    email,
    how,
    logo,
    number,
    twitterHandle,
    orgName,
    orgType,
    otherInfo,
    regNum,
    services,
    website,
    where
  } = data;
  const checkOrganisation = await airtable
    .base(airtable.ORGANISATION_BASE)
    .select({
      filterByFormula: `{Name of Organisation} = \"${orgName}\"`,
      fields: ["Name of Organisation", "Services Provided to young people"]
    })
    .all();
  const checkOrganisationData = checkOrganisation.map(record => record.fields);
  console.log(checkOrganisationData);
  if (checkOrganisationData.length === 0) {
    const servicesID = services.map(service =>
      airtable
        .base(airtable.SERVICES_BASE)
        .select({
          filterByFormula: `{Name} = \"${service}\"`,
          fields: []
        })
        .all()
        .then(service => {
          return service[0].id;
        })
    );

    const allServicesID = await Promise.all(servicesID);

    const howID = how.map(how =>
      airtable
        .base(airtable.HOW_BASE)
        .select({
          filterByFormula: `{Name} = \"${how}\"`,
          fields: []
        })
        .all()
        .then(how => {
          return how[0].id;
        })
    );

    const allHowID = await Promise.all(howID);
    const whereID = where.map(where =>
      airtable
        .base(airtable.WHERE_BASE)
        .select({
          filterByFormula: `{Name} = \"${where}\"`,
          fields: []
        })
        .all()
        .then(where => {
          return where[0].id;
        })
    );

    const allWhereID = await Promise.all(whereID);

    const organisationInfo = {
      "Name of Organisation": orgName,
      "Type of Organisation": orgType,
      "Registered number": regNum,
      Website: website,
      "Organisation email": email,
      "Organisation contact number": number,
      logo: logo,
      About: about,
      "Twitter Handle": twitterHandle,
      "Where we are based": allWhereID,
      "Age group we work with": ageGroup,
      "Services Provided to young people": allServicesID,
      "How we work with young people": allHowID,
      "Form completed by": completedBy,
      "Do you work for this company": completedByRole,
      "Any other info": otherInfo,
      Status: "Pending"
    };

    return airtable
      .base(airtable.ORGANISATION_BASE)
      .create(organisationInfo)
      .then(record => {
        joinConfirmationEmail(record.fields);
        return { message: "Your organisation has been added." };
      })
      .catch(err => {
        console.log("AIRTABLE ADD ORGANISATION ERROR: ", err);
      });
  } else {
    res
      .status(422)
      .send({ type: "error", message: "Oragnisation name already exists." });
  }
};

module.exports = addOrganisation;
