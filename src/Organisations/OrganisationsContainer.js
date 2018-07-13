import React, {Component, Fragment} from "react";
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
            fetchFunc(this.props.organisationName || this.props.match.params.name)
              .then(data =>
                this.setState({ data, isLoading: false })
              )
              .catch(error =>
                this.setState({ error, isLoading: false })
              );
        }

        render() {
            if (this.state.error) {
                return <Fragment>
                    <Header />
                    <p>{this.state.error.message}</p>
                </Fragment>
            }

            if (this.state.isLoading) {
                return <Fragment>
                    <Header />
                    <div className="loading-spinner"></div>
                    <p className="loading-text">Loading...</p>
                </Fragment>
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