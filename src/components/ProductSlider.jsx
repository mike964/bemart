import React, { useState, useEffect } from 'react'
import Slider from 'react-slick'
// Import css files
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import Product from './ProductItemCard'
import fakeApi from '../_api/fakeApi'

const ProductSlider = ({ productss }) => {
	const [loading, setLoading] = useState(true)
	const [products, setProducts] = useState([])

	useEffect(() => {
		const fetchProducts = async () => {
			const response = await fakeApi('/products/bestsellers')
			console.log(response.data)
			// return response.data

			setLoading(false)
			setProducts(response.data.products)
		}
		fetchProducts()

		// console.log(response.data)
	}, [])

	const settings = {
		dots: false,
		infinite: true,
		speed: 1000,
		slidesToShow: 4,
		// autoplay
		autoplay: true,
		autoplaySpeed: 2000,
		cssEase: 'linear',
	}

	// shuffledArray = array.sort((a, b) => 0.5 - Math.random());
	// const products_ = products.sort((a, b) => 0.5 - Math.random())

	const Loader = (
		<div className='p-5 text-center'>
			<div
				class='spinner-grow text-info'
				style={{ width: ' 3rem', height: ' 3rem' }}
				role='status'>
				<span class='sr-only'>Loading...</span>
			</div>
		</div>
	)

	return (
		<div className='products-slider px-3'>
			{loading && Loader}
			{products && (
				<Slider {...settings}>
					{products.map(product => (
						<Product product={product} grid clickable={false} />
					))}
				</Slider>
			)}
		</div>
	)
}

export default ProductSlider
