import React, { useState, useEffect } from 'react'
import { Col, Row } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import Paginate from '../components/Paginate'
import ProductItem from '../components/ProductItem'
import { listProducts } from '../store/actions/productActions'

// should contain filters, title, page number chnage...
const ProductsPage = ({ title }) => {
	let { category_slug: slug } = useParams()
	const dispatch = useDispatch()

	const [pageDetails, setPageDetails] = useState({})

	console.log(slug)

	// * Get page details
	function getDetails(slug) {
		switch (slug) {
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
		let x = getDetails(slug)
		setPageDetails(x)
		dispatch(listProducts(1, 1, x.category))
		// dispatch(listProducts(1, 1, { category }))
	}, [slug, dispatch])

	useEffect(() => {
		console.log('ProductsPage mounted.')
	}, [])

	// const products = []

	return (
		<div>
			<div className='mb3'>
				<h3>{pageDetails.title}</h3>
			</div>
			<div className='mb-3'></div>
			<Row>
				{products &&
					products.map(product => (
						<Col key={product._id} sm={12} md={6} lg={4} xl={3}>
							<ProductItem product={product} />
						</Col>
					))}
			</Row>
			<Paginate pages={3} page={1} keyword={''} />
		</div>
	)
}

export default ProductsPage
