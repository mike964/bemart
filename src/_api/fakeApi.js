import users from './users.json'
import products from './products'
import { compareValues } from '../utils'

// Filter products by category
// '/products?category=laptops'

const makePromise = x => {
	const promise_ = new Promise((resolve, reject) => {
		setTimeout(() => {
			if (x !== null) {
				resolve({ data: x })
				// * putting data inside {} to mimic axios requests
			} else {
				reject(new Error('No data to return!'))
			}
		}, 900)
	})
	return promise_
}

// build response object for products with pagination
const makeProductsResponse = (filteredProducts, pageNumber) => {
	let itemsPerPage = 12
	let sliceStart = pageNumber * itemsPerPage - itemsPerPage
	return {
		// products,
		products: filteredProducts.slice(sliceStart, sliceStart + itemsPerPage),
		pages: filteredProducts
			? Math.ceil(filteredProducts.length / itemsPerPage)
			: 2,
		page: pageNumber,
	}
}

export default function fakeApi(endpoint, payload) {
	console.log('--- fakeApi ---')
	console.log('endpoint: ' + endpoint)
	console.log('payload: ')
	console.log(payload)
	let data = {}
	let resultsArray = []
	// let sliceStart = payload.pageNumber * 12 - 12
	// const laptops = [ "Macbook Air", "Macbook Pro", "Macbook 16" ];
	// const results = await userSchema.find({}).sort('email')
	// const results = await userSchema.find({}).sort({ username : -1})  // descending

	switch (endpoint) {
		case '/products':
			if (!payload || !payload.keyword) {
				// data = makeProductsResponse(products, payload.pageNumber)
				resultsArray = products
			}
			// * Search products by keyword
			if (payload.keyword) {
				const { keyword } = payload
				console.log(keyword)
				// const filteredProducts = products.filter(item => {
				// 	return item.title.toLowerCase().indexOf(keyword.toLowerCase()) !== -1
				// })
				resultsArray = products.filter(item => {
					return item.title.toLowerCase().indexOf(keyword.toLowerCase()) !== -1
				})

				// console.log(filteredProducts)
				// data = { products: filteredProducts }
				// data = makeProductsResponse(filteredProducts, payload.pageNumber)
				// ***
			}
			// * Get products by category
			if (payload.category) {
				// const filteredProducts = products.filter(item =>
				// 	item.categories.includes(payload.category)
				// )
				// * Cell-Phones => Cell Phones
				const category_ = payload.category.replace(/-/g, ' ')
				resultsArray = products.filter(item =>
					item.categories.includes(category_)
				)

				// console.log(filteredProducts)
				console.log(resultsArray)
				// data = makeProductsResponse(filteredProducts, payload.pageNumber)
			}
			if (payload.sortBy) {
				// pice_asc  - key_order
				const { key, order } = payload.sortBy

				/*
				 * https://www.sitepoint.com/sort-an-array-of-objects-in-javascript/
				 */
				resultsArray.sort(compareValues(key, order))
			}
			data = makeProductsResponse(resultsArray, payload.pageNumber)
			/*
      else {
				// * payload = filters
				// case '/products?search':
				// console.log(payload)  // {brand: 'Apple'}
				// console.log(Object.keys(payload)) // ["brand"]
				const key = Object.keys(payload)[0]

				const filteredProducts = products.filter(
					item => item[key] === payload[key]
				)

				// console.log(filteredProducts)
				data = makeProductsResponse(filteredProducts, payload.pageNumber)
			}
      */
			break
		// * Pick random products to show in best sellers product slide show
		case '/products/bestsellers':
			{
				// shuffledArray = array.sort((a, b) => 0.5 - Math.random());
				const products_ = [...products]
				const productsShuffled = products_.sort((a, b) => 0.5 - Math.random())

				data = makeProductsResponse(productsShuffled.slice(1, 8), 1)
			}
			break
		case '/product/id':
			let product = products.filter(
				// item => item._id === payload
				item => item.asin === payload
			)
			// console.log( product )   // array
			data = product[0]
			break

		case '/login':
			let user = users.filter(item => item.email === payload.email)
			console.log(user)
			data = user[0]
			break
		case '/users': // * Get logged in user details
			let user_ = users.filter(item => item._id === payload)
			data = user_[0]
			// console.log( data )
			break
		default:
			// data = "No product found";
			data = null
	}
	// console.log( Date.now() );
	return makePromise(data)
}

// export { fakeApi  }
