import React from 'react'

const ProductsSortByDropdown = () => {
	return (
		<div className='d-flex align-items-center flex-nowrap me-3 me-sm-4 pb-3'>
			<label
				className='text-nowrap fs-sm me-2 d-none d-sm-block mr-3'
				htmlFor='sorting'>
				Sort by
			</label>
			<select className='form-control btn-toolbar' id='sorting'>
				<option>Featured</option>
				<option>Lowest Price</option>
				<option>Highest Price</option>
				<option>Average Rating</option>
			</select>
		</div>
	)
}

export default ProductsSortByDropdown
