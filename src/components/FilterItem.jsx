import React, { useState } from 'react'
import { Form } from 'react-bootstrap'

const FilterItem = ({ label, onChange }) => {
	const [isChecked, setIsChecked] = useState(false)

	const handleChange = () => {
		setIsChecked(!isChecked)
		const changeType = isChecked ? 'removed' : 'added'
		onChange(label, changeType)

		// ACTION
		//     type :"filters/brandFilterChanged"
		// payload
		// color :"purple"
		// changeType :"added"
	}

	return (
		<Form.Group className='mb-2' controlId={label}>
			<Form.Check
				type='checkbox'
				label={label ? label : 'no-label'}
				onChange={handleChange}
				name={label}
				value={isChecked}
				className='capitalize'
			/>
		</Form.Group>
	)
}

export default FilterItem
