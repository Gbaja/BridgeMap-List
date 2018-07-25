import React, { Component } from "react";

import Toolbar from "./Navigation/Navigation";
import SideDrawer from "./SideDrawer/SideDrawer";

class Header extends Component {
  state = {
    sideDrawerOpen: false
  };
  drawerToggleClickHandler = () => {
    this.setState(prevState => {
      return { sideDrawerOpen: !prevState.sideDrawerOpen };
    });
  };

  backdropClickHandler = () => {
    this.setState({ sideDrawerOpen: false });
  };

  render() {
    return (
      <div style={{ height: "100%" }}>
        <Toolbar drawerClickHandler={this.drawerToggleClickHandler} />
        <SideDrawer
          show={this.state.sideDrawerOpen}
          closeSideDrawer={this.backdropClickHandler}
        />
      </div>
    );
  }
}

export default Header;
