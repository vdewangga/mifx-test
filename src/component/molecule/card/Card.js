import { Paper } from '@mui/material';
import React from 'react';

import { CardBody, CardImage } from '../../atom';

const Card = ({ image, name, rating, price, onClick }) => (
  <Paper elevation={0} sx={{ boxShadow: 'rgb(0 0 0 / 12%) 0px 1px 6px 0px', '&:hover': { cursor: 'pointer' } }} onClick={() => { onClick?.() }}>
    <CardImage image={image} />
    <CardBody name={name} price={price} rating={rating} />
  </Paper>
)

export default Card;