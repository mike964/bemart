import React from 'react'

const Navbar2 = () => {
	return (
		<div className='container'>
			<a
				className='navbar-brand d-none d-sm-block me-3 flex-shrink-0'
				href='index.html'>
				<img
					src='img/logo-dark.png'
					width={142}
					alt='Cartzilla'
				/>
			</a>
			<a
				className='navbar-brand d-sm-none me-2'
				href='index.html'>
				<img
					src='img/logo-icon.png'
					width={74}
					alt='Cartzilla'
				/>
			</a>
			{/* Search*/}
			<div className='input-group d-none d-lg-flex flex-nowrap mx-4'>
				<i className='ci-search position-absolute top-50 start-0 translate-middle-y ms-3' />
				<input
					className='form-control rounded-start w-100'
					type='text'
					placeholder='Search for products'
				/>
				<select
					className='form-select flex-shrink-0'
					style={{ width: '10.5rem' }}>
					<option>All categories</option>
					<option>Computers</option>
					<option>Smartphones</option>
					<option>TV, Video, Audio</option>
					<option>Cameras</option>
					<option>Headphones</option>
					<option>Wearables</option>
					<option>Printers</option>
					<option>Video Games</option>
					<option>Home Music</option>
					<option>Data Storage</option>
				</select>
			</div>
			{/* Toolbar*/}
			<div className='navbar-toolbar d-flex flex-shrink-0 align-items-center'>
				<button
					className='navbar-toggler'
					type='button'
					data-bs-toggle='collapse'
					data-bs-target='#navbarCollapse'>
					<span className='navbar-toggler-icon' />
				</button>
				<a
					className='navbar-tool navbar-stuck-toggler'
					href='#'>
					<span className='navbar-tool-tooltip'>
						Toggle menu
					</span>
					<div className='navbar-tool-icon-box'>
						<i className='navbar-tool-icon ci-menu' />
					</div>
				</a>
				<a
					className='navbar-tool ms-1 ms-lg-0 me-n1 me-lg-2'
					href='#signin-modal'
					data-bs-toggle='modal'>
					<div className='navbar-tool-icon-box'>
						<i className='navbar-tool-icon ci-user' />
					</div>
					<div className='navbar-tool-text ms-n3'>
						<small>Hello, Sign in</small>My Account
					</div>
				</a>
				<div className='navbar-tool dropdown ms-3'>
					<a
						className='navbar-tool-icon-box bg-secondary dropdown-toggle'
						href='shop-cart.html'>
						<span className='navbar-tool-label'>4</span>
						<i className='navbar-tool-icon ci-cart' />
					</a>
					<a
						className='navbar-tool-text'
						href='shop-cart.html'>
						<small>My Cart</small>$1,247.00
					</a>
					{/* Cart dropdown*/}
					<div className='dropdown-menu dropdown-menu-end'>
						<div
							className='widget widget-cart px-3 pt-2 pb-3'
							style={{ width: '20rem' }}>
							<div
								style={{ height: '15rem' }}
								data-simplebar='init'
								data-simplebar-auto-hide='false'>
								<div
									className='simplebar-wrapper'
									style={{ margin: '0px -16px 0px 0px' }}>
									<div className='simplebar-height-auto-observer-wrapper'>
										<div className='simplebar-height-auto-observer' />
									</div>
									<div className='simplebar-mask'>
										<div
											className='simplebar-offset'
											style={{ right: 0, bottom: 0 }}>
											<div
												className='simplebar-content-wrapper'
												tabIndex={0}
												role='region'
												aria-label='scrollable content'
												style={{
													height: 'auto',
													overflow: 'hidden',
												}}>
												<div
													className='simplebar-content'
													style={{
														padding: '0px 16px 0px 0px',
													}}>
													<div className='widget-cart-item pb-2 border-bottom'>
														<button
															className='btn-close text-danger'
															type='button'
															aria-label='Remove'>
															<span aria-hidden='true'>
																×
															</span>
														</button>
														<div className='d-flex align-items-center'>
															<a
																className='d-block flex-shrink-0'
																href='shop-single-v2.html'>
																<img
																	src='img/shop/cart/widget/05.jpg'
																	width={64}
																	alt='Product'
																/>
															</a>
															<div className='ps-2'>
																<h6 className='widget-product-title'>
																	<a href='shop-single-v2.html'>
																		Bluetooth Headphones
																	</a>
																</h6>
																<div className='widget-product-meta'>
																	<span className='text-accent me-2'>
																		$259.<small>00</small>
																	</span>
																	<span className='text-muted'>
																		x 1
																	</span>
																</div>
															</div>
														</div>
													</div>
													<div className='widget-cart-item py-2 border-bottom'>
														<button
															className='btn-close text-danger'
															type='button'
															aria-label='Remove'>
															<span aria-hidden='true'>
																×
															</span>
														</button>
														<div className='d-flex align-items-center'>
															<a
																className='d-block flex-shrink-0'
																href='shop-single-v2.html'>
																<img
																	src='img/shop/cart/widget/06.jpg'
																	width={64}
																	alt='Product'
																/>
															</a>
															<div className='ps-2'>
																<h6 className='widget-product-title'>
																	<a href='shop-single-v2.html'>
																		Cloud Security Camera
																	</a>
																</h6>
																<div className='widget-product-meta'>
																	<span className='text-accent me-2'>
																		$122.<small>00</small>
																	</span>
																	<span className='text-muted'>
																		x 1
																	</span>
																</div>
															</div>
														</div>
													</div>
													<div className='widget-cart-item py-2 border-bottom'>
														<button
															className='btn-close text-danger'
															type='button'
															aria-label='Remove'>
															<span aria-hidden='true'>
																×
															</span>
														</button>
														<div className='d-flex align-items-center'>
															<a
																className='d-block flex-shrink-0'
																href='shop-single-v2.html'>
																<img
																	src='img/shop/cart/widget/07.jpg'
																	width={64}
																	alt='Product'
																/>
															</a>
															<div className='ps-2'>
																<h6 className='widget-product-title'>
																	<a href='shop-single-v2.html'>
																		Android Smartphone S10
																	</a>
																</h6>
																<div className='widget-product-meta'>
																	<span className='text-accent me-2'>
																		$799.<small>00</small>
																	</span>
																	<span className='text-muted'>
																		x 1
																	</span>
																</div>
															</div>
														</div>
													</div>
													<div className='widget-cart-item py-2 border-bottom'>
														<button
															className='btn-close text-danger'
															type='button'
															aria-label='Remove'>
															<span aria-hidden='true'>
																×
															</span>
														</button>
														<div className='d-flex align-items-center'>
															<a
																className='d-block flex-shrink-0'
																href='shop-single-v2.html'>
																<img
																	src='img/shop/cart/widget/08.jpg'
																	width={64}
																	alt='Product'
																/>
															</a>
															<div className='ps-2'>
																<h6 className='widget-product-title'>
																	<a href='shop-single-v2.html'>
																		Android Smart TV Box
																	</a>
																</h6>
																<div className='widget-product-meta'>
																	<span className='text-accent me-2'>
																		$67.<small>00</small>
																	</span>
																	<span className='text-muted'>
																		x 1
																	</span>
																</div>
															</div>
														</div>
													</div>
												</div>
											</div>
										</div>
									</div>
									<div
										className='simplebar-placeholder'
										style={{ width: 0, height: 0 }}
									/>
								</div>
								<div
									className='simplebar-track simplebar-horizontal'
									style={{ visibility: 'hidden' }}>
									<div
										className='simplebar-scrollbar simplebar-visible'
										style={{ width: 0, display: 'none' }}
									/>
								</div>
								<div
									className='simplebar-track simplebar-vertical'
									style={{ visibility: 'hidden' }}>
									<div
										className='simplebar-scrollbar simplebar-visible'
										style={{ height: 0, display: 'none' }}
									/>
								</div>
							</div>
							<div className='d-flex flex-wrap justify-content-between align-items-center py-3'>
								<div className='fs-sm me-2 py-2'>
									<span className='text-muted'>
										Subtotal:
									</span>
									<span className='text-accent fs-base ms-1'>
										$1,247.<small>00</small>
									</span>
								</div>
								<a
									className='btn btn-outline-secondary btn-sm'
									href='shop-cart.html'>
									Expand cart
									<i className='ci-arrow-right ms-1 me-n1' />
								</a>
							</div>
							<a
								className='btn btn-primary btn-sm d-block w-100'
								href='checkout-details.html'>
								<i className='ci-card me-2 fs-base align-middle' />
								Checkout
							</a>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Navbar2
