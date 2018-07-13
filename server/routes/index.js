const express = require("express");

const router = express.Router();
const airtable = require("../utils/airtable");

router.get("/api/all_organisations", (req, res) => {
    airtable.getOrganisations().then(organisations =>{
      res.send(JSON.stringify(organisations))
    })
});

router.get(`/api/one_organisation`, (req, res) => {
    airtable.getOneOrganisation(req.query.name).then(organisation =>{
        res.send(JSON.stringify(organisation))
    })
})

router.post(`/api/add_organisation`, (req, res) => {
    const { orgName,
        orgType,
        registeredNumber,
        website,
        orgEmail,
        orgNumber,
        about,
        areas,
        services,
        how,
        completedBy,
    ageGroup } = req.body
    const data = {
        "Name of Organisation":orgName,
        "Type of Organisation":orgType,
        "Registered number":registeredNumber,
        "Website":website,
        "Organisation email":orgEmail,
        "Organisation contact number":orgNumber,
        "About":about,
        "Areas we work in":areas,
        "Age group we work with":ageGroup,
        "Services Provided to young people":services,
        "How we work with young people":how,
        "Form completed by":completedBy,
        "Status":"Pending"
    }
    airtable.addOrganisation(data).then(response => {
      res.send(JSON.stringify(response));
    });
})

router.post("/api/find_organisations", (req, res)=>{
    res.send("find organisation")
})

module.exports = router;