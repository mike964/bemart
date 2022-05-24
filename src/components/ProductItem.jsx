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

const Product = ({ product: product_, grid }) => {
	const product = getProduct(product_)

	// handle show cart plus icon btn
	const [showCartPlus, setShowCartPlus] = useState(false)

	return (
		<Card
			className='product-item-card my-3'
			onMouseEnter={() => setShowCartPlus(true)}
			onMouseLeave={() => setShowCartPlus(false)}>
			{/* <Card.Img src={product.image} variant='top' /> */}
			{/* <span>{grid ? 'Grid' : 'List'}</span> */}
			{/* <span className='badge badge-danger'>New</span> */}

			<div className={`card-body ${!grid && 'p-0'}`}>
				<div className='row'>
					<div className={grid ? 'col-12' : 'col-4'}>
						<div className='img-wrap'>
							<Link to={`/product/${product._id}`}>
								<img
									src={product.mainImage.imageUrl || product.images[0]}
									alt=''
								/>
							</Link>
						</div>
					</div>
					<div className='col'>
						<Link to={`/product/${product._id}`} className='product-title'>
							<div className='card-title'>
								<strong>{product.name}</strong>
							</div>
						</Link>

						<div className='card-text'>
							<Rating
								value={product.rating}
								text={`${product.numReviews} reviews`}
							/>

							<p
								style={{ color: '#3a3457', fontSize: '1.5rem', margin: '2px' }}>
								${product.price}{' '}
								{showCartPlus && <CartPlus productId={product.asin} />}
							</p>
						</div>
					</div>
				</div>
			</div>
		</Card>
	)
}

export default Product
