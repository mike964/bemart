import React from 'react'
import { Button, Col, Form, Image, ListGroup, Row } from 'react-bootstrap'
import { useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import { addToCart, removeFromCart } from '../../store/cart/cartSlice'

const CartListItem = ({ item }) => {
	const dispatch = useDispatch()

	const itemName = item.name ? item.name : item.title

	return (
		<ListGroup.Item key={item.product}>
			<Row>
				<Col md={2} className='text-center'>
					<Image
						src={item.mainImage.imageUrl}
						alt={item.name}
						fluid
						style={{ maxHeight: '90px' }}
					/>
				</Col>
				<div className='col'>
					<div className='row'>
						<Link
							to={`/product/${item.product}`}
							data-toggle='tooltip-cart-item-name'
							data-placement={itemName}
							title={itemName}>
							{itemName.slice(0, 75)}
						</Link>
					</div>
					<div className='row'>
						<Col md={2}>${item.price}</Col>
						<Col md={2}>
							<Form.Control
								as='select'
								value={item.qty}
								onChange={e =>
									dispatch(addToCart(item.product, Number(e.target.value)))
								}>
								{[...Array(item.countInStock).keys()].map(x => (
									<option key={x + 1} value={x + 1}>
										{x + 1}
									</option>
								))}
							</Form.Control>
						</Col>
						<Col md={2}>
							<Button
								type='button'
								variant='light'
								onClick={() => dispatch(removeFromCart(item.asin))}>
								<i className='fas fa-trash'></i>
							</Button>
						</Col>
					</div>
				</div>
			</Row>
		</ListGroup.Item>
	)
}

export default CartListItem
