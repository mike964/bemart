import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { Form, Button, Row, Col } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import Message from '../components/Message'
import Loader from '../components/Loader'
import FormContainer from '../components/FormContainer'
import SocialBtns from '../components/auth/SocialBtns'
import { login } from '../store/auth/authSlice'
import AuthForm from '../components/auth/AuthForm'

const LoginScreen = ({ location, history }) => {
	const [email, setEmail] = useState('')
	const [password, setPassword] = useState('')

	const dispatch = useDispatch()
	// const navigate = useNavigate()   // router v6

	const { loading, error, user } = useSelector(state => state.auth)
	const redirect = location.search ? location.search.split('=')[1] : '/'

	useEffect(() => {
		if (user) {
			history.push(redirect)
		}
	}, [history, user, redirect])

	const submitHandler = e => {
		e.preventDefault()
		dispatch(login({ email, password }))
	}
	return (
		<div className='auth-page page' style={{ background: '#f6f6f6' }}>
			<div className='auth-form-container'>
				<div className='mb-3'>
					<h3 className='text-secondary'>Log in user</h3>
				</div>
				{error && <Message variant='danger'>{error}</Message>}
				{loading && <Loader />}
				{/* Login form */}
				<div className='x'>
					<AuthForm />
				</div>

				<div className='position-relative mt-4'>
					<hr className='bg-300' />
					<div className='divider-content-center' style={{ color: '#a4a4a4' }}>
						or Log in with
					</div>
				</div>
				<SocialBtns />

				<Row className='py-3'>
					<Col>
						New Customer?{' '}
						<Link
							to={redirect ? `/register?redirect=${redirect}` : '/register'}>
							Register
						</Link>
					</Col>
				</Row>
				<div className='p-3'>
					<p className='font-weight-light'>
						Use 'tim@mail.com' and '123' as password
					</p>
				</div>
			</div>
		</div>
	)
}

export default LoginScreen
