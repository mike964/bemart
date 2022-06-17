import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
	return (
		<footer className='bg-dark pt-5'>
			<div className='pt-5 bg-darker'>
				<div className='container'>
					<div className='row pb-3'>
						<div className='col-md-3 col-sm-6 mb-4'>
							<div className='d-flex'>
								<i
									className='ci-rocket text-primary'
									style={{ fontSize: '2.25rem' }}
								/>
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
								<i
									className='ci-currency-exchange text-primary'
									style={{ fontSize: '2.25rem' }}
								/>
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
								<i
									className='ci-support text-primary'
									style={{ fontSize: '2.25rem' }}
								/>
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
								<i
									className='ci-card text-primary'
									style={{ fontSize: '2.25rem' }}
								/>
								<div className='ps-3'>
									<h6 className='fs-base text-light mb-1'>
										Secure online payment
									</h6>
									<p className='mb-0 fs-ms text-light opacity-50'>
										We possess SSL / Secure сertificate
									</p>
								</div>
							</div>
						</div>
					</div>
					<hr className='hr-light mb-5' />
					<div className='row pb-2'>
						<div className='col-md-6 text-center text-md-start mb-4'>
							<div className='text-nowrap mb-4'>
								<Link
									className='d-inline-block align-middle mt-n1 me-3'
									href='#'>
									<img
										className='d-block'
										src='img/footer-logo-light.png'
										width={117}
										alt='Cartzilla'
									/>
								</Link>
							</div>
							<div className='widget widget-links widget-light'>
								<ul className='widget-list d-flex flex-wrap justify-content-center justify-content-md-start'>
									<li className='widget-list-item me-4'>
										<Link className='widget-list-link' href='#'>
											Outlets
										</Link>
									</li>
									<li className='widget-list-item me-4'>
										<Link className='widget-list-link' href='#'>
											Affiliates
										</Link>
									</li>
									<li className='widget-list-item me-4'>
										<Link className='widget-list-link' href='#'>
											Support
										</Link>
									</li>
									<li className='widget-list-item me-4'>
										<Link className='widget-list-link' href='#'>
											Privacy
										</Link>
									</li>
									<li className='widget-list-item me-4'>
										<Link className='widget-list-link' href='#'>
											Terms of use
										</Link>
									</li>
								</ul>
							</div>
						</div>
						<div className='col-md-6 text-center text-md-end mb-4'>
							<div className='mb-3'>
								<Link
									className='btn-social bs-light bs-twitter ms-2 mb-2'
									href='#'>
									<i className='ci-twitter' />
								</Link>
								<Link
									className='btn-social bs-light bs-facebook ms-2 mb-2'
									href='#'>
									<i className='ci-facebook' />
								</Link>
								<Link
									className='btn-social bs-light bs-instagram ms-2 mb-2'
									href='#'>
									<i className='ci-instagram' />
								</Link>
								<Link
									className='btn-social bs-light bs-pinterest ms-2 mb-2'
									href='#'>
									<i className='ci-pinterest' />
								</Link>
								<Link
									className='btn-social bs-light bs-youtube ms-2 mb-2'
									href='#'>
									<i className='ci-youtube' />
								</Link>
							</div>
							<img
								className='d-inline-block'
								src='img/cards-alt.png'
								width={187}
								alt='Payment methods'
							/>
						</div>
					</div>
					<div className='pb-4 fs-xs text-light opacity-50 text-center text-md-start'>
						© All rights reserved. Made by{' '}
						<a className='text-light' href='https://github.com/mike964'>
							Kemal Emin
						</a>
					</div>
				</div>
			</div>
		</footer>
	)
}

export default Footer
