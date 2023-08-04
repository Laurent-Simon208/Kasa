import React, { useState } from 'react';
import { styled } from 'styled-components';


const Wrapper = styled.div`
margin: auto;
width : 90%;
height : 415px;
display : flex;

`
const CarouselInner = styled.div`
  width: 100%;
  border-radius: 25px;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  position: relative;
`;

const Next = styled.span`
  color: white;
  font-size: 5em;
  font-weight: 1000;
  cursor: pointer;
  position: absolute;
  right: 20px; 
  transform: translateY(-50%); 

`;

const Prev = styled.span`
  color: white;
  font-size: 5em;
  font-weight: 1000;
  cursor: pointer;
  position: absolute;
  left: 20px; 
  transform: translateY(-50%); 
`;

const PrevNext = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
`;

const Count = styled.span`
  color: white;
  font-size: 1.2em;
  position: absolute;
  bottom: 10px; 
  left: 50%;
  transform: translateX(-50%); 
`;

function Carousel({ image }) {
  const arrayImage = image.pictures;

  const [currentIndex, setCurrentIndex] = useState(0);

  const goToNextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % arrayImage.length);
  };

  const goToPrevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + arrayImage.length) % arrayImage.length);
  };
  const hideNavigation = arrayImage.length > 1;

  return (
    <Wrapper>
      <CarouselInner style={{ backgroundImage: `url(${arrayImage[currentIndex]})` }}>
        <PrevNext >
          {hideNavigation && <Prev onClick={goToPrevSlide}> &#60; </Prev>}
          {hideNavigation && <Next onClick={goToNextSlide}> &#62; </Next>}
        </PrevNext>
        {hideNavigation && <Count>{currentIndex + 1}/{arrayImage.length}</Count>}
      </CarouselInner>
    </Wrapper>
  );
}

export default Carousel;