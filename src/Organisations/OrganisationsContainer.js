import React, {Component} from "react";
import {withRouter} from "react-router-dom"

import Header from "../StaticPages/Header"

const fetchingDataHOC = (fetchFunc) => (Comp) => {
    return class extends Component {
        state = {
            data: [],
            isLoading: false,
            error: null,
        };

        componentDidMount() {
            this.setState({ isLoading: true });
            fetchFunc()
                .then(data => this.setState({ data, isLoading: false }))
                .catch(error => this.setState({ error, isLoading: false }));
        }

        render() {
            if (this.state.error) {
                return <div>
                    <Header />
                    <p>{this.state.error.message}</p>
                </div>
            }

            if (this.state.isLoading) {
                return <div>
                    <Header />
                    <p>Loading...</p>
                </div>
            }
            return (
                <div>
            <Comp {...this.props} {...this.state} />
            </div>
            )
        }
    }
}

export default fetchingDataHOC