import React, { useState, useEffect } from 'react'
import { Col, Pagination, Row } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { LinkContainer } from 'react-router-bootstrap'
import { useParams } from 'react-router-dom'
import FiltersSidebar from '../components/FiltersSidebar'
import Loader from '../components/Loader'
import Message from '../components/Message'
import ProductItem from '../components/ProductItem'
import Toolbar from '../components/Toolbar'
import {
	listProducts,
	listProductsByCategory,
} from '../store/actions/productActions'

// * Show products by Category/Department
// should contain filters, title, page number change...
const ProductsPage = () => {
	let { category, pageNumber } = useParams()
	const dispatch = useDispatch()

	const [pageDetails, setPageDetails] = useState({})
	const [viewMode, setViewMode] = useState('grid') // grid by default

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
		if (!category) dispatch(listProducts('', pageNumber || 1))
		else dispatch(listProductsByCategory(x.category, pageNumber))

		// dispatch(listProducts(1, 1, { category }))
	}, [dispatch, category, pageNumber])

	// useEffect(() => {
	// 	console.log('ProductsPage mounted.')
	// }, [])

	// if (loading) return <Loader />
	if (error) return <Message variant='danger'>{error}</Message>

	return (
		<div>
			<h2>{pageDetails.title}</h2>
			<Toolbar setViewMode={setViewMode} />

			<div className='row mb-3'>
				{/* <FiltersSidebar /> */}
				<div className='col-lg-88'>
					{/* Products Grid */}
					<div className='row mx-n2'>
						{products.map(product => (
							<Col
								key={product.asin}
								sm={6}
								md={4}
								lg={viewMode === 'grid' ? 3 : 12}
								className='px-2 '>
								<ProductItem
									product={product}
									grid={viewMode === 'grid' ? true : false}
								/>
							</Col>
						))}
					</div>
				</div>
			</div>

			{!loading && pages > 1 && (
				<Pagination className='justify-content-center'>
					{[...Array(pages).keys()].map(x => {
						// x starts from 0
						let number = x + 1
						return (
							<LinkContainer
								key={number}
								to={
									category
										? `/products/${category}/page/${number}`
										: `/products/page/${number}`
								}>
								<Pagination.Item active={number === page}>
									{number}
								</Pagination.Item>
							</LinkContainer>
						)
					})}
				</Pagination>
			)}
		</div>
	)
}

export default ProductsPage
