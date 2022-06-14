import React, { useState } from 'react'
import { Form } from 'react-bootstrap'

const FilterItem = ({ name, label, onChange }) => {
	const [isChecked, setIsChecked] = useState(false)

	const handleChange = () => {
		setIsChecked(!isChecked)
		const changeType = isChecked ? 'removed' : 'added'
		onChange(name, changeType)

		// ACTION
		//     type :"filters/brandFilterChanged"
		// payload
		// color :"purple"
		// changeType :"added"
	}

	return (
		<Form.Group className='mb-2' controlId={name}>
			<Form.Check
				type='checkbox'
				label={label ? label : name}
				onChange={handleChange}
				name={name}
				value={isChecked}
				className='capitalize'
			/>
		</Form.Group>
	)
}

export default FilterItem
