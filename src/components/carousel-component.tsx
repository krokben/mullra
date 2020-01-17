import * as React from "react";
import styled from "styled-components";

const Carousel = styled.div`
  position: relative;
  width: 100vw;
  height: 200px;
  background: #dedede;
  overflow: hidden;
`;

const Track = styled.div`
  display: inline-flex;
  position: absolute;
  top: 50%;
  left: 20px;
  transform: translateY(-50%);
  touch-action: none;
`;

const Card = styled.div`
  width: 150px;
  height: 150px;
  margin-right: 20px;
  background: #fff;
  border-radius: 5px;
`;

const CarouselComponent = () => (
  <Carousel>
    <Track>
      {[...Array(10)].map((card, index) => (
        <Card key={`carousel-component-card-${index}`}></Card>
      ))}
    </Track>
  </Carousel>
);

export default CarouselComponent;
