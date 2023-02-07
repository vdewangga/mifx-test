import { Alert, Snackbar } from '@mui/material';
import React, { useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

import { CarouselView } from '../component/molecule';
import ModalBuy from '../component/organism/modal/ModalBuy';
import ProductDetail from '../component/organism/ProductDetail';
import DetailContainer from '../component/template/DetailContainer';
import { useAppDispatch, useAppSelector } from '../store';
import { buyCartItem, setCartItem } from '../store/feature/cartSlice';
import { useGetProductsQuery } from '../store/feature/service/productApiSlice';

const Detail = () => {
  const params = useParams();
  const navigate = useNavigate()
  const dispatch = useAppDispatch();
  const id = params.id - 1;
  const {
    data,
    isLoading
  } = useGetProductsQuery();
  const { cartItem } = useAppSelector(state => state.cart)

  useEffect(() => {
    if (!isLoading && !data?.[id]) {
      navigate('/not-found')
    }
  });

  const [openModal, setOpenModal] = React.useState(false);
  const [openSnackbar, setOpenSnackbar] = React.useState(false);
  const [openSuccessSnackbar, setOpenSuccessSnackbar] = React.useState(false);

  const handleClose = (_event, reason) => {
    if (reason === 'clickaway') {
      return;
    }
    setOpenSnackbar(false)
  }

  const handleCloseSuccessSnackbar = (_event, reason) => {
    if (reason === 'clickaway') {
      return;
    }
    setOpenSuccessSnackbar(false)
  }

  const handleBuy = () => {
    setOpenModal(false)
    setOpenSuccessSnackbar(true);
    dispatch(buyCartItem());
  }

  return (
    <>
      {!isLoading && data?.[id] && (
        <DetailContainer>
          <CarouselView isLoading={isLoading} images={data?.[id].images} />
          <ProductDetail onClickBuy={() => { setOpenModal(true) }} onClickAddToChart={() => { dispatch(setCartItem(id)); setOpenSnackbar(true) }} data={data} id={id} />
        </DetailContainer>
      )}
      <ModalBuy
        cartItem={cartItem}
        data={data}
        open={openModal}
        onClose={() => setOpenModal(false)}
        onBuy={() => { handleBuy() }}
      />
      <Snackbar
        open={openSnackbar}
        autoHideDuration={3000}
        onClose={handleClose}
        message="Successfully Added to Cart"
        action={<></>}
      />
      <Snackbar open={openSuccessSnackbar} autoHideDuration={3000} onClose={handleCloseSuccessSnackbar}>
        <Alert onClose={handleClose} severity="success" sx={{ width: '100%' }}>
          Successful Purchase!
        </Alert>
      </Snackbar>
    </>
  )
}

export default Detail;