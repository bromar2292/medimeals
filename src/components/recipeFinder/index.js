import React from "react";
import css from "./recipeFinder.module.css";
import data from "../../data/data";
import Card from "../card/index";

class recipeSlider extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      recipes: data.recipes,
      recipe: data.recipes[0]
    };
  }

  nextRecipe = () => {
    const newIndex = this.data.recipe.index + 1;
    this.setState({
      recipe: this.data.recipes[newIndex]
    });
  };

  previousRecipe = () => {
    const newIndex = this.data.recipe.index - 1;
    this.setState({
      recipe: this.data.recipes[newIndex]
    });
  };

  render() {
    const { recipes, recipe } = this.state;
    return (
      <>
        <div className={css.App}>
          <button
            onClick={() => this.nextRecipe()}
            disabled={recipe.index === data.recipes.length - 1}
          >
            Next
          </button>
          <button
            onClick={() => this.previousRecipe()}
            disabled={recipe.index === 0}
          >
            Prev
          </button>

          <div className={css.page}>
            <section>
              <img src={recipe.image} className={css.applogo} alt="logo" />
              <h1>Image slideshow React tutorial.</h1>
            </section>

            <div className={css.col}>
              <div className={css.cardSlider}>
                {recipes.map(recipe => (
                  <Card key={recipe.name} recipe={recipe} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}
export default recipeSlider;
