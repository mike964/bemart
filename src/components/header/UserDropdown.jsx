import React from 'react'
import { Link } from 'react-router-dom'
import { NavDropdown } from 'react-bootstrap'
import { LinkContainer } from 'react-router-bootstrap'
import { useDispatch } from 'react-redux'
import { logout } from '../../store/auth/authSlice'
// import { logout } from '../../store/actions/userActions'

const UserDropdown = ({ user }) => {
	const dispatch = useDispatch()

	console.log(user)
	const logoutHandler = () => {
		dispatch(logout())
	}

	return (
		<>
			{user && (
				<>
					<NavDropdown title={user.name} id='username'>
						<LinkContainer to='/profile'>
							<NavDropdown.Item>Profile</NavDropdown.Item>
						</LinkContainer>
						<LinkContainer to='/profile'>
							<NavDropdown.Item>Settings</NavDropdown.Item>
						</LinkContainer>
						<NavDropdown.Divider />
						<NavDropdown.Item onClick={logoutHandler}>
							Logout <i className='fas fa-sign-out-alt'></i>
						</NavDropdown.Item>
					</NavDropdown>
				</>
			)}
		</>
	)
}

export default UserDropdown
