import React from 'react'
import Slider from 'react-slick'
// Import css files
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import Product from './ProductItemCard'

const ProductSlider = ({ products }) => {
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

	return (
		<div className='products-slider px-3'>
			<Slider {...settings}>
				{products.map(product => (
					<Product product={product} grid clickable={false} />
				))}
			</Slider>
		</div>
	)
}

export default ProductSlider
