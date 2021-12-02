import React, { useState } from 'react';
import { SliderData } from './SliderData';
import SlideDescription from './SlideDescription';
import ArrowCircleLeftIcon from '@mui/icons-material/ArrowCircleLeft';
import ArrowCircleRightIcon from '@mui/icons-material/ArrowCircleRight';
// import { FaArrowAltCircleRight, FaArrowAltCircleLeft } from 'react-icons/fa';

const ImageSlider = ({ slides }) => {
  const [current, setCurrent] = useState(0);
  const length = slides.length;

  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  };

  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  };

  if (!Array.isArray(slides) || slides.length <= 0) {
    return null;
  }

  return (
    <div id="my-work">
    <section className='slider'>
      <ArrowCircleLeftIcon className='left-arrow' onClick={prevSlide} />
      <ArrowCircleRightIcon className='right-arrow' onClick={nextSlide} />
      {SliderData.map((slide, index) => {
        return (
          <div
            className={index === current ? 'slide active' : 'slide'}
            key={index}
          >
            {index === current && (
              <img src={slide.image} alt='project snap' className='image' />
            )}
          </div>
        );
      })}
    </section>
    <section>
      <SlideDescription 
      title = {SliderData[current].title} 
      info={SliderData[current].description} 
      link={SliderData[current].link}/>
    </section>
    </div>
  );
};

export default ImageSlider;
