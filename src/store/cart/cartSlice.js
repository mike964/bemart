import { createSlice } from '@reduxjs/toolkit'
import { fakeApi } from '../../_api/fakeApi'

const initialState = { cartItems: [], shippingAddress: {} }

const cartSlice = createSlice({
	name: 'cart',
	initialState,
	reducers: {
		itemAdded: {
			// * action.type : cart/itemAdded
			reducer(state, action) {
				console.log('Hello from the other side.')
				// console.log(store.getState())  // Not work :(
				// // search in store for added item
				// let addedItem = state.productList.products.find(
				// 	item => item.asin === action.payload
				// )
				// console.log(addedItem)

				// * Check if item already exist
				const existItem = state.cartItems.find(
					item => item.asin === action.payload.asin
				)
				// add item only if not existed
				if (!existItem) {
					state.cartItems.push(action.payload)
				}
			},
		},
		itemRemoved: {
			reducer(state, action) {
				state.cartItems = state.cartItems.filter(
					item => item.asin !== action.payload
				)
			},
		},
	},
})

// * ACTIONS
//-------------------------------
export const addToCart = (id, qty) => async (dispatch, getState) => {
	// const { data } = await axios.get(`/api/products/${id}`)
	const data = fakeApi(`/product/id`, id)
	console.log(data)

	dispatch({
		// type: "CART_ADD_ITEM",
		type: 'cart/itemAdded',
		payload: {
			...data,
			product: data._id,
			// name: data.name,
			// image: data.image,
			// price: data.price,
			// countInStock: data.countInStock,
			qty: qty ? qty : 1,
		},
	})

	localStorage.setItem('cartItems', JSON.stringify(getState().cart.cartItems))
}

export const removeFromCart = id => (dispatch, getState) => {
	dispatch({
		type: 'cart/itemRemoved',
		payload: id,
	})

	localStorage.setItem('cartItems', JSON.stringify(getState().cart.cartItems))
}

export const saveShippingAddress = data => dispatch => {
	dispatch({
		type: 'CART_SAVE_SHIPPING_ADDRESS',
		payload: data,
	})

	localStorage.setItem('shippingAddress', JSON.stringify(data))
}

export const savePaymentMethod = data => dispatch => {
	dispatch({
		type: 'CART_SAVE_PAYMENT_METHOD',
		payload: data,
	})

	localStorage.setItem('paymentMethod', JSON.stringify(data))
}

export const {
	itemAdded,
	// ,  postUpdated
} = cartSlice.actions

export default cartSlice.reducer
