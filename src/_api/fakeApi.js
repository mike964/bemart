import users from './users.json'
import products from './products'

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

export default function fakeApi(endpoint, payload) {
	let data
	// const laptops = [ "Macbook Air", "Macbook Pro", "Macbook 16" ];

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
