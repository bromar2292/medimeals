import React from "react";

import { NavLink } from "react-router-dom";
import logo from "./logo.png";
import menu from "./hamburger.png";
class MenuBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selection: 0,
      isActive: true,
    };
  }
  toggleButton = () => {
    this.setState({ isActive: !this.state.isActive });
    console.log(this.state.isActive);
  };
  false = () => {
    this.setState({ isActive: true });
  };
  render() {
    return (
      <>
        <div className="menuContainer">
          <div className="logoContainer">
            <NavLink to="/">
              <img className="logo" src={logo} alt="logo" />
            </NavLink>
          </div>
          <div className="navContainer">
            <div className="navButtons"> Medimeals for</div>
            <div className="navButtons"> About</div>
            <div className="navButtons"> Saved Medimeals</div>
          </div>
          <img
            className="hamburger"
            isActive={this.state.isActive}
            src={menu}
            alt="hamburger"
            onClick={this.toggleButton}
          />
        </div>
        <div className={`${this.state.isActive}`}>
          <a href="/" style={{ textDecoration: "none" }} onClick={this.false}>
            <div onClick={this.false} className="hamburger-menu">
              {" "}
              Home
            </div>
          </a>
          <a href="/immune" style={{ textDecoration: "none" }}>
            <div className="hamburger-menu" onClick={this.false}>
              {" "}
              Immune System
            </div>
          </a>
          <a href="/about" style={{ textDecoration: "none" }}>
            <div onClick={this.false} className="hamburger-menu">
              {" "}
              About
            </div>
          </a>
        </div>
      </>
    );
  }
}
export default MenuBar;
