import { Typography, Box } from '@mui/material';
import React from 'react';
import { useNavigate } from 'react-router-dom';

import { Button } from '../component/atom';

const NotFound = () => {
  const navigate = useNavigate();
  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', height: '100vh', width: '100vw', justifyContent: 'center', alignItems: "center", }}>
      <Typography variant="h3">
        NOT FOUND
      </Typography>
      <Button onClick={() => { navigate('/list') }} sx={{ width: '180px' }}>Back To List</Button>
    </Box >
  )
}
export default NotFound;