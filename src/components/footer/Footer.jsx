import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
	return (
		<footer className='bg-dark mt-5'>
			<div className='pt-5 bg-darker'>
				<div className='container'>
					<div className='row pb-3'>
						<div className='col-md-4 col-sm-6 mb-4'>
							<div className='d-flex'>
								<svg
									xmlns='http://www.w3.org/2000/svg'
									width='38'
									height='38'
									fill='currentColor'
									className='bi bi-speedometer2 text-danger mr-2'
									viewBox='0 0 16 16'>
									<path d='M8 4a.5.5 0 0 1 .5.5V6a.5.5 0 0 1-1 0V4.5A.5.5 0 0 1 8 4zM3.732 5.732a.5.5 0 0 1 .707 0l.915.914a.5.5 0 1 1-.708.708l-.914-.915a.5.5 0 0 1 0-.707zM2 10a.5.5 0 0 1 .5-.5h1.586a.5.5 0 0 1 0 1H2.5A.5.5 0 0 1 2 10zm9.5 0a.5.5 0 0 1 .5-.5h1.5a.5.5 0 0 1 0 1H12a.5.5 0 0 1-.5-.5zm.754-4.246a.389.389 0 0 0-.527-.02L7.547 9.31a.91.91 0 1 0 1.302 1.258l3.434-4.297a.389.389 0 0 0-.029-.518z' />
									<path
										fillRule='evenodd'
										d='M0 10a8 8 0 1 1 15.547 2.661c-.442 1.253-1.845 1.602-2.932 1.25C11.309 13.488 9.475 13 8 13c-1.474 0-3.31.488-4.615.911-1.087.352-2.49.003-2.932-1.25A7.988 7.988 0 0 1 0 10zm8-7a7 7 0 0 0-6.603 9.329c.203.575.923.876 1.68.63C4.397 12.533 6.358 12 8 12s3.604.532 4.923.96c.757.245 1.477-.056 1.68-.631A7 7 0 0 0 8 3z'
									/>
								</svg>
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
						<div className='col-md-4 col-sm-6 mb-4'>
							<div className='d-flex'>
								<svg
									xmlns='http://www.w3.org/2000/svg'
									width='38'
									height='38'
									fill='currentColor'
									className='bi bi-coin text-danger mr-2'
									viewBox='0 0 16 16'>
									<path d='M5.5 9.511c.076.954.83 1.697 2.182 1.785V12h.6v-.709c1.4-.098 2.218-.846 2.218-1.932 0-.987-.626-1.496-1.745-1.76l-.473-.112V5.57c.6.068.982.396 1.074.85h1.052c-.076-.919-.864-1.638-2.126-1.716V4h-.6v.719c-1.195.117-2.01.836-2.01 1.853 0 .9.606 1.472 1.613 1.707l.397.098v2.034c-.615-.093-1.022-.43-1.114-.9H5.5zm2.177-2.166c-.59-.137-.91-.416-.91-.836 0-.47.345-.822.915-.925v1.76h-.005zm.692 1.193c.717.166 1.048.435 1.048.91 0 .542-.412.914-1.135.982V8.518l.087.02z' />
									<path d='M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z' />
									<path d='M8 13.5a5.5 5.5 0 1 1 0-11 5.5 5.5 0 0 1 0 11zm0 .5A6 6 0 1 0 8 2a6 6 0 0 0 0 12z' />
								</svg>
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
						<div className='col-md-4 col-sm-6 mb-4'>
							<div className='d-flex'>
								<svg
									xmlns='http://www.w3.org/2000/svg'
									width='38'
									height='38'
									fill='currentColor'
									className='bi bi-credit-card-2-back text-danger mr-2'
									viewBox='0 0 16 16'>
									<path d='M11 5.5a.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-1z' />
									<path d='M2 2a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2H2zm13 2v5H1V4a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1zm-1 9H2a1 1 0 0 1-1-1v-1h14v1a1 1 0 0 1-1 1z' />
								</svg>
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
					<hr className='hr-light mb-5' />

					<div className='pb-5 fs-xs text-light opacity-50 text-center text-md-start'>
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
