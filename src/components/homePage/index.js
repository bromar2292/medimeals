import React from "react";
import css from "./homePage.module.css";
import MenuBar from "../MenuBar/index";
import RecipeFinder from "../recipeFinder";

class homePage extends React.Component {
  render() {
    return (
      <>
        <MenuBar />
        <div className="">
          <h1>Home page </h1>
          <p className=""> food is better than medicine ...</p>
        </div>
        {/* <RecipeFinder /> */}
      </>
    );
  }
}
export default homePage;
