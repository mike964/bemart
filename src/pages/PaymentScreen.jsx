import React, { useState } from 'react'
import { Form, Button, Col } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import FormContainer from '../components/FormContainer'
import CheckoutSteps from '../components/CheckoutSteps'
import { savePaymentMethod } from '../store/cart/cartSlice'

const PaymentScreen = ({ history }) => {
	const cart = useSelector(state => state.cart)
	const { shippingAddress } = cart

	if (!shippingAddress.address) {
		history.push('/shipping')
	}

	const [paymentMethod, setPaymentMethod] = useState('PayPal')

	const dispatch = useDispatch()

	const submitHandler = e => {
		e.preventDefault()
		dispatch(savePaymentMethod(paymentMethod))
		history.push('/placeorder')
	}

	return (
		<div className='page'>
			<FormContainer>
				<CheckoutSteps step1 step2 step3 />
				<h1>Payment Method</h1>
				<Form onSubmit={submitHandler}>
					<Form.Group>
						<Form.Label as='legend'>Select Method</Form.Label>
						<Col>
							<Form.Check
								type='radio'
								label='PayPal'
								id='paypal'
								name='paymentMethod'
								value='paypal'
								// checked
								onChange={e => setPaymentMethod(e.target.value)}></Form.Check>
							<Form.Check
								type='radio'
								// label='Stripe'
								label='Credit Card'
								id='Stripe'
								name='paymentMethod'
								value='Credit Card'
								onChange={e => setPaymentMethod(e.target.value)}></Form.Check>
						</Col>
					</Form.Group>

					<Button type='submit' variant='primary'>
						Continue
					</Button>
				</Form>
			</FormContainer>
		</div>
	)
}

export default PaymentScreen
