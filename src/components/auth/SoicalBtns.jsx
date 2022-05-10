import React from 'react'
import { Link } from 'react-router-dom'

const SoicalBtns = () => {
	return (
		<div className='row g-2 mt-2 auth-btns'>
			<div className='col-sm-6'>
				<Link className='btn btn-outline-google-plus btn-sm d-block' href='#'>
					<i class='fab fa-google-plus-g' /> google
				</Link>
			</div>
			<div className='col-sm-6 '>
				<Link className='btn btn-outline-facebook btn-sm d-block ' href='#'>
					<i class='fab fa-facebook-square' /> facebook
				</Link>
			</div>
		</div>
	)
}

export default SoicalBtns
