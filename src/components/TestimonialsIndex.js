import React from 'react';

import Carousel from 'react-bootstrap/Carousel';

const TestimonialsIndex = () => {
  return (
    <div className="container">
      <h1 className="py-4 w-full text-5xl text-blue-500 font-bold leading-tight">
        Here's what people are saying about us.
      </h1>
      <Carousel
        className="w-full h-64 __gradient rounded-md overflow-hidden"
        interval={3000}
      >
        <Carousel.Item className=""></Carousel.Item>
        <Carousel.Item className=""></Carousel.Item>
        <Carousel.Item className=""></Carousel.Item>
      </Carousel>
    </div>
  );
};

export default TestimonialsIndex;
