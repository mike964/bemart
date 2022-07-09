import React from 'react'

const Footer = () => {
	return (
		<footer className='bg-dark'>
			<div className='pt-5 bg-darker'>
				<div className='container'>
					<div className='row pb-3 mb-3'>
						<div className='col-md-3 col-sm-6 mb-4'>
							<div className='d-flex'>
								<i className='fas fa-rocket'></i>
								<div className='ps-3'>
									<h6 className='fs-base text-light mb-1'>
										Fast and free delivery
									</h6>
									<p className='mb-0 fs-ms text-light opacity-50'>
										Free delivery for all orders over $200
									</p>
								</div>
							</div>
						</div>
						<div className='col-md-3 col-sm-6 mb-4'>
							<div className='d-flex'>
								<i className='fas fa-dollar-sign'></i>
								<div className='ps-3'>
									<h6 className='fs-base text-light mb-1'>
										Money back guarantee
									</h6>
									<p className='mb-0 fs-ms text-light opacity-50'>
										We return money within 30 days
									</p>
								</div>
							</div>
						</div>
						<div className='col-md-3 col-sm-6 mb-4'>
							<div className='d-flex'>
								<i className='fas fa-phone-volume'></i>
								<div className='ps-3'>
									<h6 className='fs-base text-light mb-1'>
										24/7 customer support
									</h6>
									<p className='mb-0 fs-ms text-light opacity-50'>
										Friendly 24/7 customer support
									</p>
								</div>
							</div>
						</div>
						<div className='col-md-3 col-sm-6 mb-4'>
							<div className='d-flex'>
								<i className='fas fa-credit-card'></i>
								<div className='ps-3'>
									<h6 className='fs-base text-light mb-1'>
										Secure online payments
									</h6>
									<p className='mb-0 fs-ms text-light opacity-50'>
										We possess SSL / Secure сertificate
									</p>
								</div>
							</div>
						</div>
					</div>

					<hr className='hr-light mb-5' color='#5a5a5a'></hr>

					<div className='text-center mb-3'>
						<img
							src={process.env.PUBLIC_URL + '/assets/img/cards-alt.png'}
							style={{ height: '2rem', width: 'auto' }}
							alt='credit-cards'
						/>
					</div>

					<div
						className='pb-5 fs-xs text-center text-md-start'
						style={{ color: '#b4b4b4' }}>
						© All rights reserved. Made by{' '}
						<a className='text-light' href='https://github.com/mike964'>
							@mike964
						</a>
					</div>
				</div>
			</div>
		</footer>
	)
}

export default Footer
