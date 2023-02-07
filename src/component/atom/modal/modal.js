import { Modal as BaseModal } from '@mui/material';
import React from 'react';


const Modal = ({ open, onClose, children }) => (
  <BaseModal
    open={open}
    onClose={() => { onClose?.() }}
    sx={{
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    }}
  >
    {children}
  </BaseModal>
)

export default Modal;