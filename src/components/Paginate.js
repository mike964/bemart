import React from 'react'
import { Pagination } from 'react-bootstrap'
import { LinkContainer } from 'react-router-bootstrap'

const Paginate = ({ pages, page, isAdmin = false, keyword = '' }) => {
	const getLink = x => {
		return !isAdmin
			? keyword
				? `/search/${keyword}/page/${x + 1}`
				: `/page/${x + 1}`
			: `/admin/productlist/${x + 1}`
	}

	return (
		pages > 1 && (
			<Pagination className='justify-content-center'>
				{[...Array(pages).keys()].map(x => {
					// x starts from 0
					let number = x + 1
					return (
						<LinkContainer key={number} to={getLink(x)}>
							<Pagination.Item active={number === page}>
								{number}
							</Pagination.Item>
						</LinkContainer>
					)
				})}
			</Pagination>
		)
	)
}

export default Paginate
