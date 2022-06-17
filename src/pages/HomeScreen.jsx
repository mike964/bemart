import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { Row, Col } from 'react-bootstrap'
import Product from '../components/ProductItemCard.jsx'
import Message from '../components/Message'
import Loader from '../components/Loader'
import Paginate from '../components/Paginate'
import ProductCarousel from '../components/ProductCarousel.jsx'
import Meta from '../components/Meta'
import { listProducts } from '../store/actions/productActions'
import BillboardCarousel from '../components/home/BillboardCarousel.jsx'
import { useParams } from 'react-router-dom'
import ProductsSlider from '../components/ProductSlider.jsx'

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
		<div className='home-page'>
			<Meta />
			{!keyword ? (
				// <ProductCarousel />
				<div className='row mb-5'>
					<div className='col p-0'>
						<BillboardCarousel />
					</div>
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
					{!keyword && (
						<div className='mb-3'>
							<div className='d-flex flex-wrap justify-content-between align-items-center border-bottom mb-3 px-3'>
								<h4>Best Sellers</h4>
							</div>
							<div className='row'>
								<div className='col'>
									<ProductsSlider products={products} />
								</div>
							</div>
						</div>
					)}

					<div className='d-flex flex-wrap justify-content-between align-items-center border-bottom mb-3 px-3'>
						<h4> {keyword ? 'Search Result' : 'Latest Products'} </h4>
						{!keyword && (
							<div className='p-2'>
								<Link className=' ' to='/products'>
									More products <i className='fas fa-angle-right' />{' '}
								</Link>
							</div>
						)}
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
		</div>
	)
}

export default HomeScreen
