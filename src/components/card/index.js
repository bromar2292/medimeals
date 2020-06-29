import React from "react";
import PropTypes from "prop-types";
import css from "./card.module.css";

const Card = ({ recipe }) => {
  const { id, picture, name, ingredients, method, nutrition } = recipe;
  return (
    <>
      <div id={`card-${id}`} className={css.card}>
        <img src={picture} alt={name} />
        <div className={css.content}>
          <div className={css.ingredients}>
            <h5> ingredients</h5>
            <p> {ingredients}</p>
          </div>
          <div className={css.method}>
            <h5> method</h5>
            <p> {method}</p>
          </div>
          <div className={css.nutrition}>
            <h5> nutrition</h5>
            <p> {nutrition}</p>
          </div>
        </div>
      </div>
    </>
  );
};

Card.propTypes = {
  property: PropTypes.object.isRequired
};

export default Card;
