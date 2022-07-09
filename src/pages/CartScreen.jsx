import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { Row, Col, ListGroup, Image, Form, Button, Card } from 'react-bootstrap'
import Message from '../components/Message'
import { addToCart, removeFromCart } from '../store/cart/cartSlice'
import CartListItem from '../components/cart/CartListItem'
// import { addToCart, removeFromCart } from '../store/actions/cartActions'

const CartScreen = ({ match, location, history }) => {
	const productId = match.params.id

	const qty = location.search ? Number(location.search.split('=')[1]) : 1

	const dispatch = useDispatch()

	const cart = useSelector(state => state.cart)
	const { cartItems } = cart

	useEffect(() => {
		if (productId) {
			dispatch(addToCart(productId, qty))
		}
	}, [dispatch, productId, qty])

	const checkoutHandler = () => {
		history.push('/login?redirect=shipping')
	}

	return (
		<div className='page'>
			<div className='container'>
				<div className='mb-3'>
					<h3>Shopping Cart</h3>
				</div>
				<Row>
					<Col md={8}>
						{cartItems.length === 0 ? (
							<Message>
								Your cart is empty <Link to='/'>Go Back</Link>
							</Message>
						) : (
							<ListGroup variant='flush'>
								{cartItems.map(item => (
									<CartListItem item={item} key={item.asin} />
								))}
							</ListGroup>
						)}
					</Col>
					<Col md={4}>
						<Card>
							<ListGroup variant='flush'>
								<ListGroup.Item>
									<h2>
										Subtotal (
										{
											// array.reduce(function(total, currentValue, currentIndex, arr), initialValue)
											cartItems.reduce((acc, item) => acc + item.qty, 0)
										}
										) items
									</h2>
									$
									{cartItems
										.reduce((acc, item) => acc + item.qty * item.price, 0)
										.toFixed(2)}
								</ListGroup.Item>
								<ListGroup.Item>
									<Button
										type='button'
										className='btn-block'
										disabled={cartItems.length === 0}
										onClick={checkoutHandler}>
										Proceed To Checkout
									</Button>
								</ListGroup.Item>
							</ListGroup>
						</Card>
					</Col>
				</Row>
			</div>
		</div>
	)
}

export default CartScreen
