import React from 'react'
import { Carousel } from 'react-bootstrap'

const BillboardCarousel = () => {
	// Images to show in billboard
	const billboardItems = [
		// src={process.env.PUBLIC_URL + `/assets/img/projects/${id}.png`}
		{
			id: '1',
			link: ' ',
			image: process.env.PUBLIC_URL + '/assets/billboard/banner-1.png',
		},
		{
			id: '2',
			link: ' ',
			image: process.env.PUBLIC_URL + '/assets/billboard/banner-2.png',
		},
		{
			id: '3',
			link: ' ',
			image: process.env.PUBLIC_URL + '/assets/billboard/banner-3.png',
		},
		{
			id: '4',
			link: ' ',
			image: process.env.PUBLIC_URL + '/assets/billboard/banner-4.png',
		},
		{
			id: '5',
			link: ' ',
			image: process.env.PUBLIC_URL + '/assets/billboard/banner-5.png',
		},
		{
			id: '6',
			link: ' ',
			image: process.env.PUBLIC_URL + '/assets/billboard/banner-6.png',
		},
	]

	// <img src='images/billboard/banner-1.jpeg' alt='banner' />

	// Render carousel items
	const renderBillboardItems = () => {
		return billboardItems.map(item => (
			<Carousel.Item key={item.id}>
				<img
					className='d-block w-100'
					src={item.image}
					alt={`slide-${item.id}`}
				/>
				{/* <Carousel.Caption>
					<h3>First slide label</h3>
					<p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
				</Carousel.Caption> */}
			</Carousel.Item>
		))
	}

	return <Carousel indicators={true}>{renderBillboardItems()}</Carousel>
}

export default BillboardCarousel
