import React from 'react'
import { useDispatch } from 'react-redux'
import { laptop_filters } from '../../constants'
import {
	brandFilterChanged,
	filterChanged,
} from '../../store/filters/filtersSlice'
import FilterItem from './FilterItem'

const FiltersSidebar = () => {
	const dispatch = useDispatch()

	const renderFilters = () => {
		return laptop_filters.map((filter, index) => (
			<div key={index} className='mb-2 pb-3 border-bottom'>
				<h6 className='widget-title'>{filter.name}</h6>
				{filter.options.map(opt => (
					<FilterItem
						key={opt}
						// name='msi'
						name={opt}
						label={opt}
						onChange={(filterValue, changeType) =>
							dispatch(filterChanged(filterValue, changeType, filter.group))
						}
					/>
				))}
			</div>
		))
	}

	return (
		<aside className='filters-sidebar'>
			<div className='mb-3'>{renderFilters()}</div>
		</aside>
	)
}

export default FiltersSidebar
