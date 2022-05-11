import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import authService from './authService'

// Get user from localstorage
const user = JSON.parse(localStorage.getItem('user'))

const initialState = {
	user: user ? user : null,
	isError: false,
	succeeded: false,
	loading: false, // when register action is pending
	message: '',
}

// Register new user
export const register = createAsyncThunk(
	'auth/register',
	async (user, thunkAPI) => {
		try {
			return await authService.register(user)
		} catch (error) {
			const message =
				(error.response &&
					error.response.data &&
					error.response.data.message) ||
				error.message ||
				error.toString()

			return thunkAPI.rejectWithValue(message)
		}
	}
)

// Login user
export const login = createAsyncThunk('auth/login', async (user, thunkAPI) => {
	try {
		const x = await authService.login(user)
		// console.log(x)  // {...user}
		// return x
		return { ...x, token: x._id }
	} catch (error) {
		const message =
			(error.response && error.response.data && error.response.data.message) ||
			error.message ||
			error.toString()

		return thunkAPI.rejectWithValue(message)
	}
})

// Logout user
export const logout = createAsyncThunk('auth/logout', async () => {
	await authService.logout()
})

export const authSlice = createSlice({
	name: 'auth',
	initialState,
	reducers: {
		reset: state => {
			state.loading = false
			state.error = false
			state.succeeded = false
			state.message = ''
		},
	},
	extraReducers: builder => {
		builder
			.addCase(register.pending, state => {
				state.loading = true
			})
			.addCase(register.fulfilled, (state, action) => {
				state.loading = false
				state.succeeded = true
				state.user = action.payload
			})
			.addCase(register.rejected, (state, action) => {
				state.loading = false
				state.error = true
				state.message = action.payload
				state.user = null
			})
			.addCase(login.pending, state => {
				state.loading = true
			})
			.addCase(login.fulfilled, (state, action) => {
				state.loading = false
				state.succeeded = true
				state.user = action.payload
			})
			.addCase(login.rejected, (state, action) => {
				state.loading = false
				state.error = true
				state.message = action.payload
				state.user = null
			})
			.addCase(logout.fulfilled, state => {
				state.user = null
			})
	},
})

export const { reset } = authSlice.actions
export default authSlice.reducer
