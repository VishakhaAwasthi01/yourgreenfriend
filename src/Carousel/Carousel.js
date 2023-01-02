import React from "react";
import Style from "./Carousel.module.css";
import SliderOne from "../assets/images/CarouselOne.jpg";
import SliderTwo from "../assets/images/CarouselTwo.jpg";
import SliderThree from "../assets/images/CarouselThree.jpg";

const images = [
  { imgs: SliderOne, txt: "Hello" },
  { imgs: SliderTwo, txt: "Hiii" },
  { imgs: SliderThree, txt: "whyyy" },
];
const delay = 2500;

function Carousel() {
  const [index, setIndex] = React.useState(0);
  const timeoutRef = React.useRef(null);

  function resetTimeout() {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
  }

  React.useEffect(() => {
    resetTimeout();
    timeoutRef.current = setTimeout(
      () =>
        setIndex((prevIndex) =>
          prevIndex === images.length - 1 ? 0 : prevIndex + 1
        ),
      delay
    );

    return () => {
      resetTimeout();
    };
  }, [index]);
  console.log(images[index].txt, "checking");
  return (
    <div className={Style.slideshow}>
      <div
        className={Style.slideshowSlider}
        style={{ transform: `translate3d(${-index * 100}%, 0, 0)` }}
      >
        <div>
          <img src={SliderOne} alt="plants" style={{ width: "100%" }} />
          <div className={Style.bottomleft}>Hello</div>
        </div>

        <div>
          <img src={SliderTwo} alt="plants" style={{ width: "100%" }} />
          <div className={Style.bottomleft}>Hi</div>
        </div>
        <div>
          <img src={SliderThree} alt="plants" style={{ width: "100%" }} />
          <div className={Style.bottomleft}>Hello</div>
        </div>
      </div>

      <div className={Style.slideshowDots}>
        {images.map((_, idx) => (
          <div
            key={idx}
            className={`${Style.slideshowDot}${index === idx ? " active" : ""}`}
            onClick={() => {
              setIndex(idx);
            }}
          ></div>
        ))}
      </div>
    </div>
  );
}
export default Carousel;
