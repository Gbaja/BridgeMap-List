import React from "react";
import { Form, Field } from "formik";

import "./Join.css"
import Header from "../StaticPages/Header"

const JoinForm = ({ errors, touched, status }) => {
  const { 
    orgName, 
    orgType, 
    registeredNumber, 
    website, 
    orgEmail, 
    orgNumber, 
    about, 
    areas, 
    ageGroup,
    mentoring,
    housing,
    events,
    employability,
    intern,
    volunteering,
    mental,
    legal,
    other,
    referrals,
    schools,
    direct, 
    completedBy
    
  } = errors;
    return <div>
        <Form>
          <Header />
          <h3>Join BridgeMap List</h3>
          <label>Name of Organisation</label>
          {touched.orgName && orgName && <p>{orgName}</p>}
          <p />
          <Field type="text" name="orgName" placeholder="orgName" />
          <label>Type of Organisation</label>
          <p />
          {touched.orgType && orgType && <p>{orgType}</p>}
          <Field component="select" name="orgType">
            <option value="" />
            <option value="Charity">Charity</option>
            <option value="Social enterprise/Not for Profit">
              Social enterprise/Not for Profit
            </option>
            <option value="Community Interest Company">
              Community Interest Company
            </option>
            <option value="Other i.e Partnership, Limited Company, Sole trader ">
              Other i.e Partnership, Limited Company, Sole trader{" "}
            </option>
          </Field>
          <label>Registered number</label>
          {touched.registeredNumber && registeredNumber && <p>
                {registeredNumber}
              </p>}
          <p />
          <Field type="test" name="registeredNumber" placeholder="registeredNumber" />
          <label>Website</label>
          {touched.website && website && <p>{website}</p>}
          <p />
          <Field type="text" name="website" placeholder="website" />
          <label>Organisation email</label>
          {touched.orgEmail && orgEmail && <p>{orgEmail}</p>}
          <p />
          <Field type="email" name="orgEmail" placeholder="orgEmail" />
          <label>Organisation contact number</label>
          {touched.orgNumber && orgNumber && <p>{orgNumber}</p>}
          <p />
          <Field type="tel" name="orgNumber" placeholder="orgNumber" />
          <label>About</label>
          {touched.about && about && <p>{about}</p>}
          <p />
          <Field type="textArea" name="about" placeholder="about" />
          <label>Areas we work in</label>
          <p />
          {touched.areas && areas && <p>{areas}</p>}
          <Field type="textArea" name="areas" placeholder="areas" />
          <p>Services provided to young people</p>
          <p />
          <label>Mentoring</label>
          <Field type="checkbox" name="mentoringService" />
          <label>Housing</label>
          <Field type="checkbox" name="housingService" />
          <label>Short courses, events and activities</label>
          <Field type="checkbox" name="eventsService" />
          <label>Employability advice and support</label>
          <Field type="checkbox" name="employabilityService" />
          <label>Paid Apprenticeship/Internship</label>
          <Field type="checkbox" name="internService" />
          <label>Volunteering</label>
          <Field type="checkbox" name="volunteeringService" />
          <label>Mental health support</label>
          <Field type="checkbox" name="mentalService" />
          <label>Legal advice</label>
          <Field type="checkbox" name="legalService" />
          <label>Other</label>
          <Field type="text" name="otherService" />
          <p>How we work with young people</p>
          <p />
          <label>Referalls</label>
        <Field type="checkbox" name="throughReferrals" />
          <label>Through Partnership with schools</label>
        <Field type="checkbox" name="throughSchools" />
          <label>Young people can come to us directly</label>
        <Field type="checkbox" name="throughDirect" />
          <label>Age group we work with</label>
          {touched.ageGroup && ageGroup && <p>{ageGroup}</p>}
          <p />
          <Field type="text" name="ageGroup" placeholder="ageGroup" />
          <label>Form completed by</label>
          {touched.completedBy && completedBy && <p>{completedBy}</p>}
          <Field type="text" name="completedBy" />
          <button>Submit</button>
        </Form>
      </div>;
};

export default JoinForm;


