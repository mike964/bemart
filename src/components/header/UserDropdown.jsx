import React from 'react'
import { Link } from 'react-router-dom'
import { NavDropdown } from 'react-bootstrap'
import { LinkContainer } from 'react-router-bootstrap'
import { useDispatch } from 'react-redux'
import { logout } from '../../store/auth/authSlice'
// import { logout } from '../../store/actions/userActions'

const UserDropdown = ({ user }) => {
	const dispatch = useDispatch()

	// console.log(user)
	const logoutHandler = () => {
		dispatch(logout())
	}

	return (
		<>
			{user && (
				<>
					<div className='nav-item dropdown flex-fill '>
						<div
							className='nav-link '
							style={{ fontSize: '1.2rem' }}
							to='#'
							role='button'
							data-toggle='dropdown'>
							{user.name} <i className='fas fa-user ' />
						</div>
						<div className='dropdown-menu'>
							<Link className='dropdown-item' to='/profile'>
								Profile
							</Link>
							<LinkContainer to='/profile'>
								<NavDropdown.Item>Settings</NavDropdown.Item>
							</LinkContainer>
							<NavDropdown.Divider />
							<NavDropdown.Item onClick={logoutHandler}>
								Logout <i className='fas fa-sign-out-alt'></i>
							</NavDropdown.Item>
						</div>
					</div>
				</>
			)}
		</>
	)
}

export default UserDropdown
