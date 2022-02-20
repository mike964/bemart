import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { Carousel, Image } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import Loader from './Loader'
import Message from './Message'
import { listTopProducts } from '../actions/productActions'
import { getProduct } from '../util'

const ProductCarousel = () => {
	const dispatch = useDispatch()

	const productTopRated = useSelector(
		(state) => state.productTopRated
	)
	const { loading, error, products } = productTopRated

	useEffect(() => {
		dispatch(listTopProducts())
	}, [dispatch])

	return loading ? (
		<Loader />
	) : error ? (
		<Message variant='danger'>{error}</Message>
	) : (
		<Carousel
			pause='hover'
			className='bg-light-gray'
			indicators={false}>
			{products &&
				products.map((item) => {
					const product = getProduct(item) // change product propertis in order to fit
					return (
						<Carousel.Item key={product._id}>
							<Link to={`/product/${product._id}`}>
								<div
									className='bg-white text-center'
									style={{ minWidth: '400px' }}>
									<Image
										src={product.image}
										alt={product.name}
										fluid
									/>
								</div>
								<Carousel.Caption className='carousel-caption'>
									<h2>
										{product.name.slice(0, 14)} ($
										{product.price})
									</h2>
								</Carousel.Caption>
							</Link>
						</Carousel.Item>
					)
				})}
		</Carousel>
	)
}

export default ProductCarousel
