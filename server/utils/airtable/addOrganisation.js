const { airtable } = require("./airtable");
const joinConfirmationEmail = require("../joinConfirmationEmail");

const addOrganisation = async (res, data) => {
  console.log("SERVICESSSS: ", data.services);
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
      "Where we are based": where,
      "Age group we work with": ageGroup,
      "Services Provided to young people": services,
      "How we work with young people": how,
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
