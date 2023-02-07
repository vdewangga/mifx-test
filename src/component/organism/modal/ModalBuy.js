import { Box, Typography } from '@mui/material';
import React from 'react';

import { Button, Modal } from '../../atom';
import { Item } from '../../molecule';

const ModalBuy = ({ cartItem, data, open, onClose, onBuy }) => {

  const totalPrice = React.useMemo(() => {
    let price = 0;
    if (Object.keys(cartItem).length > 0) {
      Object.keys(cartItem).forEach(key => {
        price += data[key].price.split("$").join("") * cartItem[key]
      })
    }
    return price
  }, [cartItem, data])

  return (
    <Modal
      open={open}
      onClose={() => onClose?.()}
      sx={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
      }}
    >
      <Box
        sx={{
          background: '#fff',
          width: '35vw',
          maxHeight: '400px',
          borderRadius: '8px',
          border: '4px solid #dedede',
          padding: '8px',
          display: 'flex',
          flexDirection: 'column',
          gap: '8px',
          overflow: 'auto'
        }}
      >
        {Object.keys(cartItem).map(key => (<Item key={data[key].name} name={data[key].name} price={data[key].price.split("$").join("") * cartItem[key]} qty={cartItem[key]} images={data[key].images} />))}
        {Object.keys(cartItem).length < 1 && <Typography>No Item!</Typography>}
        <Typography>Total: ${totalPrice}</Typography>
        <Box sx={{ display: 'flex', gap: '8px' }}>
          <Button onClick={() => { onBuy?.() }} disabled={Object.keys(cartItem).length < 1}>Buy</Button>
          <Button onClick={() => { onClose?.() }} sx={{ background: 'red', "&:hover": { background: 'red' } }}>Cancel</Button>
        </Box>
      </Box>
    </Modal>
  )
}

export default ModalBuy;