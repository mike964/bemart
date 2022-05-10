import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { Form, Button, Row, Col } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import Message from '../components/Message'
import Loader from '../components/Loader'
import FormContainer from '../components/FormContainer'
import { login } from '../store/actions/userActions'
import SoicalBtns from '../components/auth/SoicalBtns'

const LoginScreen = ({ location, history }) => {
	const [email, setEmail] = useState('')
	const [password, setPassword] = useState('')

	const dispatch = useDispatch()

	const userLogin = useSelector(state => state.auth)
	const { loading, error, userInfo } = userLogin

	const redirect = location.search ? location.search.split('=')[1] : '/'

	useEffect(() => {
		if (userInfo) {
			history.push(redirect)
		}
	}, [history, userInfo, redirect])

	const submitHandler = e => {
		e.preventDefault()
		dispatch(login(email, password))
	}

	return (
		<FormContainer>
			<h1>Login user</h1>
			{error && <Message variant='danger'>{error}</Message>}
			{loading && <Loader />}
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

			<Row className='py-3'>
				<Col>
					New Customer?{' '}
					<Link to={redirect ? `/register?redirect=${redirect}` : '/register'}>
						Register
					</Link>
				</Col>
			</Row>

			<div className='position-relative mt-4'>
				<hr className='bg-300' />
				<div className='divider-content-center' style={{ color: '#a4a4a4' }}>
					or Log in with
				</div>
			</div>
			<SoicalBtns />
		</FormContainer>
	)
}

export default LoginScreen
