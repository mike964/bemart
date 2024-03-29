import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { Row, Col, Image, ListGroup, Card, Button, Form } from 'react-bootstrap'
import Rating from '../components/Rating'
import Message from '../components/Message'
import Loader from '../components/Loader'
import Meta from '../components/Meta'
import {
	listProductDetails,
	createProductReview,
} from '../store/actions/productActions'
import { PRODUCT_CREATE_REVIEW_RESET } from '../store/constants/productConstants'
import { addToCart, itemAdded } from '../store/cart/cartSlice'
import ProductDetailsTable from '../components/product/ProductDetailsTable'

// * Product Page
const ProductScreen = ({ history, match }) => {
	console.log(match.params)

	// Handle Select for quantity to add in cart
	const [qty, setQty] = useState(1)
	const [rating, setRating] = useState(0)
	const [comment, setComment] = useState('')

	const dispatch = useDispatch()

	const productDetails = useSelector(state => state.productDetails)
	const { loading, error, product } = productDetails

	const userLogin = useSelector(state => state.auth)
	const { user } = userLogin

	const productReviewCreate = useSelector(state => state.productReviewCreate)
	const {
		success: successProductReview,
		loading: loadingProductReview,
		error: errorProductReview,
	} = productReviewCreate

	useEffect(() => {
		if (successProductReview) {
			setRating(0)
			setComment('')
		}
		if (!product._id || product._id !== match.params.id) {
			dispatch(listProductDetails(match.params.id))
			// dispatch({ type: PRODUCT_CREATE_REVIEW_RESET })
		}
	}, [dispatch, match, successProductReview])

	const addToCartHandler = () => {
		console.log('addToCartHandler..')
		// * qty := quantity
		// history.push(`/cart/${match.params.id}?qty=${qty}`)
		// dispatch({ type: 'cart/itemAdded', payload: product.asin })
		dispatch(addToCart(product.asin, qty))
	}

	const submitHandler = e => {
		e.preventDefault()
		dispatch(
			createProductReview(match.params.id, {
				rating,
				comment,
			})
		)
	}

	return (
		<div className='page'>
			<div className='container'>
				<Link className='btn btn-light my-3' to='/'>
					Go Back
				</Link>
				{loading ? (
					<Loader />
				) : error ? (
					<Message variant='danger'>{error}</Message>
				) : (
					<>
						<Meta title={product.name} />
						<Row className='mb-5'>
							<Col md={3}>
								<Image src={product.image} alt={product.name} fluid />
							</Col>
							<Col>
								<ListGroup variant='flush'>
									<ListGroup.Item>
										<h4>{product.name}</h4>
									</ListGroup.Item>
									<ListGroup.Item>
										<Rating
											rating={product.rating}
											text={`${product.numReviews} reviews`}
										/>
									</ListGroup.Item>

									<div
										// className='collapse'
										id='collapseExample'
										style={{ maxHeight: '236px', overflow: 'hidden' }}>
										{product.description && (
											<ListGroup.Item>
												Description: {product.description}
											</ListGroup.Item>
										)}
									</div>
								</ListGroup>
							</Col>
							<Col md={3}>
								<Card>
									<ListGroup>
										<div className='x' style={{ minHeight: '180px' }}>
											<ListGroup.Item>
												<Row>
													<Col>Price:</Col>
													<Col>
														<strong>${product.price}</strong>
													</Col>
												</Row>
											</ListGroup.Item>

											<ListGroup.Item>
												<Row>
													<Col>Status:</Col>
													<Col>
														{product.countInStock > 0
															? 'In Stock'
															: 'Out Of Stock'}
													</Col>
												</Row>
											</ListGroup.Item>

											{product.countInStock > 0 && (
												<ListGroup.Item>
													<Row>
														<Col>Qty</Col>
														<Col>
															<Form.Control
																as='select'
																value={qty}
																onChange={e => setQty(e.target.value)}>
																{[...Array(product.countInStock).keys()].map(
																	x => (
																		// [...Array(product.countInStock).keys()]
																		// return : [0,1,2,3..]
																		<option key={x + 1} value={x + 1}>
																			{x + 1}
																		</option>
																	)
																)}
															</Form.Control>
														</Col>
													</Row>
												</ListGroup.Item>
											)}
										</div>
										<div className='p-2'>
											<Button
												onClick={addToCartHandler}
												className='btn-block'
												type='button'
												disabled={product.countInStock === 0}>
												Add To Cart
											</Button>
										</div>
									</ListGroup>
								</Card>
							</Col>
						</Row>
						<hr />
						<Row className='mb-5'>
							<div className='col-2'></div>
							<div className='col-8'>
								<h5>About this product</h5>
								<ul>
									{product.features &&
										product.features.map(item => <li key={item}>{item}</li>)}
								</ul>
							</div>
						</Row>
						<hr />
						<Row>
							<div className='col-8 mx-auto'>
								<h5>Product details</h5>
								<ProductDetailsTable details={product.details} />
							</div>
						</Row>
						<Row>
							{/* <Col md={6}>
							<h2>Reviews</h2>
							{product.reviews.length === 0 && (
								<Message>No Reviews</Message>
							)}
							<ListGroup variant='flush'>
								{product.reviews.map((review) => (
									<ListGroup.Item key={review._id}>
										<strong>{review.name}</strong>
										<Rating value={review.rating} />
										<p>
											{review.createdAt.substring(0, 10)}
										</p>
										<p>{review.comment}</p>
									</ListGroup.Item>
								))}
								<ListGroup.Item>
									<h2>Write a Customer Review</h2>
									{successProductReview && (
										<Message variant='success'>
											Review submitted successfully
										</Message>
									)}
									{loadingProductReview && <Loader />}
									{errorProductReview && (
										<Message variant='danger'>
											{errorProductReview}
										</Message>
									)}
									{user ? (
										<Form onSubmit={submitHandler}>
											<Form.Group controlId='rating'>
												<Form.Label>Rating</Form.Label>
												<Form.Control
													as='select'
													value={rating}
													onChange={(e) =>
														setRating(e.target.value)
													}>
													<option value=''>
														Select...
													</option>
													<option value='1'>
														1 - Poor
													</option>
													<option value='2'>
														2 - Fair
													</option>
													<option value='3'>
														3 - Good
													</option>
													<option value='4'>
														4 - Very Good
													</option>
													<option value='5'>
														5 - Excellent
													</option>
												</Form.Control>
											</Form.Group>
											<Form.Group controlId='comment'>
												<Form.Label>Comment</Form.Label>
												<Form.Control
													as='textarea'
													row='3'
													value={comment}
													onChange={(e) =>
														setComment(e.target.value)
													}></Form.Control>
											</Form.Group>
											<Button
												disabled={loadingProductReview}
												type='submit'
												variant='primary'>
												Submit
											</Button>
										</Form>
									) : (
										<Message>
											Please{' '}
											<Link to='/login'>sign in</Link> to
											write a review{' '}
										</Message>
									)}
								</ListGroup.Item>
							</ListGroup>
						</Col> */}
						</Row>
					</>
				)}
			</div>
		</div>
	)
}

export default ProductScreen
