import { createSelector } from '@reduxjs/toolkit'
import {
	PRODUCT_LIST_REQUEST,
	PRODUCT_LIST_SUCCESS,
	PRODUCT_LIST_FAIL,
	PRODUCT_DETAILS_REQUEST,
	PRODUCT_DETAILS_SUCCESS,
	PRODUCT_DETAILS_FAIL,
	PRODUCT_DELETE_REQUEST,
	PRODUCT_DELETE_SUCCESS,
	PRODUCT_DELETE_FAIL,
	PRODUCT_CREATE_RESET,
	PRODUCT_CREATE_FAIL,
	PRODUCT_CREATE_SUCCESS,
	PRODUCT_CREATE_REQUEST,
	PRODUCT_UPDATE_REQUEST,
	PRODUCT_UPDATE_SUCCESS,
	PRODUCT_UPDATE_FAIL,
	PRODUCT_UPDATE_RESET,
	PRODUCT_CREATE_REVIEW_REQUEST,
	PRODUCT_CREATE_REVIEW_SUCCESS,
	PRODUCT_CREATE_REVIEW_FAIL,
	PRODUCT_CREATE_REVIEW_RESET,
	PRODUCT_TOP_REQUEST,
	PRODUCT_TOP_SUCCESS,
	PRODUCT_TOP_FAIL,
} from '../constants/productConstants'

export const productListReducer = (
	state = {
		products: [],
		loading: false,
		sortBy: { key: 'featured', order: 'asc' },
	},
	action
) => {
	switch (action.type) {
		case PRODUCT_LIST_REQUEST:
			return { ...state, loading: true, products: [] }
		case PRODUCT_LIST_SUCCESS:
			return {
				...state,
				loading: false,
				products: action.payload.products,
				pages: action.payload.pages,
				page: action.payload.page,
			}
		case PRODUCT_LIST_FAIL:
			return { ...state, loading: false, error: action.payload }
		case 'PRODUCT_LIST_SORT_BY':
			return { ...state, sortBy: action.payload }
		default:
			return state
	}
}

// * Single Product Page
export const productDetailsReducer = (
	state = { product: { reviews: [] } },
	action
) => {
	switch (action.type) {
		case PRODUCT_DETAILS_REQUEST:
			return { ...state, loading: true }
		case PRODUCT_DETAILS_SUCCESS:
			return { loading: false, product: action.payload }
		case PRODUCT_DETAILS_FAIL:
			return { loading: false, error: action.payload }
		default:
			return state
	}
}

export const productDeleteReducer = (state = {}, action) => {
	switch (action.type) {
		case PRODUCT_DELETE_REQUEST:
			return { loading: true }
		case PRODUCT_DELETE_SUCCESS:
			return { loading: false, success: true }
		case PRODUCT_DELETE_FAIL:
			return { loading: false, error: action.payload }
		default:
			return state
	}
}

export const productCreateReducer = (state = {}, action) => {
	switch (action.type) {
		case PRODUCT_CREATE_REQUEST:
			return { loading: true }
		case PRODUCT_CREATE_SUCCESS:
			return { loading: false, success: true, product: action.payload }
		case PRODUCT_CREATE_FAIL:
			return { loading: false, error: action.payload }
		case PRODUCT_CREATE_RESET:
			return {}
		default:
			return state
	}
}

export const productUpdateReducer = (state = { product: {} }, action) => {
	switch (action.type) {
		case PRODUCT_UPDATE_REQUEST:
			return { loading: true }
		case PRODUCT_UPDATE_SUCCESS:
			return { loading: false, success: true, product: action.payload }
		case PRODUCT_UPDATE_FAIL:
			return { loading: false, error: action.payload }
		case PRODUCT_UPDATE_RESET:
			return { product: {} }
		default:
			return state
	}
}

export const productReviewCreateReducer = (state = {}, action) => {
	switch (action.type) {
		case PRODUCT_CREATE_REVIEW_REQUEST:
			return { loading: true }
		case PRODUCT_CREATE_REVIEW_SUCCESS:
			return { loading: false, success: true }
		case PRODUCT_CREATE_REVIEW_FAIL:
			return { loading: false, error: action.payload }
		case PRODUCT_CREATE_REVIEW_RESET:
			return {}
		default:
			return state
	}
}

export const productTopRatedReducer = (state = { products: [] }, action) => {
	switch (action.type) {
		case PRODUCT_TOP_REQUEST:
			return { loading: true, products: [] }
		case PRODUCT_TOP_SUCCESS:
			return { loading: false, products: action.payload }
		case PRODUCT_TOP_FAIL:
			return { loading: false, error: action.payload }
		default:
			return state
	}
}

// createSelector used for filtering products
export const selectFilteredProducts = createSelector(
	state => state.productList.products,
	state => state.filters,
	// Output selector: receives both values
	(products, filters) => {
		const { brands, opSystems, processors } = filters
		// return all
		// if (filters.brands.length === 0) return products

		return products.filter(item => {
			// return filters.brands.includes(item.specs.brand.toLowerCase())
			const brandMatches =
				brands.length === 0 ||
				brands.includes(item.specs.brand || item.specs.brand.toLowerCase())

			const osMatches =
				opSystems.length === 0 ||
				opSystems.includes(item.specs.os || item.specs.os.toLowerCase())

			const processorMatches =
				processors.length === 0 ||
				processors.includes(
					item.specs.processor || item.specs.processor.toLowerCase()
				)

			return brandMatches && osMatches && processorMatches
		})
		// products => producst   // return all
	}
)
