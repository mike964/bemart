import React from 'react'
import { useDispatch } from 'react-redux'
import { laptop_filters } from '../../constants'
import {
	brandFilterChanged,
	osFilterChanged,
} from '../../store/filters/filtersSlice'
import FilterItem from './FilterItem'

const FiltersSidebar = () => {
	const dispatch = useDispatch()

	const onOsChange = (os, changeType) =>
		dispatch(osFilterChanged(os, changeType))

	// get filters from redux store

	const renderFilters = () => {
		return laptop_filters.map((item, index) => (
			<div className='mb-2 pb-3 border-bottom'>
				<h6 className='widget-title'>{item.name}</h6>
				{item.options.map(opt => (
					<FilterItem
						// name='msi'
						name={opt}
						label={opt}
						onChange={(brand, changeType) =>
							dispatch(brandFilterChanged(brand, changeType))
						}
					/>
				))}
			</div>
		))
	}

	return (
		<aside className='filters-sidebar'>
			<form>
				{/* widget-categories */}
				<div className='mb-3'>{renderFilters()}</div>

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
