const express = require("express");
const multer = require("multer");
const cloudinary = require("cloudinary");

const router = express.Router();

const allServices = require("../utils/airtable/allServices");
const allHow = require("../utils/airtable/allHow");
const allWhere = require("../utils/airtable/allWhere");
const allOrganisations = require("../utils/airtable/allOrganisations");
const oneOrganisation = require("../utils/airtable/oneOrganisation");
const addOrganisation = require("../utils/airtable/addOrganisation");
const findOrganisations = require("../utils/airtable/findOrganisations");
const fileUploadMiddleware = require("../utils/fileUploadMiddleware");

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET
});
const storage = multer.memoryStorage();
const upload = multer({ storage });
router.post("/files", upload.single("file"), fileUploadMiddleware);

router.get("/api/all_services", (req, res, next) => {
  allServices()
    .then(services => {
      res.send(services);
    })
    .catch(err => {
      next(err);
    });
});

router.get("/api/all_where", (req, res, next) => {
  allWhere()
    .then(where => {
      res.send(where);
    })
    .catch(err => {
      next(err);
    });
});
router.get("/api/all_how", (req, res, next) => {
  allHow()
    .then(how => {
      res.send(how);
    })
    .catch(err => {
      next(err);
    });
});

router.get("/api/all_organisations", (req, res, next) => {
  console.log("ALL ORGANISATION");
  allOrganisations()
    .then(organisations => {
      res.send(JSON.stringify(organisations));
    })
    .catch(err => {
      next(err);
    });
});

router.get(`/api/one_organisation`, (req, res, next) => {
  oneOrganisation(req.query.name)
    .then(organisation => {
      res.send(JSON.stringify(organisation));
    })
    .catch(err => {
      next(err);
    });
});

router.post(`/api/add_organisation`, (req, res, next) => {
  addOrganisation(res, req.body)
    .then(response => {
      res.send(JSON.stringify(response));
    })
    .catch(err => {
      next(err);
    });
});

router.post("/api/find_organisations", (req, res, next) => {
  console.log("FIND ORGANISATION");
  findOrganisations(req.body)
    .then(organisations => {
      res.send(JSON.stringify(organisations));
    })
    .catch(err => {
      next(err);
    });
});

module.exports = router;
