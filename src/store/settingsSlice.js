import { createSlice } from '@reduxjs/toolkit'

const settingsSlice = createSlice({
	name: 'settings',
	initialState: {
		currency: 'usd', // [usd , gbp, eur, iqd , tl]
		language: 'eng', // eng, arb
	},
	reducers: {
		currencyChanged(state, action) {
			state.currency = action.payload
		},
		languageChanged(state, action) {
			state.language = action.payload
		},
	},
})

export const {
	currencyChanged,
	languageChanged,
	// completedTodosCleared,
	// todoAdded,
	// todoColorSelected,
	// todoDeleted,
	// todoToggled,
} = settingsSlice.actions

export default settingsSlice.reducer
