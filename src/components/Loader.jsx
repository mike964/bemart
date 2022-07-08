import React from 'react'
import { Spinner } from 'react-bootstrap'

const Loader = ({ type }) => {
	return (
		<div className='p-5 mx-auto my-3 text-center'>
			<Spinner
				animation={type === 'grow' ? 'grow' : 'border'}
				role='status'
				variant='info'
				style={{
					width: '3rem',
					height: '3rem',
					display: 'block',
					margin: 'auto',
				}}>
				<span className='sr-only'>Loading...</span>
			</Spinner>
		</div>
	)
}

export default Loader

// const Loader = (
//   <div className='p-5 text-center'>
//     <div
//       className='spinner-grow text-info'
//       style={{ width: ' 3rem', height: ' 3rem' }}
//       role='status'>
//       <span className='sr-only'>Loading...</span>
//     </div>
//   </div>
// )
