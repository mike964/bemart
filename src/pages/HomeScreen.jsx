import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { Row, Col } from 'react-bootstrap'
import Product from '../components/ProductItem.jsx'
import Message from '../components/Message'
import Loader from '../components/Loader'
import Paginate from '../components/Paginate'
import ProductCarousel from '../components/ProductCarousel.jsx'
import Meta from '../components/Meta'
import { listProducts } from '../store/actions/productActions'
import BillboardCarousel from '../components/home/BillboardCarousel.jsx'
import { useParams } from 'react-router-dom'

// const HomeScreen = ({ match }) => {
const HomeScreen = () => {
	// const keyword = match.params.keyword
	const params = useParams()
	const { keyword } = useParams()
	console.log(useParams())

	// const pageNumber = match.params.pageNumber || 1
	const pageNumber = params.pageNumber || 1

	const dispatch = useDispatch()

	const productList = useSelector(state => state.productList)
	const { loading, error, products, page, pages } = productList

	useEffect(() => {
		dispatch(listProducts(keyword, pageNumber))
		// console.log(pageNumber)
	}, [dispatch, keyword, pageNumber])

	return (
		<>
			<Meta />
			{!keyword ? (
				// <ProductCarousel />
				<div className='mb-3'>
					<BillboardCarousel />
				</div>
			) : (
				<Link to='/' className='btn btn-light'>
					Go Back
				</Link>
			)}
			{/* <h2>{!keyword ? 'Latest Products' : 'Search Result'}</h2> */}
			{loading ? (
				<Loader />
			) : error ? (
				<Message variant='danger'>{error}</Message>
			) : (
				<>
					<div className='d-flex flex-wrap justify-content-between align-items-center pt-1 border-bottom pb-4 mb-4'>
						<h2 className='h3 mb-0 pt-3 me-2'>Latest products</h2>
						<div className='pt-3'>
							<Link className=' ' to='/products'>
								More products <i className='fas fa-angle-right' />{' '}
							</Link>
						</div>
					</div>
					<Row>
						{products &&
							products.map(product => (
								<Col
									key={product._id}
									sm={12}
									md={6}
									lg={4}
									xl={3}
									className='mb-4'>
									<Product product={product} grid />
								</Col>
							))}
					</Row>
					{/* Only when Search, show pagination */}
					{keyword && (
						<Paginate
							pages={pages}
							page={page}
							keyword={keyword ? keyword : ''}
						/>
					)}
				</>
			)}
		</>
	)
}

export default HomeScreen
