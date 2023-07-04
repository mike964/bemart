import { createSlice } from '@reduxjs/toolkit'
import { strings_arb, strings_eng } from '../constants/strings'

const stringsSlice = createSlice({
	name: 'strings',
	initialState: {
		r: strings_eng,
	},
	reducers: {
		setNewLanguage(state, action) {
			if (action.payload === 'arb') {
				state.r = strings_arb
			}
			if (action.payload === 'eng') {
				state.r = strings_eng
			}
		},
	},
})

export const { setNewLanguage } = stringsSlice.actions

export default stringsSlice.reducer
