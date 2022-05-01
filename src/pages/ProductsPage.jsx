import React from 'react'
import { useParams } from 'react-router-dom'

// should contain filters, title, page number chnage...
const ProductsPage = ({ title }) => {
	let { category } = useParams()

	return (
		<div>
			<mb className='3'>
				<h3>{category}</h3>
				<h3>{title}</h3>
			</mb>
		</div>
	)
}

export default ProductsPage
