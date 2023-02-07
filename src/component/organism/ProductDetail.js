import { Box } from '@mui/material';
import React from 'react';

import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { Button } from '../atom';
import { ItemDescription } from '../molecule';

const ProductDetail = ({ data, onClickAddToChart, onClickBuy, id }) => (
  <Box sx={{ height: '100%', width: '50%' }}>
    <ItemDescription
      name={data?.[id].name}
      reviewCount={data?.[id].reviewCount}
      price={data?.[id].price}
      rating={data?.[id].rating}
    />
    <Box sx={{ display: 'flex', gap: '20px' }}>
      <Button
        variant='contained'
        sx={{
          background: '#f7c244',
          "&:hover": {
            background: '#f7c244',
          }
        }}
        onClick={() => { onClickAddToChart?.() }}
      ><ShoppingCartIcon sx={{ height: '14px' }} />Add To Cart</Button>
      <Button
        variant='contained'
        sx={{
          background: '#4da85d',
          "&:hover": {
            background: '#4da85d',
          }
        }}
        onClick={() => { onClickBuy?.() }}
      >
        Buy Now
      </Button>
    </Box>
  </Box>
)

export default ProductDetail;