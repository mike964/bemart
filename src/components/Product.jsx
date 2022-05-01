import React from 'react'
import { Link } from 'react-router-dom'
import { Card } from 'react-bootstrap'
import Rating from './Rating'
import { getProduct } from '../utils'

const Product = props => {
	const product = getProduct(props.product)

	// console.log(props.product.rating.slice(0, 3))

	return (
		<Card className='my-3 card-product-grid'>
			{/* <Card.Img src={product.image} variant='top' /> */}
			<div className='img-wrap'>
				<Link to={`/product/${product._id}`}>
					<img src={product.images[0]} alt='' />
				</Link>
			</div>

			<Card.Body>
				<Link to={`/product/${product._id}`} className='product-title'>
					<Card.Title as='div'>
						<strong>{product.name}</strong>
					</Card.Title>
				</Link>

				<Card.Text as='div'>
					<Rating
						value={product.rating}
						text={`${product.numReviews} reviews`}
					/>
				</Card.Text>

				<Card.Text as='h3'>${product.price}</Card.Text>
			</Card.Body>
		</Card>
	)
}

export default Product
