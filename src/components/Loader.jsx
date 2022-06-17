import React from 'react'
import { Spinner } from 'react-bootstrap'

const Loader = () => {
	return (
		<div className='p-5' style={{ width: '100px', margin: '5rem auto' }}>
			<Spinner
				animation='border'
				role='status'
				variant='info'
				style={{
					width: '80px',
					height: '80px',
					display: 'block',
					margin: 'auto',
				}}>
				<span className='sr-only'>Loading...</span>
			</Spinner>
		</div>
	)
}

export default Loader
