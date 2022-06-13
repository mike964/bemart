import React from 'react'
import { Form } from 'react-bootstrap'
import { useDispatch } from 'react-redux'
import { brandFilterChanged } from '../store/filters/filtersSlice'
import FilterItem from './FilterItem'

const FiltersSidebar = () => {
	const dispatch = useDispatch()

	const onBrandChange = (brand, changeType) =>
		dispatch(brandFilterChanged(brand, changeType))

	return (
		<aside className='  order-lg-1 order-2'>
			<form action='action_page.php'>
				{/* widget-categories */}
				<div className='border-bottom mb-3'>
					<h6 className='widget-title border-left mb-3'>Brand</h6>
					<FilterItem label='apple' onChange={onBrandChange} />
					<FilterItem label='msi' onChange={onBrandChange} />
					<FilterItem label='asus' onChange={onBrandChange} />
					<FilterItem label='lenovo' onChange={onBrandChange} />
					<FilterItem label='acer' onChange={onBrandChange} />
				</div>

				<div className='border-bottom  mb-3'>
					<h6 className='widget-title border-left mb-3'>Operating System</h6>
					<Form.Group className='mb-2' controlId='formBasicCheckbox'>
						<Form.Check type='checkbox' label='Windows' />
					</Form.Group>
					<Form.Group className='mb-2' controlId='formBasicCheckbox'>
						<Form.Check type='checkbox' label='Mac OS' />
					</Form.Group>
					<FilterItem label='Chrome OS' />
				</div>

				<div className='mb-3'>
					<h6 className='widget-title border-left mb-3'>Processor</h6>
					<FilterItem label='Intel Core i7' />
					<FilterItem label='Intel Core i5' />
					<FilterItem label='Intel Core i3' />
					<FilterItem label='Apple M1' />
				</div>
			</form>
		</aside>
	)
}

export default FiltersSidebar
