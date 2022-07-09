import React, { useEffect, useState } from 'react'
import { Form, Button } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import FormContainer from '../components/FormContainer'
import CheckoutSteps from '../components/CheckoutSteps'
import { saveShippingAddress } from '../store/cart/cartSlice'

const ShippingScreen = ({ history }) => {
	// const  { shippingAddress } = useSelector(state => state.cart)
	const shippingAddress = useSelector(state => state.auth.user.shipping_address)

	/*
	const [address, setAddress] = useState(shippingAddress.address)
	const [city, setCity] = useState(shippingAddress.city)
	const [postalCode, setPostalCode] = useState(shippingAddress.postalCode)
	const [country, setCountry] = useState(shippingAddress.country)
  */
	const [address, setAddress] = useState('')
	const [city, setCity] = useState('')
	const [postalCode, setPostalCode] = useState('')
	const [country, setCountry] = useState('')

	const dispatch = useDispatch()

	const submitHandler = e => {
		e.preventDefault()
		dispatch(
			saveShippingAddress({
				address,
				city,
				postalCode,
				country,
			})
		)
		history.push('/payment')
	}

	useEffect(() => {
		if (shippingAddress.address) {
			setAddress(shippingAddress.address)
			setCity(shippingAddress.city)
			setPostalCode(shippingAddress.postalCode)
			setCountry(shippingAddress.country)
		}
	}, [shippingAddress])

	return (
		<div className='page'>
			<FormContainer>
				<CheckoutSteps step1 step2 />
				<h1>Shipping</h1>
				<Form onSubmit={submitHandler}>
					<Form.Group controlId='address'>
						<Form.Label>Address</Form.Label>
						<Form.Control
							type='text'
							placeholder='Enter address'
							value={address}
							required
							onChange={e => setAddress(e.target.value)}></Form.Control>
					</Form.Group>

					<Form.Group controlId='city'>
						<Form.Label>City</Form.Label>
						<Form.Control
							type='text'
							placeholder='Enter city'
							value={city}
							required
							onChange={e => setCity(e.target.value)}
						/>
					</Form.Group>

					<Form.Group controlId='postalCode'>
						<Form.Label>Postal Code</Form.Label>
						<Form.Control
							type='text'
							placeholder='Enter postal code'
							value={postalCode}
							required
							onChange={e => setPostalCode(e.target.value)}></Form.Control>
					</Form.Group>

					<Form.Group controlId='country'>
						<Form.Label>Country</Form.Label>
						<Form.Control
							type='text'
							placeholder='Enter country'
							value={country}
							required
							onChange={e => setCountry(e.target.value)}></Form.Control>
					</Form.Group>

					<Button type='submit' variant='primary'>
						Continue
					</Button>
				</Form>
			</FormContainer>
		</div>
	)
}

export default ShippingScreen
