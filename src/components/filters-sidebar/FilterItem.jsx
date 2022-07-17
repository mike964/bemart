import React, { useState } from 'react'
import { Form } from 'react-bootstrap'

const FilterItem = ({ name, label, onChange }) => {
	const [isChecked, setIsChecked] = useState(false)

	// ACTION
	//     type :"filters/brandFilterChanged"
	// payload
	// color :"purple"
	// changeType :"added"
	const handleChange = () => {
		setIsChecked(!isChecked)
		const changeType = isChecked ? 'removed' : 'added'
		onChange(name, changeType)
	}

	return (
		<Form.Group className='mb-1' controlId={name}>
			<Form.Check
				type='checkbox'
				name={name}
				label={label}
				onChange={handleChange}
				value={isChecked}
				className='uppercase'
			/>
		</Form.Group>
	)
}

export default FilterItem
