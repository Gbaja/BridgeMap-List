const express = require("express");

const router = express.Router();
const airtable = require("../utils/airtable");

router.get("/api/all_services", (req, res) => {
  airtable.getAllServices().then(services => {
    res.send(services);
  });
});
router.get("/api/all_where", (req, res) => {
  airtable.getAllWhere().then(where => {
    res.send(where);
  });
});
router.get("/api/all_how", (req, res) => {
  airtable.getAllHow().then(how => {
    res.send(how);
  });
});

router.get("/api/all_organisations", (req, res) => {
  airtable.getOrganisations().then(organisations => {
    res.send(JSON.stringify(organisations));
  });
});

router.get(`/api/one_organisation`, (req, res) => {
  airtable.getOneOrganisation(req.query.name).then(organisation => {
    res.send(JSON.stringify(organisation));
  });
});

router.post(`/api/add_organisation`, (req, res) => {
  airtable.addOrganisation(req.body).then(response => {
    res.send(JSON.stringify(response));
  });
});

router.post("/api/find_organisations", (req, res) => {
  airtable.findOrganisations(req.body).then(organisations => {
    res.send(JSON.stringify(organisations));
  });
});

module.exports = router;
