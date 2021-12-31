import { Carousel } from "react-bootstrap";




function Home() {
  return (
    <div >
     <Carousel fade>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="first.jpg"
      alt="First slide"
    />
    <Carousel.Caption>
      <h3>Norway</h3>
      <p>Europe</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="second.jpg"
      alt="Second slide"
    />

    <Carousel.Caption>
      <h3>switzerland</h3>
      <p>Europe</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="third.jpg"
      alt="Third slide"
    />

    <Carousel.Caption>
      <h3>Argentina</h3>
      <p>South America</p>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>
    </div>
  );
}

export default Home;
