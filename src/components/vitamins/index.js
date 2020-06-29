import React from "react";

import { NavLink } from "react-router-dom";

import Nav from "../MenuBar/index";

const Vitamins = () => (
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
          <li>zincs</li>
        </ul>
      </div>
    </div>
  </>
);
export default Vitamins;
