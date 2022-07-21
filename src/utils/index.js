export const getProduct = item => {
	return {
		...item,
		name: item.title,
		image: item.mainImage.imageUrl,
		// price: item.price,
		rating: item.rating ? parseFloat(item.rating.split(' ')[0]) : 3.5,
		// "4.7 out of 5 stars",
		// value={
		//   product.rating.length
		//     ? parseFloat(product.rating.split.split(' ')[0])
		//     : '4.1'
		// }
		// numReviews: item.reviews.length,
		numReviews: item.countReview,
		_id: item.asin,
		id: item.asin,
	}
}

export const compareValues = (key, order = 'asc') => {
	return function innerSort(a, b) {
		if (!a.hasOwnProperty(key) || !b.hasOwnProperty(key)) {
			// property doesn't exist on either object
			return 0
		}

		const varA = typeof a[key] === 'string' ? a[key].toUpperCase() : a[key]
		const varB = typeof b[key] === 'string' ? b[key].toUpperCase() : b[key]

		let comparison = 0
		if (varA > varB) {
			comparison = 1
		} else if (varA < varB) {
			comparison = -1
		}
		return order === 'desc' ? comparison * -1 : comparison
	}
}

// export const compareDates =(a, b) =>{
//   return Date.parse(new Date(a.birthdate)) - Date.parse(new Date(b.birthdate))
// }
export const compareProductDates_asc = (a, b) => {
	return (
		Date.parse(new Date(a.dateFirstAvailable)) -
		Date.parse(new Date(b.dateFirstAvailable))
	)
}
export const compareProductDates_desc = (a, b) => {
	return (
		Date.parse(new Date(b.dateFirstAvailable)) -
		Date.parse(new Date(a.dateFirstAvailable))
	)
}
