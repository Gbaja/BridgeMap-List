const Airtable = require("airtable");
require("env2")("config.env");

const { uploadImage } = require("./cloudinary");

Airtable.configure({
  endpointUrl: "https://api.airtable.com",
  apiKey: process.env.AIRTABLE_API_KEY
});

const base = Airtable.base(process.env.AIRTABLE_BASE);
const ORGANISATION_BASE = "Organisations";
const HOW_BASE = "How";
const SERVICES_BASE = "Services";
const WHERE_BASE = "Location";

const OrganisationFields = [
  "Name of Organisation",
  "Type of Organisation",
  "Registered number",
  "Website",
  "Organisation email",
  "Organisation contact number",
  "About",
  "Where we are based",
  "Services Provided to young people",
  "How we work with young people",
  "Age group we work with"
];

const getAllServices = async () => {
  const allServicesRecords = await base(SERVICES_BASE)
    .select({
      fields: ["Name"]
    })
    .all();
  const servicesField = allServicesRecords.map(record => record.fields);
  return servicesField;
};

const getAllHow = async () => {
  const allHowRecords = await base(HOW_BASE)
    .select({
      fields: ["Name"]
    })
    .all();
  const howFields = allHowRecords.map(record => record.fields);
  return howFields;
};
const getAllWhere = async () => {
  const allWhereRecords = await base(WHERE_BASE)
    .select({
      fields: ["Name"]
    })
    .all();
  const whereField = allWhereRecords.map(record => record.fields);
  return whereField;
};
const getOrganisations = async () => {
  const records = await base(ORGANISATION_BASE)
    .select({
      filterByFormula: `{Status} = "Verified"`,
      fields: [
        "Name of Organisation",
        "Type of Organisation",
        "Services Provided to young people"
      ]
    })
    .all();
  const organisationsData = records.map(record => record.fields);

  const mapOrgsServices = organisationsData.map(async organisationData => {
    const services = organisationData["Services Provided to young people"].map(
      id => {
        return base(HOW_BASE)
          .find(id)
          .then(record => {
            return record.fields.Name;
          });
      }
    );
    const servicesArray = await Promise.all(services);
    organisationData["Services Provided to young people"] = servicesArray;
    return organisationsData;
  });

  const details = await Promise.all(mapOrgsServices);

  return details[0];
};

const getOneOrganisation = async org_name => {
  const record = await base(ORGANISATION_BASE)
    .select({
      filterByFormula: `{Name of Organisation} = \"${org_name}\"`,
      fields: OrganisationFields
    })
    .all();

  const data = record.map(record => record.fields);
  const where = data[0]["Where we are based"].map(id => {
    return base(WHERE_BASE)
      .find(id)
      .then(record => {
        return record.fields.Name;
      });
  });
  const how = data[0]["How we work with young people"].map(id => {
    return base(HOW_BASE)
      .find(id)
      .then(record => {
        return record.fields.Name;
      });
  });
  const services = data[0]["Services Provided to young people"].map(id => {
    return base(SERVICES_BASE)
      .find(id)
      .then(record => {
        return record.fields.Name;
      });
  });
  const howArray = await Promise.all(how);
  const servicesArray = await Promise.all(services);
  const whereArray = await Promise.all(where);
  data[0]["Services Provided to young people"] = servicesArray;
  data[0]["How we work with young people"] = howArray;
  data[0]["Where we are based"] = whereArray;
  return data;
};

const addOrganisation = async data => {
  const {
    about,
    ageGroup,
    completedBy,
    email,
    how,
    logo,
    number,
    orgName,
    orgType,
    otherInfo,
    regNum,
    services,
    website,
    where
  } = data;
  console.log(services);
  const servicesID = services.map(service =>
    base(SERVICES_BASE)
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
    base(HOW_BASE)
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
    base(WHERE_BASE)
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

  const imageUrl = uploadImage(logo);
  console.log(imageUrl)

  const organisationInfo = {
    "Name of Organisation": orgName,
    "Type of Organisation": orgType,
    "Registered number": regNum,
    Website: website,
    "Organisation email": email,
    "Organisation contact number": number,
    About: about,
    "Where we are based": allWhereID,
    "Age group we work with": ageGroup,
    "Services Provided to young people": allServicesID,
    "How we work with young people": allHowID,
    "Form completed by": completedBy,
    "Any other info": otherInfo,
    Status: "Pending"
  };

  return base(ORGANISATION_BASE)
    .create(organisationInfo)
    .then(() => {
      return { message: "Your organisation has been added." };
    })
    .catch(err => {
      console.log("AIRTABLE ADD ORGANISATION ERROR: ", err);
    });
};
const findOrganisations = data =>
  base(HOW_BASE)
    .select({
      filterByFormula: `{Name} = \"${data.how}\"`,
      fields: ["Name", "Organisations"]
    })
    .all()
    .then(([record]) => {
      const info = record.fields["Organisations"].map(id => {
        return base(ORGANISATION_BASE)
          .find(id)
          .then(record => {
            console.log(record.fields);
            return record.fields;
          });
      });
      Promise.all(info).then(results => {
        console.log(results);
      });
      return record.fields;
    });

module.exports = {
  getAllServices,
  getAllHow,
  getAllWhere,
  getOrganisations,
  getOneOrganisation,
  addOrganisation,
  findOrganisations
};
