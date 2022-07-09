import React from 'react'
import { BrowserRouter, Route } from 'react-router-dom'
import Header from './components/header/Header'
import Footer from './components/footer/Footer'
import HomeScreen from './pages/HomeScreen.jsx'
import ProductScreen from './pages/ProductScreen'
import CartScreen from './pages/CartScreen'
import LoginScreen from './pages/LoginScreen'
import RegisterScreen from './pages/RegisterScreen'
// import ProfileScreen from './pages/ProfileScreen'
import ShippingScreen from './pages/ShippingScreen'
import PaymentScreen from './pages/PaymentScreen'
import PlaceOrderScreen from './pages/PlaceOrderScreen'
// import OrderScreen from './pages/OrderScreen'
// import UserListScreen from './pages/UserListScreen'
// import UserEditScreen from './pages/UserEditScreen'
// import ProductListScreen from './pages/ProductListScreen'
// import ProductEditScreen from './pages/ProductEditScreen'
// import OrderListScreen from './pages/OrderListScreen'
// import SearchInput from './components/header/SearchInput'
import ProductsPage from './pages/ProductsPage'
import { Switch } from 'react-router-dom'
// import Navbar2 from './components/Navbar2'

const App = () => {
	// For navigation in header
	const productPages = [
		// products by category pages
		{ title: 'Laptops', slug: 'laptops' },
		{ title: 'Cell Phones', slug: 'cellphones' },
		{ title: 'Cameras', slug: 'cameras' },
	]

	return (
		<BrowserRouter>
			<Header />
			{/* <Navbar2 /> */}
			<main className='x'>
				<Switch>
					{/* <Route path='/order/:id' component={OrderScreen} /> */}
					<Route path='/shipping' component={ShippingScreen} />
					<Route path='/payment' component={PaymentScreen} />
					<Route path='/placeorder' component={PlaceOrderScreen} />
					<Route path='/login' component={LoginScreen} />
					<Route path='/register' component={RegisterScreen} />
					{/* <Route path='/profile' component={ProfileScreen} /> */}
					<Route path='/product/:id' component={ProductScreen} />
					<Route path='/cart/:id?' component={CartScreen} />
					{/* <Route path='/admin/userlist' component={UserListScreen} /> */}
					{/* <Route path='/admin/user/:id/edit' component={UserEditScreen} /> */}
					{/* <Route path='/admin/productlist' component={ProductListScreen} /> */}
					{/* <Route
							path='/admin/productlist/:pageNumber'
							component={ProductListScreen}
						/> */}
					{/* <Route
							path='/admin/product/:id/edit'
							component={ProductEditScreen}
						/> */}
					{/* <Route path='/admin/orderlist' component={OrderListScreen} /> */}
					<Route path='/search/:keyword' component={HomeScreen} />
					{/* <Route path='/products/:keyword' component={HomeScreen} exact /> */}
					<Route path='/page/:pageNumber' component={HomeScreen} />
					<Route
						path='/search/:keyword/page/:pageNumber'
						component={HomeScreen}
						exact
					/>

					<Route path='/products' component={ProductsPage} exact />
					<Route path='/products/page/:pageNumber' component={ProductsPage} />

					{productPages.map(item => (
						<Route path={`/products/:category`} key={item.slug}>
							<ProductsPage title={item.title} />
						</Route>
					))}

					<Route
						path='/products/:category/page/:pageNumber'
						component={ProductsPage}
						exact
					/>

					<Route path='/' component={HomeScreen} exact />
					<Route path='/bemart' component={HomeScreen} />
				</Switch>
			</main>
			<Footer />
		</BrowserRouter>
	)
}

export default App
