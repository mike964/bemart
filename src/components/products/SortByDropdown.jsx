import React from 'react'

const SortByDropdown = () => {
	// * Select options
	const options = [
		{ value: 'featured', text: 'Featured', key: 'key' },
		{ value: 'featured', text: 'Price: Low to high', key: 'key' },
		{ value: 'featured', text: 'Price: Hight to low', key: 'key' },
		{ value: 'featured', text: 'Average Review', key: 'key' },
		{ value: 'featured', text: 'Newest Arival', key: 'key' },
	]

	return (
		<div className='d-flex align-items-center flex-nowrap me-3 me-sm-4 pb-3'>
			<label
				className='text-nowrap fs-sm me-2 d-none d-sm-block mr-3'
				htmlFor='sorting'>
				Sort by
			</label>
			<select className='form-control btn-toolbar' id='sorting'>
				{options.map((item, i) => (
					<option key={i}>{item.text}</option>
				))}
			</select>
		</div>
	)
}

export default SortByDropdown
