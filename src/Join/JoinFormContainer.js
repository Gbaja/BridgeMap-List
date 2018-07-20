import React, {Component, Fragment} from "react"

import Header from "../StaticPages/Header";
import {fetchServices, fetchHows, fetchWheres} from "../requests/airtable"
import "./Join.css";

const byNotEqualTo = value => service => service !== value

class JoinFormContainer extends Component {
  state = {
      services: [],
      how: [],
      where: [],
      loading: false,
      form: {
        orgName: "",
        orgType: "",
        logo: "",
        services: []
      }
  }

  componentDidMount(){
    this.setState({loading: true})
    return Promise.all([fetchServices(), fetchHows(), fetchWheres()])
              .then(([services, how, where])=>{
                this.setState({services, how, where, loading: false})
            })
  }
  
  handleInputChange = (event) => {
    const target = event.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;
    this.setState({
      form:{...this.state.form, [name]: value}
    });
  }

  handleSumbit = (event) =>{
    event.preventDefault();
    console.log(this.state.form)
  }

  handleFileUpload=(event)=>{
    this.setState({form: { ...this.state.form, logo: event.target.files[0] }})
  }


  handleServiceChange = ({target: {checked, value}}) => {
    const {form} = this.state
    const {services} = form
    if(checked){
      /// ...form is because the value we are changing is nested
      this.setState({form: {...form, services: [...services, value]}})
    } else{
      this.setState({form: {...form, services: services.filter(byNotEqualTo(value))}})
    }
      console.log(value, checked)
  }

  render(){
    if(this.state.loading){
      return <div>loading form...</div>
    }
    return <div>
      <Header/>
      <h2>Join BridgeMap List</h2>
        <form onSubmit={this.handleSumbit}>
          <label>Organisation name</label>
          <input name="orgName" 
            type="text" 
            value={this.state.form.orgName} 
            onChange={this.handleInputChange} 
          />
          <label>Organisation Type</label>
          <select 
            name="orgType"
            value={this.state.form.orgType} 
            onChange={this.handleInputChange}>
              <option value=""></option>
              <option value="Charity">Charity</option>
              <option value="Social enterprise/Not for Profit">Social enterprise/Not for Profit</option>
              <option value="Community Interest Company">Community Interest Company</option>
              <option value="Other i.e partnership, sole trader">Other i.e partnership, sole trader</option>
          </select>
          <label>Logo</label>
          <input 
            name="logo"
            type="file"
            
            onChange={this.handleFileUpload}
          />
        <label>Services we offer to young people</label>
        {this.state.services.map(({Name}) => {
          return <Fragment key={Name}>
            <label>{Name}</label>
            <input
              type="checkbox"
              value={Name}
              checked={this.state.form.services.includes(Name)}
              onChange={this.handleServiceChange}
            />
          </Fragment>
        })}
           {/* <label>Services we offer to young people</label>
          {this.state.services.map(service=>{
            return <Fragment><label>{service.Name}</label>
              <input
                type="checkbox"
                // value={this.state.orgName}
                // onChange={this.handleInputChange}
              />
              </Fragment>
        })}
        <label>How we work with young people</label>
        {this.state.how.map(how => {
          return <Fragment><label>{how.Name}</label>
            <input
              type="checkbox"
            // value={this.state.orgName}
            // onChange={this.handleInputChange}
            />
          </Fragment>
        })}
        <label>Areas we work within</label>
        {this.state.where.map(where => {
          return <Fragment><label>{where.Name}</label>
            <input
              type="checkbox"
            // value={this.state.orgName}
            // onChange={this.handleInputChange}
            />
          </Fragment>
        })}  */}
          <button type="submit">Submit</button>
        </form>
      </div>;
  }
}

export default JoinFormContainer
// import { withFormik } from "formik";
// import * as Yup from "yup";
// import axios from "axios"

// import JoinForm from "./JoinForm";
// import {addOrganisation} from "../requests/airtable"

// const JoinFormForkik = withFormik({
//   mapPropsToValues({ 
//       orgName,
//       orgType,
//       registeredNumber,
//       website,
//       orgEmail,
//       orgNumber,
//       about,
//       areas,
//       ageGroup,
//       completedBy,
//     mentoringService,
// housingService,
// eventsService,
// employabilityService,
// internService,
// volunteeringService,
// mentalService,
// legalService,
// otherService,
//       throughReferrals,
//       throughSchools,
//       throughDirect
//     }) {
//     return {
//       orgName: orgName || "",
//       orgType: orgType || "",
//       registeredNumber: registeredNumber ||"",
//       website: website ||"",
//       orgEmail: orgEmail ||"",
//       orgNumber: orgNumber ||"",
//       about: about ||"",
//       areas: areas ||"",
//       ageGroup: ageGroup || "",
//       completedBy: completedBy || "",
//       mentoringService: mentoringService || "",
// housingService: housingService || "",
// eventsService:eventsService || "",
// employabilityService: employabilityService || "",
// internService: internService || "",
// volunteeringService: volunteeringService || "",
// mentalService: mentalService || "",
// legalService: legalService || "",
// otherService: otherService||"",
//       throughReferrals:throughReferrals ||"",
//       throughSchools: throughSchools||"",
//       throughDirect:throughDirect || ""    };
//   },
//   validationSchema: Yup.object().shape({
//     // name: Yup.string().required("Please enter a name!"),
//     // userName: Yup.string().required("Please enter a userName!"),
//     // email: Yup.string()
//     //   .email("Email not valid")
//     //   .required("Email is required"),
//     // password: Yup.string().required("Please enter a password!"),
//     // isExpert: Yup.string().required("Please select a value")
//   }),
//   handleSubmit(values, { props, setStatus }) {
//     console.log(values);
//     let services = [];
//     let how = [];
//     if(values.mentoringService){
//       services.push("Mentoring")
//     }
//     if(values.housingService){
//       services.push("Housing")
//     }
//     if(values.eventsService){
//       services.push("Short courses, events and activities")
//     }
//     if(values.employabilityService){
//       services.push("Employability advice and support");
//     }
//       if (values.internService){
//         services.push("Paid Apprenticeship/Internship");
//       }
//       if(values.volunteeringService){
//         services.push("Volunteering")
//       }
//       if(values.mentalService){
//         services.push("Mental health support");
//       }
//       if(values.legalService){
//         services.push("Legal advice")
//       }
//       if(values.throughReferrals){
//         how.push("Referrals")
//       }
//       if(values.throughSchools){
//         how.push("Through partnership with schools");
//       }
//       if(values.throughDirect){
//         how.push("Young people can come to us directly");
//       }
//     values.services = services;
//     values.how = how;
//     return addOrganisation(values)
   
//   }
// })(JoinForm);

// export default JoinFormForkik;
