import React, { Component } from "react";

import Navigation from "./Navigation/Navigation";
import SideDrawer from "./SideDrawer/SideDrawer";

class Header extends Component {
  state = {
    isSideDrawerOpen: false
  };

  drawerToggleClickHandler = () => {
    this.setState(prevState => {
      return { isSideDrawerOpen: !prevState.isSideDrawerOpen };
    });
  };

  closeSideDrawerHandler = () => {
    this.setState({ isSideDrawerOpen: false });
  };

  render() {
    return (
      <div style={{ height: "100%" }}>
        <Navigation drawerToggleClickHandler={this.drawerToggleClickHandler} />
        <SideDrawer
          isSideDrawerOpen={this.state.isSideDrawerOpen}
          closeSideDrawerHandler={this.closeSideDrawerHandler}
        />
      </div>
    );
  }
}

export default Header;
