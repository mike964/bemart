import axios from 'axios'
import fakeApi from '../../_api/fakeApi'

const API_URL = '/api/users/'

// Register user
const register = async userData => {
	const response = await axios.post(API_URL, userData)

	if (response.data) {
		localStorage.setItem('user', JSON.stringify(response.data))
	}
	return response.data
}

// Login user
const login = async userData => {
	console.log(userData)
	// const response = await axios.post(API_URL + 'login', userData)
	const { data } = await fakeApi('/login', userData)
	console.log(data)

	// if (response.data) {
	if (data._id) {
		// localStorage.setItem('user', JSON.stringify(response.data))
		localStorage.setItem('user', JSON.stringify(data))
	}
	// return response.data
	return data
}

// Logout user
const logout = () => localStorage.removeItem('user')

const authService = {
	register,
	logout,
	login,
}

export default authService
