import React, { useState, useEffect } from 'react'
import { Col, Row } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import FiltersSidebar from '../components/FiltersSidebar'
import Loader from '../components/Loader'
import Message from '../components/Message'
import Paginate from '../components/Paginate'
import ProductItem from '../components/ProductItem'
import { listProductsByCategory } from '../store/actions/productActions'

// * Show products by Category/Department
// should contain filters, title, page number change...
const ProductsPage = ({ title }) => {
	let { category, pageNumber } = useParams()
	const dispatch = useDispatch()

	const [pageDetails, setPageDetails] = useState({})

	console.log(useParams())
	// {keyword: 'laptops', pageNumber: '2'}

	// * Get page details
	function getDetails(category) {
		switch (category) {
			case 'laptops':
				return { title: 'Laptops', category: 'Laptops' }
			case 'cellphones':
				return { title: 'Cell Phones', category: 'Cell Phones' }
			case 'cameras':
				return { title: 'Cameras & Photo', category: 'Digital Cameras' }
			case 'accessories':
				return { title: 'Accessories', category: 'Accessories' }
			default:
				return 'No category found'
		}
	}

	const productList = useSelector(state => state.productList)
	const { loading, error, products, page, pages } = productList

	useEffect(() => {
		let x = getDetails(category)
		setPageDetails(x)
		dispatch(listProductsByCategory(x.category, pageNumber))
		// dispatch(listProducts(1, 1, { category }))
	}, [dispatch, category, pageNumber])

	// useEffect(() => {
	// 	console.log('ProductsPage mounted.')
	// }, [])

	// if (loading) return <Loader />
	if (error) return <Message variant='danger'>{error}</Message>

	return (
		<div>
			<div className='d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pb-2 mb-3 border-bottom'>
				<h2>{pageDetails.title}</h2>
				<div className='btn-toolbar mb-2 mb-md-0'>
					<div className='btn-group mr-2'>
						<button className='btn btn-sm btn-outline-secondary'>Share</button>
						<button className='btn btn-sm btn-outline-secondary'>Export</button>
					</div>
					<button className='btn btn-sm btn-outline-secondary dropdown-toggle'>
						<i className='far fa-calendar-alt' /> This week
					</button>
				</div>
			</div>

			<div className='row mb-3'>
				{/* <div className='col-md-2 d-none d-md-block bg-light sidebar'>
						<FiltersSidebar />
					</div> */}
				{loading ? (
					<Loader />
				) : (
					products &&
					products.map(product => (
						<Col key={product.asin} sm={12} md={6} lg={4} xl={3}>
							<ProductItem product={product} />
						</Col>
					))
				)}
			</div>

			{!loading && (
				<Paginate
					pages={pages}
					page={page}
					//  keyword={'products'}
					link={category}
				/>
			)}
		</div>
	)
}

export default ProductsPage
