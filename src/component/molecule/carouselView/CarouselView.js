import { Box } from '@mui/material';
import React from 'react';
import Carousel from 'react-material-ui-carousel';

import { CarouselItem, IndicatorIcon, NavButton } from '../../atom';


const CarouselView = ({ isLoading, images }) => {
  const [slide, setSlide] = React.useState(1)

  return (
    <Box sx={{ width: '400px' }}>
      <Box sx={{ width: '400px' }}>
        {!isLoading && <Carousel
          onChange={(now, _previous) => setSlide(now + 1)}
          animation="fade"
          navButtonsAlwaysVisible
          sx={{
            borderRadius: '16px',
            background: '#fff'
          }}
          IndicatorIcon={
            images?.map((item, i) => <IndicatorIcon active={slide === i + 1} item={item} />)
          }
          navButtonsWrapperProps={{
            style: { height: 0 }
          }}
          NavButton={({ onClick, className, next, prev }) => <NavButton onClick={onClick} className={className} next={next} prev={prev} slide={slide} images={images} />}
        >
          {
            images?.map((item, i) => <CarouselItem key={item} item={item} />)
          }
        </Carousel>}
      </Box>
    </Box>
  )
}

export default CarouselView;