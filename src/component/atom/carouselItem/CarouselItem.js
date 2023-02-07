import { Box } from '@mui/material';
import React from 'react';

const CarouselItem = (props) => <Box
  sx={{
    height: '400px',
    width: '400px',
    borderRadius: '16px',
  }}
>
  <img
    alt="placeholder"
    src={props.item}
    style={{
      maxWidth: '400px',
      overflowClipMargin: 'content-box',
      overflow: 'clip',
      borderRadius: '16px',
    }}
    onError={({ currentTarget }) => {
      currentTarget.onerror = null; // prevents looping
      currentTarget.src = "https://via.placeholder.com/400";
    }}
  />
</Box>

export default CarouselItem;