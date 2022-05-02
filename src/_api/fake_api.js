import { users } from './_data'
import products from './products'

// Filter products by category
// '/products?category=laptops'

const fake_api = (endpoint, payload) => {
	let data
	// const laptops = [ "Macbook Air", "Macbook Pro", "Macbook 16" ];
	const cellphones = ['iPhone Pro', 'Galaxy S10', 'HTC 9']

	switch (endpoint) {
		case '/products':
			if (!payload) {
				data = { products }
			} else {
				// * payload = filters
				// case '/products?search':
				// console.log(payload)  // {brand: 'Apple'}
				// console.log(Object.keys(payload)) // ["brand"]
				const key = Object.keys(payload)[0]

				const filteredProducts = products.filter(
					item => item[key] === payload[key]
				)

				// console.log(filteredProducts)
				data = { products: filteredProducts }
			}
			break
		// * Get products by category
		case '/products/category':
			{
				const filteredProducts = products.filter(item =>
					item.categories.includes(payload.category)
				)

				console.log(filteredProducts)
				data = { products: filteredProducts }
			}
			break
		case '/product/id':
			let product = products.filter(
				item => item._id === payload || item.asin === payload
			)
			// console.log( product )   // array
			data = product[0]
			break

		case '/login':
			let user = users.filter(item => item.email === payload)
			data = user[0]
			// console.log( data )
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

	return data
}

const axios_get = (endpoint, payload) => {
	console.log('--- fake api: axios_get')
	console.log(endpoint)
	console.log(payload)
	const thePromise = new Promise((resolve, reject) => {
		// resolve(meetingDetails); // means return
		let data = fake_api(endpoint, payload)
		// console.log(data)

		setTimeout(() => {
			if (data) {
				resolve({ data })
				// * putting data inside {} to mimic axios requests
			} else {
				reject(new Error('No data to return!'))
			}
		}, 800)
	})

	// const result = await thePromise();   // TypeError: thePromise is not a function
	// return result;
	return thePromise
}

export { axios_get }
