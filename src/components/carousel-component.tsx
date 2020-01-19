import * as React from "react";
import { useState, useRef } from "react";
import styled from "styled-components";

export default function() {
  const [startPosition, setStartPosition] = useState(0);
  const [isMoving, setIsMoving] = useState(false);
  const [transform, setTransform] = useState(0);
  const [lastPageX, setLastPageX] = useState(0);
  const [translateX, setTranslateX] = useState(0);

  const track = useRef(null);

  const gestureStart = event => {
    setStartPosition(event.pageX);
    setIsMoving(true);

    const transformMatrix = window
      .getComputedStyle(track.current)
      .getPropertyValue("transform");

    if (transformMatrix !== "none") {
      setTransform(Number(transformMatrix.split(",")[4].trim()));
    }
  };

  const gestureMove = event => {
    if (isMoving) {
      const currentPosition = event.pageX;
      const diff = currentPosition - startPosition;

      if (
        (currentPosition - lastPageX > 0 && transform + diff > 0) ||
        Math.abs(transform + diff) > track.current.offsetWidth * 0.566875 // offsetWidth 3200 * 0.566875 = 1386
      ) {
        // prevent drag outside of track width
        return;
      }

      setTranslateX(transform + diff);
      setLastPageX(event.pageX);
    }
  };

  const gestureEnd = () => setIsMoving(false);

  const CarouselComponent = styled.div`
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
    transform: translate(${translateX}px) translateY(-50%);
    touch-action: none;
  `;

  const Card = styled.div`
    width: 150px;
    height: 150px;
    margin-right: 20px;
    background: #fff;
    border-radius: 5px;
  `;

  return (
    <CarouselComponent
      onTouchDown={gestureStart}
      onTouchMove={gestureMove}
      onTouchUp={gestureEnd}
      onMouseDown={gestureStart}
      onMouseMove={gestureMove}
      onMouseUp={gestureEnd}
    >
      <Track ref={track}>
        {[...Array(10)].map((card, index) => (
          <Card key={`carousel-component-card-${index}`}></Card>
        ))}
      </Track>
    </CarouselComponent>
  );
}
