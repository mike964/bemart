import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { Container } from 'react-bootstrap'
import Header from './components/header/Header'
import Footer from './components/Footer'
import HomeScreen from './pages/HomeScreen.jsx'
import ProductScreen from './pages/ProductScreen'
import CartScreen from './pages/CartScreen'
import LoginScreen from './pages/LoginScreen'
import RegisterScreen from './pages/RegisterScreen'
import ProfileScreen from './pages/ProfileScreen'
import ShippingScreen from './pages/ShippingScreen'
import PaymentScreen from './pages/PaymentScreen'
import PlaceOrderScreen from './pages/PlaceOrderScreen'
import OrderScreen from './pages/OrderScreen'
import UserListScreen from './pages/UserListScreen'
import UserEditScreen from './pages/UserEditScreen'
import ProductListScreen from './pages/ProductListScreen'
import ProductEditScreen from './pages/ProductEditScreen'
import OrderListScreen from './pages/OrderListScreen'
import SearchInput from './components/header/SearchInput'
// import Navbar2 from './components/Navbar2'

const App = () => {
	return (
		<Router>
			<Header />
			{/* <Navbar2 /> */}
			<main className='pyy-3'>
				<Container>
					<Route path='/order/:id' component={OrderScreen} />
					<Route path='/shipping' component={ShippingScreen} />
					<Route path='/payment' component={PaymentScreen} />
					<Route path='/placeorder' component={PlaceOrderScreen} />
					<Route path='/login' component={LoginScreen} />
					<Route path='/register' component={RegisterScreen} />
					<Route path='/profile' component={ProfileScreen} />
					<Route path='/product/:id' component={ProductScreen} />
					<Route path='/cart/:id?' component={CartScreen} />
					<Route path='/admin/userlist' component={UserListScreen} />
					<Route path='/admin/user/:id/edit' component={UserEditScreen} />
					<Route
						path='/admin/productlist'
						component={ProductListScreen}
						exact
					/>
					<Route
						path='/admin/productlist/:pageNumber'
						component={ProductListScreen}
						exact
					/>
					<Route path='/admin/product/:id/edit' component={ProductEditScreen} />
					<Route path='/admin/orderlist' component={OrderListScreen} />
					<Route path='/search/:keyword' component={HomeScreen} exact />
					<Route path='/page/:pageNumber' component={HomeScreen} exact />
					<Route
						path='/search/:keyword/page/:pageNumber'
						component={HomeScreen}
						exact
					/>
					<Route path='/' component={HomeScreen} exact />
				</Container>
			</main>
			<Footer />
		</Router>
	)
}

export default App
