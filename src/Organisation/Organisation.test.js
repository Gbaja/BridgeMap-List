import React from "react";
import { shallow } from "enzyme";
import renderer from "react-test-renderer";

import PageOrganisation from "./PageOrganisation";
import Organisation from "./Organisation";
import FetchingDataHOC from "./FetchingDataHOC";
import fetchingDataHOC from "./FetchingDataHOC";

describe("Page organisation component", () => {
  it("renders without crashing", () => {
    shallow(
      <div>
        <Organisation organisationName="Futureversity" />
      </div>
    );
  });
  it("has a children that has organisationName prop", () => {
    const wrapper = shallow(
      <div>
        <Organisation organisationName="Futureversity" />
      </div>
    );
    expect(
      wrapper.props().children.props.hasOwnProperty("organisationName")
    ).toEqual(true);
  });
});

describe("Fetching data HOC component", () => {
  let WrapperComponent;

  beforeEach(() => {
    class MockComponent extends React.Component {
      render() {
        return <div>Component</div>;
      }
    }
    const mockFetchData = jest.fn();
    mockFetchData.mockReturnValue(Promise.resolve());
    WrapperComponent = fetchingDataHOC(mockFetchData)(MockComponent);
  });

  it("withHoc should render without crashing", () => {
    const wrapper = renderer.create(
      <WrapperComponent organisationName="Futureversity" />
    );

    console.log(wrapper);
    expect(wrapper.toJSON()).toMatchSnapshot();
  });
});
