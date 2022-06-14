import { createSlice } from '@reduxjs/toolkit'

export const StatusFilters = {
	All: 'all',
	Active: 'active',
	Completed: 'completed',
}

// const laptopFilters = {
// 	Brand: '',
// 	OS: '',
// 	Processor: '',
// }

const initialState = {
	status: StatusFilters.All,
	colors: [],
	brands: [],
	oSystems: [], // operating systems (windows, mac os, chrome os)
	processors: [],
	screens: [], // 14, 15~15.9  , 16+
	// ...laptopFilters,
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

				switch (changeType) {
					case 'added': {
						if (!state.brands.includes(brand)) {
							state.brands.push(brand)
						}
						break
					}
					case 'removed': {
						state.brands = state.brands.filter(
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
		osFilterChanged: {
			reducer(state, action) {
				let { os, changeType } = action.payload

				switch (changeType) {
					case 'added': {
						if (!state.oSystems.includes(os)) {
							state.oSystems.push(os)
						}
						break
					}
					case 'removed': {
						state.oSystems = state.oSystems.filter(
							existingColor => existingColor !== os
						)
						break
					}
					default:
						return
				}
			},
			prepare(os, changeType) {
				return {
					payload: { os, changeType },
				}
			},
		},
	},
})

export const { brandFilterChanged, osFilterChanged } = filtersSlice.actions

export default filtersSlice.reducer
