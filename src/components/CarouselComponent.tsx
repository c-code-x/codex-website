"use client"; // Ensure this component is treated as a client component

import React from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css"; // Import base slick styles
import "slick-carousel/slick/slick-theme.css"; // Import slick theme styles
import styled from 'styled-components'; // Import styled-components

// Define a type for the props including fontSize and children
interface HeadingProps {
  fontSize?: string;
  children?: React.ReactNode;
}

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
const CarouselImage = styled.img<{ src: string; alt: string }>`
  width: 100%;
  height: auto;
  border-radius: 10px;
`;

// Styled component for the heading with dynamic font size
// Extend styled.h1 with the custom HeadingProps
const CarouselHeading = styled.h1<HeadingProps>`
  font-size: ${props => props.fontSize || '2em'}; // Default to 2em if no fontSize prop is provided
  color: #0f3d4b; // Set the color to #0f3d4b
  margin-top: 20px; // Add spacing above the heading
  margin-bottom: 30px; // Add spacing below the heading

  @media (max-width: 768px) {
    font-size: ${props => props.fontSize || '1.5em'};
  }
` as React.FC<HeadingProps>;

const CarouselComponent = ({ fontSize }: HeadingProps) => {
  const images = [
    '/CarouselImage/DSC_3010.jpg',
    '/CarouselImage/DSC_3229.jpg',
    '/CarouselImage/DSC_3265.jpg',
    '/CarouselImage/hacakathon2.jpg',
    '/CarouselImage/hackathon1.jpg',
    '/CarouselImage/hackathon3.jpg',
    '/CarouselImage/hackathon4.jpg',
    '/CarouselImage/hackathon5.jpg',
    '/CarouselImage/IMG_20240327_181845.jpg'
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
      <CarouselHeading fontSize={fontSize}>Memories</CarouselHeading>
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
