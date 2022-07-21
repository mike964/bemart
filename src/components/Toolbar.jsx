import React from 'react'
import { useDispatch } from 'react-redux'
import SortByDropdown from './products/SortByDropdown'

const Toolbar = ({ setViewMode }) => {
	const dispatch = useDispatch()

	return (
		<div className='d-flex justify-content-center justify-content-sm-between align-items-center pt-2 mb-3 border-bottom'>
			<div className='d-flex flex-wrap'>
				<SortByDropdown />
			</div>
			<button
				onClick={() => {
					dispatch({
						type: 'PRODUCT_LIST_SORT_BY',
						// payload: { key: 'price', order: 'desc' },
						payload: { key: 'rating', order: 'desc' },
					})
				}}>
				Sort
			</button>

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
