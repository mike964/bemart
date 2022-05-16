import React from 'react'
import { Container, Nav, NavDropdown } from 'react-bootstrap'
import { LinkContainer } from 'react-router-bootstrap'
import SearchInput from './SearchInput'
import UserDropdown from './UserDropdown'
import CartDropdown from './CartDropdown'
import { useSelector } from 'react-redux'

const Navbar = () => {
	const { user } = useSelector(state => state.auth)

	return (
		<Navbar
			// bg='dark'
			variant='dark'
			expand='lg'
			collapseOnSelect>
			<Container>
				<LinkContainer to='/'>
					<Navbar.Brand className='text-light'>
						<i className='fas fa-gem gold'></i> UNIMART
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
	)
}

export default Navbar
