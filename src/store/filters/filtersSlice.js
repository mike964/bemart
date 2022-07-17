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
	opSystems: [], // operating systems (windows, mac os, chrome os)
	processors: [],
	screens: [], // 14, 15~15.9  , 16+
	prices: [],
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
		filterChanged: {
			reducer(state, action) {
				let { newFilter, changeType, group } = action.payload

				switch (changeType) {
					case 'added': {
						if (state[group] && !state[group].includes(newFilter)) {
							state[group].push(newFilter)
						} else {
							return
						}
						break
					}
					case 'removed': {
						if (state[group]) {
							state[group] = state[group].filter(
								existingFilter => existingFilter !== newFilter
							)
						}
						break
					}
					default:
						return
				}
			},
			prepare(newFilter, changeType, group) {
				return {
					payload: { newFilter, changeType, group },
				}
			},
		},
	},
})

export const { brandFilterChanged, filterChanged } = filtersSlice.actions

export default filtersSlice.reducer
