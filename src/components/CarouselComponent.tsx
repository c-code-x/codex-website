'use client'; // Ensure this component is treated as a client component

import React from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css"; // Import base slick styles
import "slick-carousel/slick/slick-theme.css"; // Import slick theme styles
import styled from 'styled-components'; // Import styled-components

// Styled component for the carousel container with responsive width
const CarouselContainer = styled.div`
  width: 60%;
  margin: 0 auto; // Center the container

  @media (max-width: 768px) {
    width: 80%; // Use 80% width on screens 768px or less
  }
`;

// Styled component for the overall layout
const CarouselWrapper = styled.div`
  text-align: center;
  margin: 20px 0;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

// Styled component for the image within the slider
const CarouselImage = styled.img`
  width: 100%;
  height: auto;
  border-radius: 10px;
`;

// Styled component for the heading with dynamic font size
const CarouselHeading = styled.h1`
  font-size: ${props => props.fontSize || '2em'}; // Default to 2em if no fontSize prop is provided

    @media (max-width: 768px) {
    font-size: ${props => props.fontSize || '1.5em'};
  }
`;

const CarouselComponent = ({ fontSize }) => {
  const images = [
    '/CarouselImage/mem1.png',
    '/CarouselImage/mem2.png'
    // Add more images as needed
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: true
  };

  return (
    <CarouselWrapper>
      <CarouselHeading fontSize={fontSize}>Memories</CarouselHeading> {/* Use the styled component for the heading */}
      <CarouselContainer>
        <Slider {...settings}>
          {images.map((image, index) => (
            <div key={index}>
              <CarouselImage src={image} alt={`carousel-${index}`} />
            </div>
          ))}
        </Slider>
      </CarouselContainer>
    </CarouselWrapper>
  );
};

export default CarouselComponent;
