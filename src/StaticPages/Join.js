import React, {Component} from "react"

import Header from "./Header";

class Join extends Component{
    render(){
        return (
        <div>
            <Header/>
            <iframe 
                ref="iframe-form"
                class="airtable-embed" src="https://airtable.com/embed/shrNnAGLdnXcjPTBm?backgroundColor=red" 
                width="100%" 
                height="533" 
                style={{"background": "transparent", "border": "1px solid #ccc"}} 
                title="Form to join the directory" 
                onLoad={()=><p>Loading form</p>}>
                </iframe>
         </div>
        )
    }
}

export default Join;