import React from 'react'
import { useDispatch } from 'react-redux'
import {
	brandFilterChanged,
	osFilterChanged,
} from '../store/filters/filtersSlice'
import FilterItem from './FilterItem'

const FiltersSidebar = () => {
	const dispatch = useDispatch()

	const onBrandChange = (brand, changeType) =>
		dispatch(brandFilterChanged(brand, changeType))
	const onOsChange = (os, changeType) =>
		dispatch(osFilterChanged(os, changeType))

	return (
		<aside className='  order-lg-1 order-2'>
			<form action='action_page.php'>
				{/* widget-categories */}
				<div className='border-bottom mb-3'>
					<h6 className='widget-title mb-3'>Brand</h6>
					<FilterItem name='apple' onChange={onBrandChange} />
					<FilterItem name='msi' label='MSI' onChange={onBrandChange} />
					<FilterItem name='asus' onChange={onBrandChange} />
					<FilterItem name='lenovo' onChange={onBrandChange} />
					<FilterItem name='acer' onChange={onBrandChange} />
				</div>

				<div className='border-bottom  mb-3'>
					<h6 className='widget-title mb-3'>Operating System</h6>
					<FilterItem name='windows' onChange={onOsChange} />
					<FilterItem name='mac os' label='Mac OS' onChange={onOsChange} />
					<FilterItem
						name='chrome os'
						label='Chrome OS'
						onChange={onOsChange}
					/>
				</div>

				<div className='mb-3'>
					<h6 className='widget-title mb-3'>Processor</h6>
					<FilterItem name='intel core i7' label='Intel Core i7' />
					<FilterItem name='intel core i5' label='Intel Core i5' />
					<FilterItem name='intel core i3' label='Intel Core i3' />
					<FilterItem name='apple m1' label='Apple M1' />
				</div>
			</form>
		</aside>
	)
}

export default FiltersSidebar
