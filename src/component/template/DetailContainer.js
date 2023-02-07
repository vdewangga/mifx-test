import { Box, Paper } from '@mui/material';
import React from 'react';


const DetailContainer = ({ children }) => (
  <Box sx={{ padding: '16px', display: 'flex', justifyContent: 'center' }}>
    <Paper elevation={3} sx={{ padding: '12px', width: '800px' }}>
      <Box sx={{ display: "flex", gap: '32px' }}>
        {children}
      </Box>
    </Paper>
  </Box>
)

export default DetailContainer;