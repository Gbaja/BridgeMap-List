export const emptyValuesAndType = data => {
  if (
    data.orgName.length === 0 ||
    data.orgType.length === 0 ||
    data.website.length === 0 ||
    data.regNum.length === 0 ||
    data.ageGroup.length === 0 ||
    data.logo.length === 0 ||
    data.twitterHandle.length === 0 ||
    data.about.length === 0 ||
    data.services.length === 0 ||
    data.how.length === 0 ||
    data.where.length === 0 ||
    data.services.length === 0 ||
    data.email.length === 0 ||
    data.number.length === 0 ||
    data.completedBy.length === 0 ||
    data.otherInfo.length === 0
  ) {
    return true;
  }
};

export const checkLength = ({ about, other }) => {
  const aboutWordCount = about.trim().split(/\s+/).length;
  const otherWordCount = other.trim().split(/\s+/).length;
  return aboutWordCount > 150 || otherWordCount > 150 ? true : false;
};

export const checkEmail = string => {
  const regex = new RegExp(
    "^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:.[a-zA-Z0-9-]+)*$"
  );
  return regex.test(string);
};
