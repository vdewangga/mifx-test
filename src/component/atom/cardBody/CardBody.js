import StarIcon from '@mui/icons-material/Star';
import { Box, Typography } from '@mui/material';
import React from 'react';


const CardBody = ({ name, price, rating }) => (
  <Box sx={{ padding: '8px', width: '175px', boxSizing: 'border-box' }}>
    <Typography fontSize="13.5px" component="p">{name}</Typography>
    <Typography fontSize="14px" fontWeight="700" component="p">{price}</Typography>
    <Box sx={{ display: 'flex', alignItems: 'center' }}>
      <StarIcon fontSize='16px' sx={{ color: '#fcc404' }} />
      <Typography fontSize="12px" component="p" textOverflow="ellipsis">({rating})</Typography>
    </Box>
  </Box>

)

export default CardBody;