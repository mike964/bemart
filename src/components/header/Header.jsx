import React from 'react'
import { Route } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { LinkContainer } from 'react-router-bootstrap'
import { Navbar, Nav, Container, NavDropdown } from 'react-bootstrap'
import SearchInput from './SearchInput'
import { Link } from 'react-router-dom'
import UserDropdown from './UserDropdown'
import CartDropdown from './CartDropdown'
import DepartmentsDropdown from './DepartmentsDropdown'

const Header = () => {
	console.log('Header..')

	const { user } = useSelector(state => state.auth)
	console.log(user)

	return (
		<header>
			<Navbar
				// bg='dark'
				variant='dark'
				expand='lg'
				collapseOnSelect>
				<Container>
					<LinkContainer to='/'>
						<Navbar.Brand className='text-light'>
							<i className='fas fa-gem gold'></i> BEMART
						</Navbar.Brand>
					</LinkContainer>
					<Navbar.Toggle aria-controls='basic-navbar-nav' />
					<Navbar.Collapse id='basic-navbar-nav'>
						{/* <Route render={({ history }) => <SearchBox history={history} />} /> */}
						<SearchInput />
						<Nav className='ml-auto'>
							{/* <LinkContainer to='/cart'>
								<Nav.Link>
									<i className='fas fa-shopping-cart'></i> Cart
								</Nav.Link>
							</LinkContainer> */}
							<CartDropdown />
							{user ? (
								<div className='px-3'>
									<UserDropdown user={user} />
								</div>
							) : (
								<LinkContainer to='/login'>
									<Nav.Link>
										<i className='fas fa-user'></i> Sign In
									</Nav.Link>
								</LinkContainer>
							)}
							{user && user.isAdmin && (
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
							<UserDropdown />
						</Nav>
					</Navbar.Collapse>
				</Container>
			</Navbar>
			<div className='navbar-footer d-flex container'>
				<DepartmentsDropdown />
				<div className='p-2 flex-fill clickable'>
					<Link to='/products/laptops'>Best sellers</Link>
				</div>
				<div className='p-2 flex-fill clickable'>
					<Link to='/products/laptops'>Best Deals</Link>
				</div>
				<div className='p-2 flex-fill clickable'>
					<Link to='/products/laptops'>Laptops</Link>
				</div>
				<div className='p-2 flex-fill clickable'>
					<Link to='/products/cellphones'>Cell Phones</Link>
				</div>
				<div className='p-2 flex-fill clickable'>
					<Link to='/products/cameras'>Cameras</Link>
				</div>
				<div className='p-2 flex-fill clickable'>
					<Link to='/products/accessories'>Accessories</Link>
				</div>
			</div>
		</header>
	)
}

const ProductsDropdownItem = () => (
	<NavDropdown.Item href='/products/laptops'>Laptops</NavDropdown.Item>
)

export default Header
