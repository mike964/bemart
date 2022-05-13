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

				state.cartItems.push(action.payload)
			},
		},
	},
})

// * ACTIONS
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

export const {
	itemAdded,
	// ,  postUpdated
} = cartSlice.actions

export default cartSlice.reducer
