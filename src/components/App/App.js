import React from "react";

import "./App.css";
import { Route, Switch } from "react-router-dom";
import recipeSlider from "../recipeFinder";
import homePage from "../homePage/index";
import immune from "../immune/index";
import recipe from "../diseaseRecipe/index";

const App = () => (
  <main>
    <Switch>
      <Route exact path="/" component={homePage} />
      <Route exact path="/immune" component={immune} />
      <Route exact path="/recipe" component={recipe} />

      <Route exact path="/vitamins" component={recipe} />
      {/* <Route exact path="/slider" component={recipeSlider} /> */}
    </Switch>
  </main>
);

export default App;
