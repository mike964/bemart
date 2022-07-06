import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { Form, Button, Row, Col } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import Message from '../components/Message'
import Loader from '../components/Loader'
import FormContainer from '../components/FormContainer'
import { register } from '../store/actions/userActions'
import SocialBtns from '../components/auth/SocialBtns'

const RegisterScreen = ({ location, history }) => {
	const [name, setName] = useState('')
	const [email, setEmail] = useState('')
	const [password, setPassword] = useState('')
	const [confirmPassword, setConfirmPassword] = useState('')
	const [message, setMessage] = useState(null)

	const dispatch = useDispatch()

	const { loading, error, userInfo } = useSelector(state => state.auth)
	const redirect = location.search ? location.search.split('=')[1] : '/'

	useEffect(() => {
		if (userInfo) {
			history.push(redirect)
		}
	}, [history, userInfo, redirect])

	const submitHandler = e => {
		e.preventDefault()
		if (password !== confirmPassword) {
			setMessage('Passwords do not match')
		} else {
			dispatch(register(name, email, password))
		}
	}

	return (
		<div className='row '>
			<div className='auth-form-container'>
				<div className='mb-3'>
					<h3 className='text-secondary'>Register new user</h3>
				</div>
				{message && <Message variant='danger'>{message}</Message>}
				{error && <Message variant='danger'>{error}</Message>}
				{loading && <Loader />}
				<Form onSubmit={submitHandler}>
					<Form.Group controlId='name'>
						<Form.Control
							type='name'
							placeholder='Name'
							value={name}
							onChange={e => setName(e.target.value)}></Form.Control>
					</Form.Group>

					<Form.Group controlId='email'>
						<Form.Control
							type='email'
							placeholder='Email'
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

					<Form.Group controlId='confirmPassword'>
						<Form.Control
							type='password'
							placeholder='Confirm password'
							value={confirmPassword}
							onChange={e => setConfirmPassword(e.target.value)}></Form.Control>
					</Form.Group>

					<Button type='submit' variant='primary' block>
						Sign up
					</Button>
				</Form>

				<div className='position-relative mt-4'>
					<hr className='bg-300' />
					<div className='divider-content-center' style={{ color: '#a4a4a4' }}>
						or Sign up with
					</div>
				</div>
				<SocialBtns />

				<Row className='py-3'>
					<Col>
						Have an Account?{' '}
						<Link to={redirect ? `/login?redirect=${redirect}` : '/login'}>
							Login
						</Link>
					</Col>
				</Row>
			</div>
		</div>
	)
}

export default RegisterScreen
