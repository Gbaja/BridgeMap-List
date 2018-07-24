const express = require("express");
const multer = require("multer");
const cloudinary = require("cloudinary");

const router = express.Router();
const airtable = require("../utils/airtable");
const fileUploadMiddleware = require("../utils/fileUploadMiddleware");

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET
});
const storage = multer.memoryStorage();
const upload = multer({ storage });
router.post("/files", upload.single("file"), fileUploadMiddleware);
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
