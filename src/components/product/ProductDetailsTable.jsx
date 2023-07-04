import React from 'react'

const ProductDetailsTable = ({ details }) => {
	return (
		<table className='table'>
			{details && (
				<tbody>
					{details.map(item => (
						<tr key={item.name}>
							<td>{item.name}</td>
							<td>{item.value}</td>
						</tr>
					))}
				</tbody>
			)}
		</table>
	)
}

export default ProductDetailsTable
