import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { Card } from 'react-bootstrap'
import Rating from './Rating'
import { getProduct } from '../utils'
import { addToCart } from '../store/cart/cartSlice'
import { useDispatch } from 'react-redux'

const CartPlus = ({ productId }) => {
	const dispatch = useDispatch()

	return (
		<i
			className='fas fa-cart-plus cart-plus-icon'
			onClick={() => dispatch(addToCart(productId))}
		/>
	)
}

const Product = props => {
	const product = getProduct(props.product)

	// handle show cart plus icon btn
	const [showCartPlus, setShowCartPlus] = useState(false)

	return (
		<Card
			className='product-item-card my-3'
			onMouseEnter={() => setShowCartPlus(true)}
			onMouseLeave={() => setShowCartPlus(false)}>
			{/* <Card.Img src={product.image} variant='top' /> */}
			<div className='img-wrap'>
				<Link to={`/product/${product._id}`}>
					<img src={product.mainImage.imageUrl || product.images[0]} alt='' />
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

				<p style={{ color: '#3a3457', fontSize: '1.5rem', margin: '2px' }}>
					${product.price}{' '}
					{showCartPlus && <CartPlus productId={product.asin} />}
				</p>
			</Card.Body>
		</Card>
	)
}

export default Product
