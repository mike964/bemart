import React from 'react'
import { Form } from 'react-bootstrap'

const FilterItem = ({ label }) => {
	return (
		<Form.Group className='mb-2' controlId='formBasicCheckbox'>
			<Form.Check type='checkbox' label={label ? label : 'no-label'} />
		</Form.Group>
	)
}

export default FilterItem
