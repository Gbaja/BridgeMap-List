import { withFormik } from "formik";
import * as Yup from "yup";
import axios from "axios"

import JoinForm from "./JoinForm";
import {addOrganisation} from "../requests/airtable"

const JoinFormForkik = withFormik({
  mapPropsToValues({ 
      orgName,
      orgType,
      registeredNumber,
      website,
      orgEmail,
      orgNumber,
      about,
      areas,
      ageGroup,
      completedBy,
    mentoringService,
housingService,
eventsService,
employabilityService,
internService,
volunteeringService,
mentalService,
legalService,
otherService,
      throughReferrals,
      throughSchools,
      throughDirect
    }) {
    return {
      orgName: orgName || "",
      orgType: orgType || "",
      registeredNumber: registeredNumber ||"",
      website: website ||"",
      orgEmail: orgEmail ||"",
      orgNumber: orgNumber ||"",
      about: about ||"",
      areas: areas ||"",
      ageGroup: ageGroup || "",
      completedBy: completedBy || "",
      mentoringService: mentoringService || "",
housingService: housingService || "",
eventsService:eventsService || "",
employabilityService: employabilityService || "",
internService: internService || "",
volunteeringService: volunteeringService || "",
mentalService: mentalService || "",
legalService: legalService || "",
otherService: otherService||"",
      throughReferrals:throughReferrals ||"",
      throughSchools: throughSchools||"",
      throughDirect:throughDirect || ""    };
  },
  validationSchema: Yup.object().shape({
    // name: Yup.string().required("Please enter a name!"),
    // userName: Yup.string().required("Please enter a userName!"),
    // email: Yup.string()
    //   .email("Email not valid")
    //   .required("Email is required"),
    // password: Yup.string().required("Please enter a password!"),
    // isExpert: Yup.string().required("Please select a value")
  }),
  handleSubmit(values, { props, setStatus }) {
    console.log(values);
    let services = [];
    let how = [];
    if(values.mentoringService){
      services.push("Mentoring")
    }
    if(values.housingService){
      services.push("Housing")
    }
    if(values.eventsService){
      services.push("Short courses, events and activities")
    }
    if(values.employabilityService){
      services.push("Employability advice and support");
    }
      if (values.internService){
        services.push("Paid Apprenticeship/Internship");
      }
      if(values.volunteeringService){
        services.push("Volunteering")
      }
      if(values.mentalService){
        services.push("Mental health support");
      }
      if(values.legalService){
        services.push("Legal advice")
      }
      if(values.throughReferrals){
        how.push("Referrals")
      }
      if(values.throughSchools){
        how.push("Through partnership with schools");
      }
      if(values.throughDirect){
        how.push("Young people can come to us directly");
      }
    values.services = services;
    values.how = how;
    return addOrganisation(values)
   
  }
})(JoinForm);

export default JoinFormForkik;
