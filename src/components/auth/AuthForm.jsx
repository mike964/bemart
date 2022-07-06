import React, { useState } from 'react'
import { Form } from 'react-bootstrap'
import { useDispatch } from 'react-redux'
import { login } from '../../store/auth/authSlice'

// This form is used both for login and logout (sign in - sign up)
const AuthForm = () => {
	const [email, setEmail] = useState('')
	const [password, setPassword] = useState('')

	const dispatch = useDispatch()
	// const navigate = useNavigate()   // router v6

	const submitHandler = e => {
		e.preventDefault()
		dispatch(login({ email, password }))
	}

	return (
		<Form onSubmit={submitHandler}>
			<Form.Group controlId='email'>
				<Form.Control
					type='email'
					placeholder='Enter email'
					value={email}
					onChange={e => setEmail(e.target.value)}></Form.Control>
			</Form.Group>

			<Form.Group controlId='password'>
				<Form.Control
					type='password'
					placeholder='Password'
					value={password}
					onChange={e => setPassword(e.target.value)}></Form.Control>
			</Form.Group>

			<div className='row flex-between-center mb-3'>
				<div className='col-auto'>
					<div className='form-check mb-0'>
						<input
							className='form-check-input'
							type='checkbox'
							id='card-checkbox'
							defaultChecked='checked'
						/>
						<label className='form-check-label mb-0' htmlFor='card-checkbox'>
							Remember me
						</label>
					</div>
				</div>
				<div className='col-auto'>
					<a
						className='fs--1'
						href='../../../pages/authentication/card/forgot-password.html'>
						Forgot Password?
					</a>
				</div>
			</div>

			<button className='btn btn-primary btn-block' type='submit'>
				Sign in
			</button>
		</Form>
	)
}

export default AuthForm
