import React from "react";
import ReactDOM from "react-dom";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
const options = {
  items: 4,
};
class Owl extends React.Component {
  render() {
    return (
      <OwlCarousel className="owl-theme" loop margin={10} nav>
        <div class="item">
          <img alt="img1" src={this.props.img} />
        </div>
      </OwlCarousel>
    );
  }
}
export default Owl;
