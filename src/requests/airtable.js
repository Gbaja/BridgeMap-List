import axios from "axios"

export const fetchOrganisations = () =>{
    return axios.get("/api/all_organisations")
        .then(response=>{
            return response.data
        }).catch(err=>{
            console.log(err)
        })
}

export const fetchOrganisation = () => {
    return axios.get("/api/one_organisation")
        .then(response => {
            return response.data
        }).catch(err => {
            console.log(err)
        })
}
