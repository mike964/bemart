import React, { useEffect } from 'react'
import { Col, Row } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import Paginate from '../components/Paginate'
import Product from '../components/Product'
import { listProducts } from '../redux/actions/productActions'

// should contain filters, title, page number chnage...
const ProductsPage = ({ title }) => {
	let { category } = useParams()
	const dispatch = useDispatch()

	const productList = useSelector(state => state.productList)
	const { loading, error, products, page, pages } = productList

	useEffect(() => {
		dispatch(listProducts(1, 1, { category: 'Laptops' }))
	}, [])

	// const products = []

	return (
		<div>
			<div className='mb3'>
				<h3>{category}</h3>
				<h3>{title}</h3>
			</div>
			<div className='mb-3'></div>
			<Row>
				{products &&
					products.map(product => (
						<Col key={product._id} sm={12} md={6} lg={4} xl={3}>
							<Product product={product} />
						</Col>
					))}
			</Row>
			<Paginate pages={3} page={1} keyword={''} />
		</div>
	)
}

export default ProductsPage
