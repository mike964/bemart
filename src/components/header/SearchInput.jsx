import React from 'react'
import { Button, Form, FormControl, InputGroup } from 'react-bootstrap'

const SearchInput = () => {
	return (
		<Form
			// className='w-100'
			className='ml-5'
			style={{ width: '600px' }}>
			{' '}
			<InputGroup>
				<FormControl
					placeholder='Search products...'
					aria-label="Recipient's username"
					aria-describedby='basic-addon2'
				/>
				<InputGroup.Append>
					<Button variant='warning'>
						<i className='fa fa-search' aria-hidden='true' />
					</Button>
				</InputGroup.Append>
			</InputGroup>
		</Form>
	)
}

export default SearchInput
