import axios from 'axios'
import {
	PRODUCT_LIST_REQUEST,
	PRODUCT_LIST_SUCCESS,
	PRODUCT_LIST_FAIL,
	PRODUCT_DETAILS_REQUEST,
	PRODUCT_DETAILS_SUCCESS,
	PRODUCT_DETAILS_FAIL,
	PRODUCT_DELETE_SUCCESS,
	PRODUCT_DELETE_REQUEST,
	PRODUCT_DELETE_FAIL,
	PRODUCT_CREATE_REQUEST,
	PRODUCT_CREATE_SUCCESS,
	PRODUCT_CREATE_FAIL,
	PRODUCT_UPDATE_REQUEST,
	PRODUCT_UPDATE_SUCCESS,
	PRODUCT_UPDATE_FAIL,
	PRODUCT_CREATE_REVIEW_REQUEST,
	PRODUCT_CREATE_REVIEW_SUCCESS,
	PRODUCT_CREATE_REVIEW_FAIL,
	PRODUCT_TOP_REQUEST,
	PRODUCT_TOP_SUCCESS,
	PRODUCT_TOP_FAIL,
} from '../constants/productConstants'
import { logout } from './userActions'
// import products from '../../_api/products.json'
import { getProduct } from '../../utils'
import fakeApi from '../../_api/fakeApi'

export const listProducts =
	(keyword = '', pageNumber = '', category = '', sortBy) =>
	// keyword used for search
	async dispatch => {
		try {
			dispatch({ type: PRODUCT_LIST_REQUEST })

			// const { data } = await axios.get(
			//   `/api/products?keyword=${keyword}&pageNumber=${pageNumber}`
			// )

			// * Fetch products from fake api
			const response = await fakeApi('/products', {
				keyword,
				pageNumber: !pageNumber ? 1 : pageNumber,
				category, // 'Laptops',
				sortBy, // featured,'date',
			})

			console.log(response.data)

			dispatch({
				type: PRODUCT_LIST_SUCCESS,
				payload: response.data,
			})
		} catch (error) {
			dispatch({
				type: PRODUCT_LIST_FAIL,
				payload:
					error.response && error.response.data.message
						? error.response.data.message
						: error.message,
			})
		}
	}

export const listProductDetails = id => async dispatch => {
	// const products = []
	try {
		dispatch({ type: PRODUCT_DETAILS_REQUEST })

		// const { data } = await axios.get(
		// 	`/api/products/${id}`
		// )
		// const product = products.filter(item => {
		// 	return item._id === id || item.asin === id
		// })

		const response = await fakeApi('/product/id', id)
		console.log(response)

		const product = getProduct(response.data)

		dispatch({
			type: PRODUCT_DETAILS_SUCCESS,
			payload: product,
		})
	} catch (error) {
		console.log(error)
		dispatch({
			type: PRODUCT_DETAILS_FAIL,
			payload:
				error.response && error.response.data.message
					? error.response.data.message
					: error.message,
		})
	}
}

export const setSortBy = () => {}

export const deleteProduct = id => async (dispatch, getState) => {
	try {
		dispatch({
			type: PRODUCT_DELETE_REQUEST,
		})

		const {
			userLogin: { user },
		} = getState()

		const config = {
			headers: {
				Authorization: `Bearer ${user.token}`,
			},
		}

		await axios.delete(`/api/products/${id}`, config)

		dispatch({
			type: PRODUCT_DELETE_SUCCESS,
		})
	} catch (error) {
		const message =
			error.response && error.response.data.message
				? error.response.data.message
				: error.message
		if (message === 'Not authorized, token failed') {
			dispatch(logout())
		}
		dispatch({
			type: PRODUCT_DELETE_FAIL,
			payload: message,
		})
	}
}

export const createProduct = () => async (dispatch, getState) => {
	try {
		dispatch({
			type: PRODUCT_CREATE_REQUEST,
		})

		const {
			userLogin: { user },
		} = getState()

		const config = {
			headers: {
				Authorization: `Bearer ${user.token}`,
			},
		}

		const { data } = await axios.post(`/api/products`, {}, config)

		dispatch({
			type: PRODUCT_CREATE_SUCCESS,
			payload: data,
		})
	} catch (error) {
		const message =
			error.response && error.response.data.message
				? error.response.data.message
				: error.message
		if (message === 'Not authorized, token failed') {
			dispatch(logout())
		}
		dispatch({
			type: PRODUCT_CREATE_FAIL,
			payload: message,
		})
	}
}

export const updateProduct = product => async (dispatch, getState) => {
	try {
		dispatch({
			type: PRODUCT_UPDATE_REQUEST,
		})

		const {
			userLogin: { user },
		} = getState()

		const config = {
			headers: {
				'Content-Type': 'application/json',
				Authorization: `Bearer ${user.token}`,
			},
		}

		const { data } = await axios.put(
			`/api/products/${product._id}`,
			product,
			config
		)

		dispatch({
			type: PRODUCT_UPDATE_SUCCESS,
			payload: data,
		})
		dispatch({
			type: PRODUCT_DETAILS_SUCCESS,
			payload: data,
		})
	} catch (error) {
		const message =
			error.response && error.response.data.message
				? error.response.data.message
				: error.message
		if (message === 'Not authorized, token failed') {
			dispatch(logout())
		}
		dispatch({
			type: PRODUCT_UPDATE_FAIL,
			payload: message,
		})
	}
}

export const createProductReview =
	(productId, review) => async (dispatch, getState) => {
		try {
			dispatch({
				type: PRODUCT_CREATE_REVIEW_REQUEST,
			})

			const {
				userLogin: { user },
			} = getState()

			const config = {
				headers: {
					'Content-Type': 'application/json',
					Authorization: `Bearer ${user.token}`,
				},
			}

			await axios.post(`/api/products/${productId}/reviews`, review, config)

			dispatch({
				type: PRODUCT_CREATE_REVIEW_SUCCESS,
			})
		} catch (error) {
			const message =
				error.response && error.response.data.message
					? error.response.data.message
					: error.message
			if (message === 'Not authorized, token failed') {
				dispatch(logout())
			}
			dispatch({
				type: PRODUCT_CREATE_REVIEW_FAIL,
				payload: message,
			})
		}
	}

export const listTopProducts = () => async dispatch => {
	const products = []
	try {
		dispatch({ type: PRODUCT_TOP_REQUEST })

		// const { data } = await axios.get(`/api/products/top`)
		const data = products.slice(5, 8)
		console.log(data)

		dispatch({
			type: PRODUCT_TOP_SUCCESS,
			payload: data,
		})
	} catch (error) {
		dispatch({
			type: PRODUCT_TOP_FAIL,
			payload:
				error.response && error.response.data.message
					? error.response.data.message
					: error.message,
		})
	}
}
