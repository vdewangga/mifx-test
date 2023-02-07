import { Box, Rating, Typography, useTheme, Divider } from '@mui/material';
import React from 'react';

const ItemDescription = ({ name, reviewCount, price, rating }) => {
  const { palette } = useTheme();
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        gap: '8px',
        paddingY: '32px',
      }}
    >
      <Typography color={palette.error.light} fontSize="12px" >SALE</Typography>
      <Typography fontSize="18px" fontWeight={700}>{name}</Typography>
      <Box sx={{ display: 'flex' }}>
        <Rating
          key={rating}
          name="rating"
          value={rating}
          disabled
        />
        <Typography color="#64748B" fontSize="12px">({reviewCount} Reviewer)</Typography>
      </Box>
      <Typography fontSize="22px" fontWeight={700} >{price}</Typography>
      <Divider />
    </Box>
  )
}

export default ItemDescription;