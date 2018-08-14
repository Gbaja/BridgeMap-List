import React, { Component } from "react";

const fetchingDataHOC = fetchFunc => Comp => {
  return class extends Component {
    state = {
      data: [],
      isLoading: false,
      error: null
    };

    componentDidMount() {
      this.setState({ isLoading: true });
      fetchFunc(this.props.organisationName || this.props.match.params.name)
        .then(data => this.setState({ data, isLoading: false }))
        .catch(error => this.setState({ error, isLoading: false }));
    }

    render() {
      if (this.state.error) {
        this.props.history.push("/server_error");
      }

      return (
        <div>
          <Comp {...this.props} {...this.state} />
        </div>
      );
    }
  };
};

export default fetchingDataHOC;
