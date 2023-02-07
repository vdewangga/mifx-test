import { Box } from '@mui/material';
import React from 'react';

import { ItemImage, ItemInfo } from '../../atom';

const Item = ({ name, price, qty, images }) => (
  <Box sx={{ width: '100%', background: '#fff', height: '80px', padding: '8px', display: 'flex', boxSizing: 'border-box', gap: '16px', boxShadow: 'rgb(0 0 0 / 12%) 0px 1px 6px 0px', borderRadius: '4px' }}>
    <ItemImage images={images} />
    <ItemInfo name={name} price={price} qty={qty} />
  </Box>
)

export default Item;