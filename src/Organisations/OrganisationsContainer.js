import React, {Component} from "react";

import fetchOrganisations from "../requests/airtable";
import Organisations from "./Organisations";

class OrganisationsContainer extends Component {
    state = {
        organisations: [],
        loading: false
    }
    componentDidMount(){
        this.setState({loading: true})
        fetchOrganisations()
            .then(organisations=>{
                this.setState({organisations, loading: false})
            })

    }

    render(){
        const {loading, organisations} = this.state;
        console.log(organisations)
        if(loading){
            return <p>Loading...</p>
        }
        return (
            <div>
                
                <Organisations organisations={organisations}/>
            </div>
        )
    }
}

export default OrganisationsContainer