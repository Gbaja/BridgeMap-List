import axios from "axios";

export const fetchServices = () => {
  return axios
    .get("/api/all_services")
    .then(response => {
      return response.data;
    })
    .catch(err => {
      console.log("FETCH SERVICES ERROR: ", err.response);
      return err.data;
    });
};

export const fetchWheres = () => {
  return axios
    .get("/api/all_where")
    .then(response => {
      return response.data;
    })
    .catch(err => {
      console.log("FETCH WHERE'S ERROR: ", err.response);
      return err.response;
    });
};
export const fetchHows = () => {
  return axios
    .get("/api/all_how")
    .then(response => {
      return response.data;
    })
    .catch(err => {
      console.log("FETCH HOW'S ERROR: ", err.response);
      return err.response;
    });
};

export const fetchOrganisations = () => {
  return axios
    .get("/api/all_organisations")
    .then(response => {
      return response.data;
    })
    .catch(err => {
      console.log("FETCH ORGANISATIONS ERROR: ", err.response);
      return err.response;
    });
};

export const fetchOrganisation = name => {
  return axios
    .get(`/api/one_organisation`, { params: { name } })
    .then(response => {
      return response.data;
    })
    .catch(err => {
      console.log("FETCH ORGANISATION ERROR: ", err.response);
      return err.response;
    });
};

export const addOrganisation = data => {
  return axios
    .post(`/api/add_organisation`, data)
    .then(response => {
      return response;
    })
    .catch(err => {
      if (err.response.status === 422) {
        return err.response;
      } else {
        console.log("ADD ORGANISATION ERROR: ", err.response);
        return err.response;
      }
    });
};

export const findOrganisations = data => {
  return axios
    .post("/api/find_organisations", data)
    .then(response => {
      return response;
    })
    .catch(err => {
      console.log("FIND ORGANISATIONS ERROR: ", err.response);
      return err.response;
    });
};
