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
	// return (
	// 	<NavDropdown
	// 		id='nav-dropdown-dark-example'
	// 		className='flex-fill department-dropdown'
	// 		title='Departments'
	// 		// menuVariant='dark'
	// 	>
	// 		<NavDropdown.Item to='#action/3.1'>Computers</NavDropdown.Item>
	// 		<NavDropdown.Item to='#action/3.2'>Laptops</NavDropdown.Item>
	// 		<NavDropdown.Item to='#action/3.3'>Cell Phones</NavDropdown.Item>
	// 		<NavDropdown.Item to='#action/3.3'>Accessories</NavDropdown.Item>
	// 		<NavDropdown.Divider />
	// 		<NavDropdown.Item to='#action/3.4'>Separated link</NavDropdown.Item>
	// 	</NavDropdown>
	// )

	return (
		<div className='nav-item dropdown flex-fill '>
			<div
				className='nav-link '
				to='#'
				id='navbarDropdown'
				role='button'
				data-toggle='dropdown'
				aria-expanded='false'>
				Departments <i className='fas fa-angle-down m-1' />
			</div>
			<div className='dropdown-menu' aria-labelledby='navbarDropdown'>
				<Link className='dropdown-item' to='#'>
					Computers
				</Link>
				<Link className='dropdown-item' to='#action/3.2'>
					Laptops
				</Link>
				<Link className='dropdown-item' to='#action/3.3'>
					Cell Phones
				</Link>
				<Link className='dropdown-item' to='#action/3.3'>
					Accessories
				</Link>
				<NavDropdown.Divider />
				<Link className='dropdown-item' to='#action/3.4'>
					Separated link
				</Link>
			</div>
		</div>
	)
}

export default DepartmentsDropdown
