import { Box, Typography } from '@mui/material';
import React from 'react';


const ItemInfo = ({ name, price, qty }) => (
  <Box sx={{ display: "flex", flexDirection: 'column' }}>
    <Typography fontSize="14px" component='p'>{name}</Typography>
    <Typography fontWeight="600" fontSize="14px" component='p'>${price}</Typography>
    <Typography fontSize="14px" component='p'>qty: {qty}</Typography>
  </Box>
)

export default ItemInfo;