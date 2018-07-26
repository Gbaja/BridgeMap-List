import axios from "axios";

export const fetchServices = () => {
  return axios
    .get("/api/all_services")
    .then(response => {
      return response.data;
    })
    .catch(err => {
      console.log(err);
    });
};

export const fetchWheres = () => {
  return axios
    .get("/api/all_where")
    .then(response => {
      return response.data;
    })
    .catch(err => {
      console.log(err);
    });
};
export const fetchHows = () => {
  return axios
    .get("/api/all_how")
    .then(response => {
      return response.data;
    })
    .catch(err => {
      console.log(err);
    });
};

export const fetchOrganisations = () => {
  return axios
    .get("/api/all_organisations")
    .then(response => {
      return response.data;
    })
    .catch(err => {
      console.log(err);
    });
};

export const fetchOrganisation = name => {
  return axios
    .get(`/api/one_organisation`, { params: { name } })
    .then(response => {
      return response.data;
    })
    .catch(err => {
      console.log(err);
    });
};

export const addOrganisation = data => {
  return axios
    .post(`/api/add_organisation`, data)
    .then(response => {
      return response;
    })
    .catch(err => {
      console.log(err);
    });
};
