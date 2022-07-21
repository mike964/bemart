import React, { useState, useEffect } from 'react'
import Slider from 'react-slick'
// Import css files
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import Product from './ProductItemCard'
import fakeApi from '../../_api/fakeApi'
import Loader from '../Loader'

const ProductSlider = ({ title, url }) => {
	const [loading, setLoading] = useState(true)
	const [products, setProducts] = useState([])

	useEffect(() => {
		const fetchProducts = async () => {
			// const response = await fakeApi('/products/bestsellers')
			console.log(url)
			const response = await fakeApi(url)
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

	return (
		<>
			<div className='d-flex flex-wrap justify-content-between align-items-center border-bottom mb-3 px-3'>
				<h4>{title}</h4>
			</div>
			<div className='row'>
				<div className='col'>
					<div className='products-slider px-3'>
						{loading && <Loader />}
						{products && (
							<Slider {...settings}>
								{products.map(product => (
									<Product
										product={product}
										grid
										clickable={true}
										key={product.asin}
									/>
								))}
							</Slider>
						)}
					</div>
				</div>
			</div>
		</>
	)
}

export default ProductSlider
