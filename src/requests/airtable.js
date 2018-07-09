import axios from "axios"

export const fetchOrganisations = () =>{
    return axios.get("/api/all_organisations")
        .then(response=>{
            return response.data
        }).catch(err=>{
            console.log(err)
        })
}

export const fetchOrganisation = (name) => {
    return axios.get(`/api/one_organisation`, 
    { params: { name } } )
        .then(response => {
            return response.data
        }).catch(err => {
            console.log(err)
        })
}
