import React from 'react'
import { Link } from 'react-router-dom'

const Toolbar = ({ setViewMode }) => {
	return (
		<div className='d-flex justify-content-center justify-content-sm-between align-items-center pt-2 pb-2 mb-3 border-bottom'>
			<div className='d-flex flex-wrap'>
				<div className='d-flex align-items-center flex-nowrap me-3 me-sm-4 pb-3'>
					<label
						className='text-nowrap fs-sm me-2 d-none d-sm-block mr-3'
						htmlFor='sorting'>
						Sort by
					</label>
					<select className='form-control btn-toolbar' id='sorting'>
						<option>Relevance</option>
						<option>Popularity</option>
						<option>Low - Hight Price</option>
						<option>High - Low Price</option>
						<option>Average Rating</option>
					</select>
				</div>
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
