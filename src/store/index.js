import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { useDispatch, useSelector } from 'react-redux';
import { createLogger } from 'redux-logger';
import { isDevelopment } from '../utils/env';
import { apiSlice } from './feature/api/apiSlice';
import { cartReducer } from './feature/cartSlice';
import { productApiSlice } from './feature/service/productApiSlice';

const logger = createLogger();
export const reducer = combineReducers({
  cart: cartReducer,
  [productApiSlice.reducerPath]: productApiSlice.reducer,
});

export const createStore = () =>
  configureStore({
    reducer,
    middleware: getDefaultMiddleware => {
      if (isDevelopment()) {
        return getDefaultMiddleware()
          .concat(apiSlice.middleware)
          .concat(logger);
      }
      return getDefaultMiddleware().concat(apiSlice.middleware);
    },
  });

export const store = createStore();

export const useAppDispatch = useDispatch;
export const useAppSelector = useSelector;
