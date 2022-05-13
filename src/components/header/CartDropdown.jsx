import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

const CartDropdown = () => {
	const { cartItems } = useSelector(state => state.cart)
	return (
		<div className='navbar-tool dropdown'>
			<Link
				className='navbar-tool-icon-box bg-secosndary dropdown-toggle'
				to='/cart'>
				<i className='navbar-tool-icon fas fa-shopping-cart' />
				{cartItems.length > 0 && (
					<div className='yt-spec-icon-badge-shape__badge '>
						{' '}
						{cartItems.length}
					</div>
				)}
			</Link>
		</div>
	)
}

export default CartDropdown
