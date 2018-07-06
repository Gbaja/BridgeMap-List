import React, {Component} from "react";

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
            return (
                <div>
            <Comp {...this.props} {...this.state} />
            </div>
            )
        }
    }
}

export default fetchingDataHOC