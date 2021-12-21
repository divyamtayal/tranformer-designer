import JsonData from "../data/data.json";
import SmoothScroll from "smooth-scroll";
import "../App.css";

export const scroll = new SmoothScroll('a[href*="#"]', {
  speed: 1000,
  speedAsDuration: true,
});

const Guide = () => {
  return (
    <div id="guide" className="container">
      <h2>Tranformers</h2>
    </div>
  );
};

export default Guide;
