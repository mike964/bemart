import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

const CartDropdown = () => {
	const { cartItems } = useSelector(state => state.cart)

	// const cartItemsCount = cartItems.length

	// calculation total of qty of items
	const cartItemsCount = cartItems.reduce(
		(acc, item) => acc + Number(item.qty),
		0
	)

	return (
		<div className='navbar-tool dropdown'>
			<Link
				className='navbar-tool-icon-box bg-secosndary dropdown-toggle'
				to='/cart'>
				<i className='navbar-tool-icon fas fa-shopping-cart' />
				{cartItems.length > 0 && (
					<div className='yt-spec-icon-badge-shape__badge '>
						{cartItemsCount}
					</div>
				)}
			</Link>

			<div className='dropdown-menu' aria-labelledby='navbarDropdown'>
				{cartItems.length > 0 ? (
					<>
						{cartItems.map(item => (
							<span className='dropdown-item'>
								{(item.title || item.name).slice(0, 32)}..
							</span>
						))}
						<div className='dropdown-item text-center'>
							<Link className='text-success  ' to='/cart'>
								View Cart
							</Link>
						</div>
					</>
				) : (
					<span className='dropdown-item'>Cart is empty</span>
				)}
			</div>
		</div>
	)
}

export default CartDropdown
