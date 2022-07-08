import React from 'react'
import { Dropdown, NavDropdown } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const CustomToggle = React.forwardRef(({ children, onClick }, ref) => (
	<span
		ref={ref}
		onClick={e => {
			e.preventDefault()
			onClick(e)
		}}>
		{children}
		&#x25bc;
	</span>
))

const DepartmentsDropdown = () => {
	return (
		<div className='nav-item dropdown flex-fill '>
			<div
				className='nav-link  dropdown-toggle'
				to='#'
				id='navbarDropdown'
				role='button'
				data-toggle='dropdown'
				aria-expanded='false'>
				Departments
			</div>
			<div className='dropdown-menu' aria-labelledby='navbarDropdown'>
				<Link className='dropdown-item' to='/products/laptops'>
					Computers & Tablets
				</Link>
				<Link className='dropdown-item' to='/products/laptops'>
					Laptops
				</Link>
				<Link className='dropdown-item' to='/products/cellphones'>
					Cell Phones
				</Link>
				<Link className='dropdown-item' to='/products/cameras'>
					Cameras
				</Link>
				<Link className='dropdown-item' to='/products/accessories'>
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
