import React, { useState } from 'react';
import './carousel.scss';

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
    <div className='wrapper-carousel'>
      <div className='carousel-inner' style={{ backgroundImage: `url(${arrayImage[currentIndex]})` }}>
        <div className='prev-next' >
          {hideNavigation &&
            <span className='prev' onClick={goToPrevSlide}>
              <svg width="48" height="81" viewBox="0 0 48 81" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M47.04 8.01228L39.96 0.93228L0.359961 40.5323L39.96 80.1323L47.04 73.0523L14.52 40.5323L47.04 8.01228Z" fill="white" />
              </svg>
            </span>}
          {hideNavigation &&
            <span className='next' onClick={goToNextSlide}>
              <svg width="48" height="81" viewBox="0 0 48 81" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M0.959961 72.9877L8.03996 80.0677L47.64 40.4677L8.03996 0.867676L0.959961 7.94768L33.48 40.4677L0.959961 72.9877Z" fill="white" />
              </svg>
            </span>}
        </div>
        {hideNavigation && <span className='count'>{currentIndex + 1}/{arrayImage.length}</span>}
      </div>
    </div>
  );
}

export default Carousel;