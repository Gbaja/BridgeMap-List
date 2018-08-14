import React from "react";
import { shallow } from "enzyme";
import axios from "axios";

import OrganisationsContainer from "./OrganisationsContainer";
import { fetchOrganisations } from "../requests/airtable";

jest.mock("axios", () => {
  const exampleData = [
    {
      "Name of Organisation": "Founders & Coders",
      "Services Provided to young people": [""],
      "Type of Organisation": "Social enterprise/Not for Profit",
      logo:
        "https://res.cloudinary.com/fatimat/image/upload/v1532535318/obwv3moac1egmkcykifj.png"
    },
    {
      "Name of Organisation": "Founders & Coders",
      "Services Provided to young people": [""],
      "Type of Organisation": "Social enterprise/Not for Profit",
      logo:
        "https://res.cloudinary.com/fatimat/image/upload/v1532535318/obwv3moac1egmkcykifj.png"
    }
  ];

  return {
    get: jest.fn(() => Promise.resolve(exampleData))
  };
});

describe("organisations test", () => {
  it("Updates states", () => {
    const wrapper = shallow(<OrganisationsContainer />, {
      disableLifecycleMethods: true
    });

    expect(wrapper.state().isLoading).toBeFalsy();

    wrapper.instance().componentDidMount();

    expect(wrapper.state().isLoading).toBeTruthy();
    expect(axios.get).toHaveBeenCalled();
    expect(axios.get).toHaveBeenCalledWith(`/api/all_organisations`);
    expect(wrapper.state()).toHaveProperty("data");
  });
});
