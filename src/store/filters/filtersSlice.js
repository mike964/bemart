import { createSlice } from '@reduxjs/toolkit'

export const StatusFilters = {
	All: 'all',
	Active: 'active',
	Completed: 'completed',
}

const laptopFilters = {
	Brand: '',
	OS: '',
	Processor: '',
}

const initialState = {
	status: StatusFilters.All,
	colors: [],
	brands: [],
	...laptopFilters,
}

const filtersSlice = createSlice({
	name: 'filters',
	initialState,
	reducers: {
		statusFilterChanged(state, action) {
			state.status = action.payload
		},
		brandFilterChanged: {
			reducer(state, action) {
				let { brand, changeType } = action.payload
				const { brands } = state
				switch (changeType) {
					case 'added': {
						if (!brands.includes(brand)) {
							brands.push(brand)
						}
						break
					}
					case 'removed': {
						state.brands = brands.filter(
							existingColor => existingColor !== brand
						)
						break
					}
					default:
						return
				}
			},
			prepare(brand, changeType) {
				return {
					payload: { brand, changeType },
				}
			},
		},
	},
})

export const { brandFilterChanged, statusFilterChanged } = filtersSlice.actions

export default filtersSlice.reducer
