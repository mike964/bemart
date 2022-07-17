import React from 'react'
import ProductsSortByDropdown from './ProductsSortByDropdown'

const Toolbar = ({ setViewMode }) => {
	return (
		<div className='d-flex justify-content-center justify-content-sm-between align-items-center pt-2 mb-3 border-bottom'>
			<div className='d-flex flex-wrap'>
				<ProductsSortByDropdown />
			</div>

			<div className='btn-group mr-2'>
				<button
					className='btn btn-sm btn-outline-secondary'
					onClick={() => setViewMode('grid')}>
					{' '}
					<i className='fas fa-th' />
				</button>
				<button
					className='btn btn-sm btn-outline-secondary'
					onClick={() => setViewMode('list')}>
					<i className='fas fa-list' />
				</button>
			</div>
		</div>
	)
}

export default Toolbar
