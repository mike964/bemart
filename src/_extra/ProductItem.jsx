import React from 'react'

const ProductItem = () => {
	return (
		<div className='col-lg-3 col-md-6 col-sm-6'>
			<figure className='card card-product-grid'>
				<div className='img-wrap'>
					<img src='images/items/1.jpg' />
				</div>
				<figcaption className='info-wrap border-top'>
					<div className='price-wrap'>
						<span className='price'>$790.50</span>
					</div>{' '}
					{/* price-wrap.// */}
					<p className='title mb-2'>
						GoPro HERO6 4K Action Camera - Black
					</p>
					<a href='#' className='btn btn-primary'>
						Add to cart
					</a>
					<a href='#' className='btn btn-light btn-icon'>
						{' '}
						<i className='fa fa-heart' />{' '}
					</a>
				</figcaption>
			</figure>
		</div>
	)
}

export default ProductItem
