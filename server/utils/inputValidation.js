const validator = require("validator");

const inputValidation = data => {
  console.log("ADATA NPUR VALIDATION: ", typeof data.orgName);
  let isNotValid = false;
  let message = [];

  if (
    !validator.isEmpty(data.orgName) ||
    !validator.isEmpty(data.orgType) ||
    !validator.isEmpty(data.website) ||
    !validator.isEmpty(data.regNum) ||
    !validator.isEmpty(data.ageGroup) ||
    !validator.isEmpty(data.logo) ||
    !validator.isEmpty(data.twitterHandle) ||
    !validator.isEmpty(data.about) ||
    !validator.isEmpty(data.email) ||
    !validator.isEmpty(data.number) ||
    !validator.isEmpty(data.completedBy) ||
    !validator.isEmpty(data.otherInfo)
  ) {
    isNotValid = true;
    message.push("Please make sure you have completed all fields");
  }
  if (
    !validator.isAlphanumeric(data.orgName) ||
    !validator.isAlphanumeric(data.orgType) ||
    !validator.isAlphanumeric(data.website) ||
    !validator.isAlphanumeric(data.regNum) ||
    !validator.isAlphanumeric(data.ageGroup) ||
    !validator.isAlphanumeric(data.logo) ||
    !validator.isAlphanumeric(data.twitterHandle) ||
    !validator.isAlphanumeric(data.about) ||
    !validator.isAlphanumeric(data.email) ||
    !validator.isAlphanumeric(data.number) ||
    !validator.isAlphanumeric(data.completedBy) ||
    !validator.isAlphanumeric(data.otherInfo)
  ) {
    isNotValid = true;
    message.push(
      "Please make sure you only enter numbers and letters in the fields."
    );
  }

  if (!validator.isEmail(data.email)) {
    isNotValid = true;
    message.push("Please enter a valid email");
  }
  if (!validator.isMobilePhone(data.orgNum)) {
    isNotValid = true;
    message.push("Please enter a valid telephone number.");
  }

  return [isNotValid, message];
};

module.exports = inputValidation;
