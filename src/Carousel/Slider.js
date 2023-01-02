import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import SliderOne from "../assets/images/CarouselOne.jpg";
import SliderTwo from "../assets/images/CarouselTwo.jpg";
import SliderThree from "../assets/images/CarouselThree.jpg";

let buttonCls = {
  backgroundColor: "#154E23",
  top: "50%",
  width: "30%",
  height: "100px",
  position: "absolute",
  bottom: "50%",
  left: "60%",
  right: "20%",
  textAlign: "center",
  color: "white",
  borderRadius: "10px",
  opacity: "0.9",
  border: "none",
  overflow: "none",
};
function Slider() {
  return (
    <Carousel
      autoPlay
      showThumbs={false}
      showStatus={false}
      stopOnHover
      infiniteLoop
    >
      <div>
        <img alt="" src={SliderOne} />
        <button style={buttonCls}>Shop Indoor Plants</button>
      </div>
      <div>
        <img alt="" src={SliderTwo} />
        <button style={buttonCls}>Shop Pots and Planters</button>
      </div>
      <div>
        <img alt="" src={SliderThree} />
        <button style={buttonCls}>Plant Care</button>
      </div>
    </Carousel>
  );
}
export default Slider;
