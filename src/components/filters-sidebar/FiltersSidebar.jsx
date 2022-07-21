import React, { useState, useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { cellphone_filters, laptop_filters } from '../../constants'
import { filterChanged } from '../../store/filters/filtersSlice'
import FilterItem from './FilterItem'

const FiltersSidebar = ({ category }) => {
	const dispatch = useDispatch()

	const [filters, setFilters] = useState([])

	useEffect(() => {
		// console.log(category)  // laptops, cellphones
		if (category === 'Laptops') {
			setFilters(laptop_filters)
		} else if (category === 'Cell-Phones') {
			setFilters(cellphone_filters)
		} else {
			setFilters([])
		}
	}, [category])

	const renderFilters = () => {
		return filters.map((filter, index) => (
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
