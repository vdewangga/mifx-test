import { Box } from '@mui/material';
import React from 'react';

const ListContainer = ({ children }) => (
  <Box
    sx={{
      display: 'flex',
      justifyContent: 'center',
      padding: '80px'
    }}
  >
    <Box
      sx={{
        display: 'flex',
        gap: '20px',
        width: 'calc(195px * 5)',
        flexWrap: 'wrap',
      }}
    >
      {children}
    </Box>
  </Box>
)

export default ListContainer;