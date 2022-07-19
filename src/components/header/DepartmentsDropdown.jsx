import React from 'react'
import { Link } from 'react-router-dom'

const DepartmentsDropdown = () => {
	return (
		<div className='nav-item dropdown flex-fill '>
			<div
				className='nav-link dropdown-toggle'
				to='#'
				id='navbarDropdown'
				role='button'
				data-toggle='dropdown'
				aria-expanded='false'>
				Departments
			</div>
			<div className='dropdown-menu' aria-labelledby='navbarDropdown'>
				<Link className='dropdown-item' to='/products/Laptops'>
					Computers & Tablets
				</Link>
				<Link className='dropdown-item' to='/products/Laptops'>
					Laptops
				</Link>
				<Link className='dropdown-item' to='/products/Cell-Phones'>
					Cell Phones
				</Link>
				<Link className='dropdown-item' to='/products/Digital-Cameras'>
					Digital Cameras
				</Link>
				<Link className='dropdown-item' to='/products/Accessories'>
					Accessories
				</Link>
				{/* <NavDropdown.Divider />
				<Link className='dropdown-item' to='#action/3.4'>
					Separated link
				</Link> */}
			</div>
		</div>
	)
}

export default DepartmentsDropdown
