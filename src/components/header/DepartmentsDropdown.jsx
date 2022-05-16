import React from 'react'
import { Dropdown } from 'react-bootstrap'
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
		<li className='nav-item dropdown'>
			<a
				className='nav-link  dropdown-toggle'
				href='#'
				data-bs-toggle='dropdown'>
				{' '}
				Hover me
			</a>
			<ul className='dropdown-menu'>
				<li>
					<a className='dropdown-item' href='#'>
						{' '}
						Submenu item 1
					</a>
				</li>
				<li>
					<a className='dropdown-item' href='#'>
						{' '}
						Submenu item 2{' '}
					</a>
				</li>
				<li>
					<a className='dropdown-item' href='#'>
						{' '}
						Submenu item 3{' '}
					</a>
				</li>
			</ul>
		</li>
	)
}
const DepartmentsDropdown_ = () => {
	return (
		<Dropdown>
			<Dropdown.Toggle as={CustomToggle} variant='success' id='dropdown-basic'>
				Dropdown Button
			</Dropdown.Toggle>

			<Dropdown.Menu>
				<Dropdown.Item href='#/action-1'>Action</Dropdown.Item>
				<Dropdown.Item href='#/action-2'>Another action</Dropdown.Item>
				<Dropdown.Item href='#/action-3'>Something else</Dropdown.Item>
			</Dropdown.Menu>
		</Dropdown>
	)
}

export default DepartmentsDropdown
