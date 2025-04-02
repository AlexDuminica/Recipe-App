import { Carousel, Image } from "react-bootstrap";

export default function CarouselComp() {
  return (
    <Carousel>
      <Carousel.Item>
        <Image
          src="https://upload.wikimedia.org/wikipedia/commons/a/a5/Red_Kitten_01.jpg"
          text="First recipe"
          width={"300px"}
          height={"400px"}
        />
        <Carousel.Caption>
          <h3>some text here</h3>
          <p>Some text description here</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <Image
          src="https://upload.wikimedia.org/wikipedia/commons/a/a5/Red_Kitten_01.jpg"
          width={"300px"}
          height={"400px"}
        />
        <Carousel.Caption>
          <h3>some text here</h3>
          <p>Some text description here</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}
