import React from "react";

import Nav from "../MenuBar/index";
import recipe from "./salmon.jpg";
import { NavLink } from "react-router-dom";

import Owl from "../Owl/index";

// ....

// className "owl-theme" is optional

const Disease = () => (
  <>
    <Nav />
    <div className="disease-page-container">
      {" "}
      <h1 className="disease-title"> Immune system</h1>
      <div className="disease-info"> information on the immune system</div>
      <div className="disease-vitamins">
        <ul>
          <li>viamtin c</li>
          <li>viamtin d</li>
          <li>zinc</li>
        </ul>
        <ul>
          <li>viamtin c</li>
          <li>viamtin d</li>
          <li>zinc</li>
        </ul>
      </div>
      <NavLink to="/recipe">
        <img className="recipe-slider" src={recipe} alt="recipe" />
      </NavLink>
      <Owl className="owl-theme" loop margin={10} img={recipe}>
        <div class="item">
          <h4>1</h4>
        </div>
        <div class="item">
          <h4>2</h4>
        </div>
        <div class="item">
          <h4>3</h4>
        </div>
        <div class="item">
          <h4>4</h4>
        </div>
        <div class="item">
          <h4>5</h4>
        </div>
        <div class="item">
          <h4>6</h4>
        </div>
        <div class="item">
          <h4>7</h4>
        </div>
        <div class="item">
          <h4>8</h4>
        </div>
        <div class="item">
          <h4>9</h4>
        </div>
        <div class="item">
          <h4>10</h4>
        </div>
        <div class="item">
          <h4>11</h4>
        </div>
        <div class="item">
          <h4>12</h4>
        </div>
      </Owl>
      ;
    </div>
  </>
);
export default Disease;
