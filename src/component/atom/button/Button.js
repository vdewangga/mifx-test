import { Button as BaseButton } from '@mui/material';
import React from 'react';
import { mergeDeep } from '../../../utils/deepMerge';


const Button = ({ children, sx, ...props }) => (
  <BaseButton
    variant='contained'
    sx={mergeDeep({
      fontSize: '12px',
      padding: '8px',
      width: '100%',
      boxShadow: 'none',
      "&:hover": {
        boxShadow: 'none',
      }
    }, sx)}
    {...props}
  >
    {children}
  </BaseButton>
)

export default Button;