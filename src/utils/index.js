export const getProduct = (item) => {
	return {
		...item,
		name: item.title,
		image: item.mainImage.imageUrl,
		// price: item.price,
		rating: item.rating
			? parseFloat(item.rating.slice(0, 3))
			: 0,
		numReviews: item.reviews.length,
		_id: item.asin,
		id: item.asin,
	}
}
