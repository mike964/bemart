import React from 'react'
import { Pagination } from 'react-bootstrap'
import { LinkContainer } from 'react-router-bootstrap'

const Paginate = ({ pages, page, isAdmin = false, keyword = '', link }) => {
	const getLink = x => {
		if (link) {
			return `${link}/page/${x + 1}`
		} else {
			return !isAdmin
				? keyword
					? `/search/${keyword}/page/${x + 1}`
					: `/page/${x + 1}`
				: `/admin/productlist/${x + 1}`
		}
	}

	return (
		pages > 1 && (
			<Pagination className='justify-content-center'>
				{[...Array(pages).keys()].map(x => (
					<LinkContainer
						key={x + 1}
						// to={
						// 	!isAdmin
						// 		? keyword
						// 			? `/search/${keyword}/page/${x + 1}`
						// 			: `/page/${x + 1}`
						// 		: `/admin/productlist/${x + 1}`
						// }
						to={getLink(x)}>
						<Pagination.Item active={x + 1 === page}>{x + 1}</Pagination.Item>
					</LinkContainer>
				))}
			</Pagination>
		)
	)
}

export default Paginate
