import React, { useState } from 'react';
import { styled } from 'styled-components';


const Wrapper = styled.div`
margin: auto;
width : 90%;
height : 415px;
display : flex;
@media (max-width: 400px){
    width: 95%;
    height: 255px;
    
}

`
const CarouselInner = styled.div`
  width: 100%;
  border-radius: 25px;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  position: relative;
  @media (max-width: 400px){
    border-radius: 15px;
    height: 255px;
}
`;

const Next = styled.span`
  color: white;
  font-size: 5em;
  font-weight: 1000;
  cursor: pointer;
  position: absolute;
  right: 20px; 
  transform: translateY(-50%); 
  @media (max-width: 400px){
    font-size: 2em;
}
`;

const Prev = styled.span`
  color: white;
  font-size: 5em;
  font-weight: 1000;
  cursor: pointer;
  position: absolute;
  left: 20px; 
  transform: translateY(-50%); 
  @media (max-width: 400px){
    font-size: 2em;
}
`;

const PrevNext = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  @media (max-width: 400px){
    font-size: 1em;
}
`;

const Count = styled.span`
  color: white;
  font-size: 1.2em;
  position: absolute;
  bottom: 10px; 
  left: 50%;
  transform: translateX(-50%); 
  @media (max-width: 400px){
    display: none;
    
  }
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
          {hideNavigation &&
            <Prev onClick={goToPrevSlide}>
              <svg width="48" height="81" viewBox="0 0 48 81" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M47.04 8.01228L39.96 0.93228L0.359961 40.5323L39.96 80.1323L47.04 73.0523L14.52 40.5323L47.04 8.01228Z" fill="white" />
              </svg>
            </Prev>}
          {hideNavigation &&
            <Next onClick={goToNextSlide}>
              <svg width="48" height="81" viewBox="0 0 48 81" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M0.959961 72.9877L8.03996 80.0677L47.64 40.4677L8.03996 0.867676L0.959961 7.94768L33.48 40.4677L0.959961 72.9877Z" fill="white" />
              </svg>
            </Next>}
        </PrevNext>
        {hideNavigation && <Count>{currentIndex + 1}/{arrayImage.length}</Count>}
      </CarouselInner>
    </Wrapper>
  );
}

export default Carousel;