import React, { useState, useEffect } from 'react'
import { Col, Pagination, Row } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { LinkContainer } from 'react-router-bootstrap'
import { useParams } from 'react-router-dom'
import FiltersSidebar from '../components/filters-sidebar/FiltersSidebar'
import Loader from '../components/Loader'
// import Loader from '../components/Loader'
import Message from '../components/Message'
import ProductItem from '../components/ProductItemCard'
import Toolbar from '../components/Toolbar'
import {
	listProducts,
	listProductsByCategory,
} from '../store/actions/productActions'
import { selectFilteredProducts } from '../store/reducers/productReducers'

// * Show products by Category/Department
// should contain filters, title, page number change...
const ProductsPage = () => {
	let { category, pageNumber } = useParams()
	const dispatch = useDispatch()

	const [pageDetails, setPageDetails] = useState({})
	const [viewMode, setViewMode] = useState('grid') // grid by default
	const [showSidebar, setShowSidebar] = useState(false) // show fitlers sidebar

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

	const { loading, error, products, page, pages } = useSelector(
		state => state.productList
	)
	const { brands } = useSelector(state => state.filters)

	// const filteredProducts = selectFilteredProducts(products, brands)
	// const filteredProducts = selectFilteredProducts(store.getState())
	const filteredProducts = useSelector(selectFilteredProducts)

	console.log(filteredProducts)

	useEffect(() => {
		let x = getDetails(category)
		setPageDetails(x)
		if (!category) dispatch(listProducts('', pageNumber || 1))
		else dispatch(listProductsByCategory(x.category, pageNumber))

		if (category === 'laptops') setShowSidebar(true)
		else setShowSidebar(false)

		// dispatch(listProducts(1, 1, { category }))
	}, [dispatch, category, pageNumber])

	// useEffect(() => {
	// 	console.log('ProductsPage mounted.')
	// }, [])

	if (error) return <Message variant='danger'>{error}</Message>

	return (
		<div className='page container'>
			<div className='row'>
				<div className='col-md-3 pl-5'>
					<h3>{pageDetails.title}</h3>
				</div>
				<div className='col-md-9'>
					<Toolbar setViewMode={setViewMode} />
				</div>
			</div>

			<div className='row mb-3 mx-n2'>
				{/* Products Grid */}
				<div className={showSidebar ? 'col-md-3' : 'col-2'}>
					{showSidebar && <FiltersSidebar />}
				</div>

				<div className='col'>
					<div className='row bg-white'>
						{loading && <Loader />}
						{!loading && (
							<>
								{filteredProducts.map(product => (
									<Col
										key={product.asin}
										sm={12}
										md={6}
										lg={viewMode === 'grid' ? 4 : 12}
										className={viewMode === 'grid' ? 'mb-4' : 'mb-2'}>
										<ProductItem
											product={product}
											grid={viewMode === 'grid' ? true : false}
										/>
									</Col>
								))}
							</>
						)}
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
