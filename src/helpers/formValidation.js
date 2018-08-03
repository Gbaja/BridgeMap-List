export const emptyValues = data => {
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

export const checkValueType = data => {
  if (
    typeof data.orgName === "string" ||
    typeof data.orgType === "string" ||
    typeof data.website === "string" ||
    typeof data.regNum === "string" ||
    typeof data.ageGroup === "string" ||
    typeof data.logo === "string" ||
    typeof data.twitterHandle === "string" ||
    typeof data.about === "string" ||
    Array.isArray(data.services) ||
    Array.isArray(data.how) ||
    Array.isArray(data.where) ||
    typeof data.services === "string" ||
    typeof data.email === "string" ||
    typeof data.number === "string" ||
    typeof data.completedBy === "string" ||
    typeof data.otherInfo === "string"
  ) {
    return true;
  }
};

export const checkEmail = string => {
  const regex = new RegExp("[A-Za-z0-9._-]+@[A-Za-z0-9._-]+.[A-Za-z]");
  return regex.test(string);
};
