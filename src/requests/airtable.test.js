import axios from "axios";
import MockAdapter from "axios-mock-adapter";

import { fetchServices } from "./airtable";

const mockAxios = new MockAdapter(axios);

describe("Testing airtable request functions", () => {
  it("fetchServices", async () => {
    mockAxios.onGet("/api/all_services").reply(200, [{ Name: "Referrals" }]);
    const data = await fetchServices().then(response => {
      return response;
    });
    expect(data).toEqual([{ Name: "Referrals" }]);
  });
});
