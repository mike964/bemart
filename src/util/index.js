export const getProduct = (item) => {
	return {
		name: item.title,
		image: item.mainImage.imageUrl,
		price: item.price,
		rating: item.rating
			? parseFloat(item.rating.slice(0, 3))
			: 0,
		numReviews: item.reviews.length,
	}
}
