import Carousel from "react-bootstrap/Carousel";
import "../Hero/HeroComp.css"; // Import the CSS file for custom styles

function HeroComp() {
  return (
    <Carousel
      interval={2000}
      fade={true} // Enable fading animation
      className="custom-carousel" // Apply a custom class for styling
    >
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://billetto.co.uk/blog/wp-content/uploads/2019/04/hanny-naibaho-388579-unsplash-e1554461063517.jpg"
          alt="First slide"
          style={{ height: "100vh" }}
        />
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit grero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://i.ytimg.com/vi/bd-_9YFXu84/maxresdefault.jpg"
          alt="Second slide"
          style={{ height: "100vh" }}
        />

        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://ceylonpages.lk/wp-content/uploads/2022/07/Infinity-Live-at-Nelum-Pokuna.jpg"
          alt="Third slide"
          style={{ height: "100vh" }}
        />

        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default HeroComp;
