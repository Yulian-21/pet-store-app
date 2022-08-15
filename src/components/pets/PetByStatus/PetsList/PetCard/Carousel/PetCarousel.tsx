import { Box, Button, Container, IconButton, useTheme } from '@mui/material';
import React, { useState } from 'react'
import { autoPlay } from 'react-swipeable-views-utils';
import Carousel from 'react-material-ui-carousel';

const PetCarousel = ({ photoUrls }: { photoUrls: string[] }) => {
  const theme = useTheme();
  const [activeStep, setActiveStep] = useState(0);
  const maxSteps = photoUrls.length;

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleStepChange = (step: number) => {
    setActiveStep(step);
  };
  return (
    <Container sx={{ maxWidth: 50, maxHeight: 100, flexGrow: 1 }}>
      <Carousel
        index={activeStep}
        onChange={() => handleStepChange}
        interval={4000}
        animation="fade"
        indicators={false}
        stopAutoPlayOnHover
        swipe
        sx={{

          height: '100px',
          width: '200px',
          border: '1px solid black',
          margin: '10px',
          borderRadius: '8px',
        }}
      >
        {photoUrls.map((item, i) => (
          <img alt='NoPhoto' src={item} />
        ))}
      </Carousel>
    </Container>
  )
}

export default PetCarousel
