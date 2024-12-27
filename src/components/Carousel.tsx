import "bootstrap/dist/css/bootstrap.css";
import Carousel from "react-bootstrap/Carousel";
import ImageOne from "../assets/computer.jpg";
import ImageTwo from "../assets/laptop.jpg";
import ImageThree from "../assets/phones.jpg";

export default function () {
  return (
    <div className="container rounded-md">
      <Carousel>
        <Carousel.Item interval={5000}>
          <img
            className="d-block w-[62rem] h-[21rem] rounded-md mx-auto"
            src={ImageOne}
            alt="Image One"
          />
          <Carousel.Caption>
            <h3>Label for first slide</h3>
            <p>Sample Text for Image One</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={5000}>
          <img
            className="d-block w-[62rem] h-[21rem] rounded-md mx-auto"
            src={ImageTwo}
            alt="Image Two"
          />
          <Carousel.Caption>
            <h3>Label for second slide</h3>
            <p>Sample Text for Image Two</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={5000}>
          <img
            className="d-block w-[62rem] h-[21rem]  rounded-md  mx-auto"
            src={ImageThree}
            alt="Image Three"
          />
          <Carousel.Caption>
            <h3>Label for second slide</h3>
            <p>Sample Text for Image Two</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
}
