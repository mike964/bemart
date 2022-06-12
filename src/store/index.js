import { configureStore } from '@reduxjs/toolkit'
import {
	productListReducer,
	productDetailsReducer,
	productDeleteReducer,
	productCreateReducer,
	productUpdateReducer,
	productReviewCreateReducer,
	productTopRatedReducer,
} from './reducers/productReducers'

import authReducer from '../store/auth/authSlice'
import cartSlice from './cart/cartSlice'
import filtersSlice from './filters/filtersSlice'

// * USING REDUX Toolkit
export const store = configureStore({
	reducer: {
		auth: authReducer,
		productList: productListReducer,
		productDetails: productDetailsReducer,
		productDelete: productDeleteReducer,
		productCreate: productCreateReducer,
		productUpdate: productUpdateReducer,
		productReviewCreate: productReviewCreateReducer,
		productTopRated: productTopRatedReducer,
		// cart: cartReducer,
		cart: cartSlice,
		filters: filtersSlice,
	},
})

export default store
