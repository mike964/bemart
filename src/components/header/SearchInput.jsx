import React, { useState } from 'react'
import { Button, Form, FormControl, InputGroup } from 'react-bootstrap'
import { useHistory } from 'react-router-dom'

const SearchInput = () => {
	const history = useHistory()
	const [keyword, setKeyword] = useState('')

	const submitHandler = e => {
		e.preventDefault()
		if (keyword.trim()) {
			history.push(`/search/${keyword}`)
		} else {
			history.push('/')
		}
	}

	return (
		<Form
			onSubmit={submitHandler}
			// className='w-100'
			className='ml-5'
			style={{ width: '600px' }}>
			{' '}
			<InputGroup
			// size='lg'
			>
				<FormControl
					placeholder='Search products...'
					aria-label="Recipient's username"
					type='text'
					name='q'
					onChange={e => setKeyword(e.target.value)}
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
