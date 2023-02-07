import { Box, useTheme } from '@mui/material';
import React from 'react';


const IndicatorIcon = (props) => {
  const { palette } = useTheme();
  return (
    <Box
      sx={{
        border: `2px solid ${props.active ? palette.success.light : '#fff'}`,
        padding: '2px',
        borderRadius: '4px',
        height: '40px',
        width: '40px',
        boxSizing: 'border-box',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        marginRight: '2px'
      }}>
      <Box
        sx={{
          height: '40px',
          width: '40px',
          borderRadius: '4px',
        }}
      >
        <img
          alt="placeholder"
          src={props.item}
          style={{
            maxWidth: '40px',
            overflowClipMargin: 'content-box',
            overflow: 'clip',
            borderRadius: '4px',
          }}
          onError={({ currentTarget }) => {
            currentTarget.onerror = null; // prevents looping
            currentTarget.src = "https://via.placeholder.com/400";
          }}
        />
      </Box>
    </Box>
  )
}

export default IndicatorIcon;