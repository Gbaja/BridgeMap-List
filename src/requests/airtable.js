import axios from "axios"

const fetchOrganisations = () =>{
    return axios.get("/api/all_organisations")
        .then(response=>{
            return response.data
        }).catch(err=>{
            console.log(err)
        })
}

export default fetchOrganisations