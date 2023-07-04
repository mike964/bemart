import React from 'react'
import { useSelector } from 'react-redux'
import { LinkContainer } from 'react-router-bootstrap'
import { Navbar, Nav, Container, NavDropdown } from 'react-bootstrap'
import SearchInput from './SearchInput'
import { Link } from 'react-router-dom'
import UserDropdown from './UserDropdown'
import CartDropdown from './CartDropdown'
import DepartmentsDropdown from './DepartmentsDropdown'
import CurrencyDropdown from './CurrencyDropdown'
import LanguageDropdown from './LanguageDropdown'

const Header = () => {
  // console.log('Header..')

  const { user } = useSelector( state => state.auth )
  const { r } = useSelector( state => state.strings )
  // console.log(user)

  return (
    <header>
      <Navbar
        // bg='dark'
        variant='dark'
      //expand='lg'
      //	collapseOnSelect
      >
        <Container>
          <LinkContainer to='/'>
            <Navbar.Brand className='text-light'>
              <i className='fas fa-gem gold'></i> BEMART
            </Navbar.Brand>
          </LinkContainer>
          <Navbar.Toggle aria-controls='basic-navbar-nav' />
          {/* <Route render={({ history }) => <SearchBox history={history} />} /> */ }
          <SearchInput />
          <Nav className='ml-auto'>
            <LanguageDropdown />
            <CartDropdown />
            <div className='px-3 '>
              { user ? (
                <UserDropdown user={ user } />
              ) : (
                <LinkContainer to='/login'>
                  <Nav.Link>
                    <i className='fas fa-user'></i> { r.sign_in }
                  </Nav.Link>
                </LinkContainer>
              ) }
            </div>
            { user && user.isAdmin && (
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
            ) }
            <UserDropdown />
          </Nav>
        </Container>
      </Navbar>
      <div className='navbar-footer d-flex container'>
        <DepartmentsDropdown title={ r.departments } />
        <div className='p-2 flex-fill clickable'>
          <Link to='/products'>{ r.best_sellers }</Link>
        </div>
        <div className='p-2 flex-fill clickable'>
          <Link to='/hot-deals'>{ r.hot_deals }</Link>
        </div>
        <div className='p-2 flex-fill clickable'>
          <Link to='/products/Laptops'>{ r.laptops }</Link>
        </div>
        <div className='p-2 flex-fill clickable'>
          <Link to='/products/Cell-Phones'>{ r.cell_phones }</Link>
        </div>

        <CurrencyDropdown />
      </div>
    </header>
  )
}

export default Header
