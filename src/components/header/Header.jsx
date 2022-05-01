import React from 'react'
import { Route } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { LinkContainer } from 'react-router-bootstrap'
import { Navbar, Nav, Container, NavDropdown } from 'react-bootstrap'
import SearchBox from './SearchBox'
import { logout } from '../../redux/actions/userActions'
import SearchInput from './SearchInput'
import { Link } from 'react-router-dom'

const Header = () => {
	const dispatch = useDispatch()

	const userLogin = useSelector(state => state.userLogin)
	const { userInfo } = userLogin

	const logoutHandler = () => {
		dispatch(logout())
	}

	return (
		<header>
			<Navbar bg='dark' variant='dark' expand='lg' collapseOnSelect>
				<Container>
					<LinkContainer to='/'>
						<Navbar.Brand
						// className='text-light'
						>
							UNIMART
						</Navbar.Brand>
					</LinkContainer>
					<Navbar.Toggle aria-controls='basic-navbar-nav' />
					<Navbar.Collapse id='basic-navbar-nav'>
						{/* <Route render={({ history }) => <SearchBox history={history} />} /> */}
						<SearchInput />
						<Nav className='ml-auto'>
							<LinkContainer to='/cart'>
								<Nav.Link>
									<i className='fas fa-shopping-cart'></i> Cart
								</Nav.Link>
							</LinkContainer>
							{userInfo ? (
								<NavDropdown title={userInfo.name} id='username'>
									<LinkContainer to='/profile'>
										<NavDropdown.Item>Profile</NavDropdown.Item>
									</LinkContainer>
									<NavDropdown.Item onClick={logoutHandler}>
										Logout
									</NavDropdown.Item>
								</NavDropdown>
							) : (
								<LinkContainer to='/login'>
									<Nav.Link>
										<i className='fas fa-user'></i> Sign In
									</Nav.Link>
								</LinkContainer>
							)}
							{userInfo && userInfo.isAdmin && (
								<NavDropdown title='Admin' id='adminmenu'>
									<LinkContainer to='/admin/userlist'>
										<NavDropdown.Item>Users</NavDropdown.Item>
									</LinkContainer>
									<LinkContainer to='/admin/productlist'>
										<NavDropdown.Item>Products</NavDropdown.Item>
									</LinkContainer>
									<LinkContainer to='/admin/orderlist'>
										<NavDropdown.Item>Orders</NavDropdown.Item>
									</LinkContainer>
								</NavDropdown>
							)}
						</Nav>
					</Navbar.Collapse>
				</Container>
			</Navbar>
			<div className='navbar-footer d-flex container'>
				<NavDropdown
					id='nav-dropdown-dark-example'
					className='flex-fill'
					title='Products'
					menuVariant='dark'>
					<NavDropdown.Item href='#action/3.1'>Computers</NavDropdown.Item>
					<NavDropdown.Item href='#action/3.2'>Laptops</NavDropdown.Item>
					<NavDropdown.Item href='#action/3.3'>Cell Phones</NavDropdown.Item>
					<NavDropdown.Item href='#action/3.3'>Accessories</NavDropdown.Item>
					<NavDropdown.Divider />
					<NavDropdown.Item href='#action/3.4'>Separated link</NavDropdown.Item>
				</NavDropdown>
				<div className='p-2 flex-fill clickable'>
					<Link to='/products/laptops'>Laptops</Link>
				</div>
				<div className='p-2 flex-fill clickable'>
					<Link to='/products/cameras'>Cameras</Link>
				</div>
				<div className='p-2 flex-fill clickable'>Cell Phones</div>
				<div className='p-2 flex-fill clickable'>Accessories</div>
				<div className='p-2 flex-fill clickable'>Gift Cards</div>
			</div>
		</header>
	)
}

const ProductsDropdownItem = () => (
	<NavDropdown.Item href='/products/laptops'>Laptops</NavDropdown.Item>
)

export default Header
