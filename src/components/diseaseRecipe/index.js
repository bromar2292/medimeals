import React, { useState } from "react";

import recipe from "../immune/salmon.jpg";
import Navbar from "../MenuBar/index";
import Tabar from "../tabar";

const Recipe = () => (
  <>
    <Navbar className="recipe-nav" />
    <div>
      <img className="recipe-page-img" src={recipe} alt="recipe" />
    </div>
    <h2 className="recipe-title">Healthy dish</h2>
    <div className="recipe-text">
      <Tabar />
    </div>
  </>
);
export default Recipe;
