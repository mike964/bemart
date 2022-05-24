import React from 'react'
import { Link } from 'react-router-dom'

const FiltersSidebar = () => {
	return (
		<aside className='col-lg-4'>
			{/* Sidebar*/}
			<div
				className='offcanvas offcanvas-collapse bg-white w-100 rounded-3 shadow-lg py-1'
				id='shop-sidebar'
				style={{ maxWidth: '22rem' }}>
				<div className='offcanvas-header align-items-center shadow-sm'>
					<h2 className='h5 mb-0'>Filters</h2>
					<button
						className='btn-close ms-auto'
						type='button'
						data-bs-dismiss='offcanvas'
						aria-label='Close'
					/>
				</div>
				<div className='offcanvas-body py-grid-gutter px-lg-grid-gutter'>
					{/* Categories*/}
					<div className='widget widget-categories mb-4 pb-4 border-bottom'>
						<h3 className='widget-title'>Categories</h3>
						<div className='accordion mt-n1' id='shop-categories'>
							{/* Shoes*/}
							<div className='accordion-item'>
								<h3 className='accordion-header'>
									<a
										className='accordion-button collapsed'
										href='#shoes'
										role='button'
										data-bs-toggle='collapse'
										aria-expanded='false'
										aria-controls='shoes'>
										Shoes
									</a>
								</h3>
								<div
									className='accordion-collapse collapse'
									id='shoes'
									data-bs-parent='#shop-categories'>
									<div className='accordion-body'>
										<div className='widget widget-links widget-filter'>
											<div className='input-group input-group-sm mb-2'>
												<input
													className='widget-filter-search form-control rounded-end'
													type='text'
													placeholder='Search'
												/>
												<i className='ci-search position-absolute top-50 end-0 translate-middle-y fs-sm me-3' />
											</div>
											<ul
												className='widget-list widget-filter-list pt-1'
												style={{ height: '12rem' }}
												data-simplebar='init'
												data-simplebar-auto-hide='false'>
												<div
													className='simplebar-wrapper'
													style={{ margin: '-4px -16px 0px 0px' }}>
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
																style={{ height: 'auto', overflow: 'hidden' }}>
																<div
																	className='simplebar-content'
																	style={{ padding: '4px 16px 0px 0px' }}>
																	<li className='widget-list-item widget-filter-item'>
																		<a
																			className='widget-list-link d-flex justify-content-between align-items-center'
																			href='#'>
																			<span className='widget-filter-item-text'>
																				View all
																			</span>
																			<span className='fs-xs text-muted ms-3'>
																				1,953
																			</span>
																		</a>
																	</li>
																	<li className='widget-list-item widget-filter-item'>
																		<a
																			className='widget-list-link d-flex justify-content-between align-items-center'
																			href='#'>
																			<span className='widget-filter-item-text'>
																				Pumps &amp; High Heels
																			</span>
																			<span className='fs-xs text-muted ms-3'>
																				247
																			</span>
																		</a>
																	</li>
																	<li className='widget-list-item widget-filter-item'>
																		<a
																			className='widget-list-link d-flex justify-content-between align-items-center'
																			href='#'>
																			<span className='widget-filter-item-text'>
																				Ballerinas &amp; Flats
																			</span>
																			<span className='fs-xs text-muted ms-3'>
																				156
																			</span>
																		</a>
																	</li>
																	<li className='widget-list-item widget-filter-item'>
																		<a
																			className='widget-list-link d-flex justify-content-between align-items-center'
																			href='#'>
																			<span className='widget-filter-item-text'>
																				Sandals
																			</span>
																			<span className='fs-xs text-muted ms-3'>
																				310
																			</span>
																		</a>
																	</li>
																	<li className='widget-list-item widget-filter-item'>
																		<a
																			className='widget-list-link d-flex justify-content-between align-items-center'
																			href='#'>
																			<span className='widget-filter-item-text'>
																				Sneakers
																			</span>
																			<span className='fs-xs text-muted ms-3'>
																				402
																			</span>
																		</a>
																	</li>
																	<li className='widget-list-item widget-filter-item'>
																		<a
																			className='widget-list-link d-flex justify-content-between align-items-center'
																			href='#'>
																			<span className='widget-filter-item-text'>
																				Boots
																			</span>
																			<span className='fs-xs text-muted ms-3'>
																				393
																			</span>
																		</a>
																	</li>
																	<li className='widget-list-item widget-filter-item'>
																		<a
																			className='widget-list-link d-flex justify-content-between align-items-center'
																			href='#'>
																			<span className='widget-filter-item-text'>
																				Ankle Boots
																			</span>
																			<span className='fs-xs text-muted ms-3'>
																				50
																			</span>
																		</a>
																	</li>
																	<li className='widget-list-item widget-filter-item'>
																		<a
																			className='widget-list-link d-flex justify-content-between align-items-center'
																			href='#'>
																			<span className='widget-filter-item-text'>
																				Loafers
																			</span>
																			<span className='fs-xs text-muted ms-3'>
																				93
																			</span>
																		</a>
																	</li>
																	<li className='widget-list-item widget-filter-item'>
																		<a
																			className='widget-list-link d-flex justify-content-between align-items-center'
																			href='#'>
																			<span className='widget-filter-item-text'>
																				Slip-on
																			</span>
																			<span className='fs-xs text-muted ms-3'>
																				122
																			</span>
																		</a>
																	</li>
																	<li className='widget-list-item widget-filter-item'>
																		<a
																			className='widget-list-link d-flex justify-content-between align-items-center'
																			href='#'>
																			<span className='widget-filter-item-text'>
																				Flip Flops
																			</span>
																			<span className='fs-xs text-muted ms-3'>
																				116
																			</span>
																		</a>
																	</li>
																	<li className='widget-list-item widget-filter-item'>
																		<a
																			className='widget-list-link d-flex justify-content-between align-items-center'
																			href='#'>
																			<span className='widget-filter-item-text'>
																				Clogs &amp; Mules
																			</span>
																			<span className='fs-xs text-muted ms-3'>
																				24
																			</span>
																		</a>
																	</li>
																	<li className='widget-list-item widget-filter-item'>
																		<a
																			className='widget-list-link d-flex justify-content-between align-items-center'
																			href='#'>
																			<span className='widget-filter-item-text'>
																				Athletic Shoes
																			</span>
																			<span className='fs-xs text-muted ms-3'>
																				31
																			</span>
																		</a>
																	</li>
																	<li className='widget-list-item widget-filter-item'>
																		<a
																			className='widget-list-link d-flex justify-content-between align-items-center'
																			href='#'>
																			<span className='widget-filter-item-text'>
																				Oxfords
																			</span>
																			<span className='fs-xs text-muted ms-3'>
																				9
																			</span>
																		</a>
																	</li>
																	<li className='widget-list-item widget-filter-item'>
																		<a
																			className='widget-list-link d-flex justify-content-between align-items-center'
																			href='#'>
																			<span className='widget-filter-item-text'>
																				Smart Shoes
																			</span>
																			<span className='fs-xs text-muted ms-3'>
																				18
																			</span>
																		</a>
																	</li>
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
											</ul>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
					{/* Price range*/}
					<div className='widget mb-4 pb-4 border-bottom'>
						<h3 className='widget-title'>Price</h3>
						<div
							className='range-slider'
							data-start-min={250}
							data-start-max={680}
							data-min={0}
							data-max={1000}
							data-step={1}>
							<div className='range-slider-ui noUi-target noUi-ltr noUi-horizontal noUi-txt-dir-ltr'>
								<div className='noUi-base'>
									<div className='noUi-connects'>
										<div
											className='noUi-connect'
											style={{
												transform: 'translate(25%, 0px) scale(0.43, 1)',
											}}
										/>
									</div>
									<div
										className='noUi-origin'
										style={{ transform: 'translate(-75%, 0px)', zIndex: 5 }}>
										<div
											className='noUi-handle noUi-handle-lower'
											data-handle={0}
											tabIndex={0}
											role='slider'
											aria-orientation='horizontal'
											aria-valuemin={0.0}
											aria-valuemax={680.0}
											aria-valuenow={250.0}
											aria-valuetext='$250'>
											<div className='noUi-touch-area' />
											<div className='noUi-tooltip'>$250</div>
										</div>
									</div>
									<div
										className='noUi-origin'
										style={{ transform: 'translate(-32%, 0px)', zIndex: 4 }}>
										<div
											className='noUi-handle noUi-handle-upper'
											data-handle={1}
											tabIndex={0}
											role='slider'
											aria-orientation='horizontal'
											aria-valuemin={250.0}
											aria-valuemax={1000.0}
											aria-valuenow={680.0}
											aria-valuetext='$680'>
											<div className='noUi-touch-area' />
											<div className='noUi-tooltip'>$680</div>
										</div>
									</div>
								</div>
								<div className='noUi-pips noUi-pips-horizontal'>
									<div
										className='noUi-marker noUi-marker-horizontal noUi-marker-large'
										style={{ left: '0%' }}
									/>
									<div
										className='noUi-value noUi-value-horizontal noUi-value-large'
										data-value={0}
										style={{ left: '0%' }}>
										0
									</div>
									<div
										className='noUi-marker noUi-marker-horizontal noUi-marker-normal'
										style={{ left: '1%' }}
									/>
									<div
										className='noUi-marker noUi-marker-horizontal noUi-marker-normal'
										style={{ left: '2%' }}
									/>
									<div
										className='noUi-marker noUi-marker-horizontal noUi-marker-normal'
										style={{ left: '3%' }}
									/>
									<div
										className='noUi-marker noUi-marker-horizontal noUi-marker-normal'
										style={{ left: '4%' }}
									/>
									<div
										className='noUi-marker noUi-marker-horizontal noUi-marker-normal'
										style={{ left: '5%' }}
									/>
									<div
										className='noUi-marker noUi-marker-horizontal noUi-marker-normal'
										style={{ left: '6%' }}
									/>
									<div
										className='noUi-marker noUi-marker-horizontal noUi-marker-normal'
										style={{ left: '7%' }}
									/>
									<div
										className='noUi-marker noUi-marker-horizontal noUi-marker-normal'
										style={{ left: '8%' }}
									/>
									<div
										className='noUi-marker noUi-marker-horizontal noUi-marker-normal'
										style={{ left: '9%' }}
									/>
									<div
										className='noUi-marker noUi-marker-horizontal noUi-marker-normal'
										style={{ left: '10%' }}
									/>
									<div
										className='noUi-marker noUi-marker-horizontal noUi-marker-normal'
										style={{ left: '11%' }}
									/>
									<div
										className='noUi-marker noUi-marker-horizontal noUi-marker-normal'
										style={{ left: '12%' }}
									/>
									<div
										className='noUi-marker noUi-marker-horizontal noUi-marker-normal'
										style={{ left: '13%' }}
									/>
									<div
										className='noUi-marker noUi-marker-horizontal noUi-marker-normal'
										style={{ left: '14%' }}
									/>
									<div
										className='noUi-marker noUi-marker-horizontal noUi-marker-normal'
										style={{ left: '15%' }}
									/>
									<div
										className='noUi-marker noUi-marker-horizontal noUi-marker-normal'
										style={{ left: '16%' }}
									/>
									<div
										className='noUi-marker noUi-marker-horizontal noUi-marker-normal'
										style={{ left: '17%' }}
									/>
									<div
										className='noUi-marker noUi-marker-horizontal noUi-marker-normal'
										style={{ left: '18%' }}
									/>
									<div
										className='noUi-marker noUi-marker-horizontal noUi-marker-normal'
										style={{ left: '19%' }}
									/>
									<div
										className='noUi-marker noUi-marker-horizontal noUi-marker-normal'
										style={{ left: '20%' }}
									/>
									<div
										className='noUi-marker noUi-marker-horizontal noUi-marker-normal'
										style={{ left: '21%' }}
									/>
									<div
										className='noUi-marker noUi-marker-horizontal noUi-marker-normal'
										style={{ left: '22%' }}
									/>
									<div
										className='noUi-marker noUi-marker-horizontal noUi-marker-normal'
										style={{ left: '23%' }}
									/>
									<div
										className='noUi-marker noUi-marker-horizontal noUi-marker-normal'
										style={{ left: '24%' }}
									/>
									<div
										className='noUi-marker noUi-marker-horizontal noUi-marker-large'
										style={{ left: '25%' }}
									/>
									<div
										className='noUi-value noUi-value-horizontal noUi-value-large'
										data-value={250}
										style={{ left: '25%' }}>
										250
									</div>
									<div
										className='noUi-marker noUi-marker-horizontal noUi-marker-normal'
										style={{ left: '26%' }}
									/>
									<div
										className='noUi-marker noUi-marker-horizontal noUi-marker-normal'
										style={{ left: '27%' }}
									/>
									<div
										className='noUi-marker noUi-marker-horizontal noUi-marker-normal'
										style={{ left: '28%' }}
									/>
									<div
										className='noUi-marker noUi-marker-horizontal noUi-marker-normal'
										style={{ left: '29%' }}
									/>
									<div
										className='noUi-marker noUi-marker-horizontal noUi-marker-normal'
										style={{ left: '30%' }}
									/>
									<div
										className='noUi-marker noUi-marker-horizontal noUi-marker-normal'
										style={{ left: '31%' }}
									/>
									<div
										className='noUi-marker noUi-marker-horizontal noUi-marker-normal'
										style={{ left: '32%' }}
									/>
									<div
										className='noUi-marker noUi-marker-horizontal noUi-marker-normal'
										style={{ left: '33%' }}
									/>
									<div
										className='noUi-marker noUi-marker-horizontal noUi-marker-normal'
										style={{ left: '34%' }}
									/>
									<div
										className='noUi-marker noUi-marker-horizontal noUi-marker-normal'
										style={{ left: '35%' }}
									/>
									<div
										className='noUi-marker noUi-marker-horizontal noUi-marker-normal'
										style={{ left: '36%' }}
									/>
									<div
										className='noUi-marker noUi-marker-horizontal noUi-marker-normal'
										style={{ left: '37%' }}
									/>
									<div
										className='noUi-marker noUi-marker-horizontal noUi-marker-normal'
										style={{ left: '38%' }}
									/>
									<div
										className='noUi-marker noUi-marker-horizontal noUi-marker-normal'
										style={{ left: '39%' }}
									/>
									<div
										className='noUi-marker noUi-marker-horizontal noUi-marker-normal'
										style={{ left: '40%' }}
									/>
									<div
										className='noUi-marker noUi-marker-horizontal noUi-marker-normal'
										style={{ left: '41%' }}
									/>
									<div
										className='noUi-marker noUi-marker-horizontal noUi-marker-normal'
										style={{ left: '42%' }}
									/>
									<div
										className='noUi-marker noUi-marker-horizontal noUi-marker-normal'
										style={{ left: '43%' }}
									/>
									<div
										className='noUi-marker noUi-marker-horizontal noUi-marker-normal'
										style={{ left: '44%' }}
									/>
									<div
										className='noUi-marker noUi-marker-horizontal noUi-marker-normal'
										style={{ left: '45%' }}
									/>
									<div
										className='noUi-marker noUi-marker-horizontal noUi-marker-normal'
										style={{ left: '46%' }}
									/>
									<div
										className='noUi-marker noUi-marker-horizontal noUi-marker-normal'
										style={{ left: '47%' }}
									/>
									<div
										className='noUi-marker noUi-marker-horizontal noUi-marker-normal'
										style={{ left: '48%' }}
									/>
									<div
										className='noUi-marker noUi-marker-horizontal noUi-marker-normal'
										style={{ left: '49%' }}
									/>
									<div
										className='noUi-marker noUi-marker-horizontal noUi-marker-large'
										style={{ left: '50%' }}
									/>
									<div
										className='noUi-value noUi-value-horizontal noUi-value-large'
										data-value={500}
										style={{ left: '50%' }}>
										500
									</div>
									<div
										className='noUi-marker noUi-marker-horizontal noUi-marker-normal'
										style={{ left: '51%' }}
									/>
									<div
										className='noUi-marker noUi-marker-horizontal noUi-marker-normal'
										style={{ left: '52%' }}
									/>
									<div
										className='noUi-marker noUi-marker-horizontal noUi-marker-normal'
										style={{ left: '53%' }}
									/>
									<div
										className='noUi-marker noUi-marker-horizontal noUi-marker-normal'
										style={{ left: '54%' }}
									/>
									<div
										className='noUi-marker noUi-marker-horizontal noUi-marker-normal'
										style={{ left: '55%' }}
									/>
									<div
										className='noUi-marker noUi-marker-horizontal noUi-marker-normal'
										style={{ left: '56%' }}
									/>
									<div
										className='noUi-marker noUi-marker-horizontal noUi-marker-normal'
										style={{ left: '57%' }}
									/>
									<div
										className='noUi-marker noUi-marker-horizontal noUi-marker-normal'
										style={{ left: '58%' }}
									/>
									<div
										className='noUi-marker noUi-marker-horizontal noUi-marker-normal'
										style={{ left: '59%' }}
									/>
									<div
										className='noUi-marker noUi-marker-horizontal noUi-marker-normal'
										style={{ left: '60%' }}
									/>
									<div
										className='noUi-marker noUi-marker-horizontal noUi-marker-normal'
										style={{ left: '61%' }}
									/>
									<div
										className='noUi-marker noUi-marker-horizontal noUi-marker-normal'
										style={{ left: '62%' }}
									/>
									<div
										className='noUi-marker noUi-marker-horizontal noUi-marker-normal'
										style={{ left: '63%' }}
									/>
									<div
										className='noUi-marker noUi-marker-horizontal noUi-marker-normal'
										style={{ left: '64%' }}
									/>
									<div
										className='noUi-marker noUi-marker-horizontal noUi-marker-normal'
										style={{ left: '65%' }}
									/>
									<div
										className='noUi-marker noUi-marker-horizontal noUi-marker-normal'
										style={{ left: '66%' }}
									/>
									<div
										className='noUi-marker noUi-marker-horizontal noUi-marker-normal'
										style={{ left: '67%' }}
									/>
									<div
										className='noUi-marker noUi-marker-horizontal noUi-marker-normal'
										style={{ left: '68%' }}
									/>
									<div
										className='noUi-marker noUi-marker-horizontal noUi-marker-normal'
										style={{ left: '69%' }}
									/>
									<div
										className='noUi-marker noUi-marker-horizontal noUi-marker-normal'
										style={{ left: '70%' }}
									/>
									<div
										className='noUi-marker noUi-marker-horizontal noUi-marker-normal'
										style={{ left: '71%' }}
									/>
									<div
										className='noUi-marker noUi-marker-horizontal noUi-marker-normal'
										style={{ left: '72%' }}
									/>
									<div
										className='noUi-marker noUi-marker-horizontal noUi-marker-normal'
										style={{ left: '73%' }}
									/>
									<div
										className='noUi-marker noUi-marker-horizontal noUi-marker-normal'
										style={{ left: '74%' }}
									/>
									<div
										className='noUi-marker noUi-marker-horizontal noUi-marker-large'
										style={{ left: '75%' }}
									/>
									<div
										className='noUi-value noUi-value-horizontal noUi-value-large'
										data-value={750}
										style={{ left: '75%' }}>
										750
									</div>
									<div
										className='noUi-marker noUi-marker-horizontal noUi-marker-normal'
										style={{ left: '76%' }}
									/>
									<div
										className='noUi-marker noUi-marker-horizontal noUi-marker-normal'
										style={{ left: '77%' }}
									/>
									<div
										className='noUi-marker noUi-marker-horizontal noUi-marker-normal'
										style={{ left: '78%' }}
									/>
									<div
										className='noUi-marker noUi-marker-horizontal noUi-marker-normal'
										style={{ left: '79%' }}
									/>
									<div
										className='noUi-marker noUi-marker-horizontal noUi-marker-normal'
										style={{ left: '80%' }}
									/>
									<div
										className='noUi-marker noUi-marker-horizontal noUi-marker-normal'
										style={{ left: '81%' }}
									/>
									<div
										className='noUi-marker noUi-marker-horizontal noUi-marker-normal'
										style={{ left: '82%' }}
									/>
									<div
										className='noUi-marker noUi-marker-horizontal noUi-marker-normal'
										style={{ left: '83%' }}
									/>
									<div
										className='noUi-marker noUi-marker-horizontal noUi-marker-normal'
										style={{ left: '84%' }}
									/>
									<div
										className='noUi-marker noUi-marker-horizontal noUi-marker-normal'
										style={{ left: '85%' }}
									/>
									<div
										className='noUi-marker noUi-marker-horizontal noUi-marker-normal'
										style={{ left: '86%' }}
									/>
									<div
										className='noUi-marker noUi-marker-horizontal noUi-marker-normal'
										style={{ left: '87%' }}
									/>
									<div
										className='noUi-marker noUi-marker-horizontal noUi-marker-normal'
										style={{ left: '88%' }}
									/>
									<div
										className='noUi-marker noUi-marker-horizontal noUi-marker-normal'
										style={{ left: '89%' }}
									/>
									<div
										className='noUi-marker noUi-marker-horizontal noUi-marker-normal'
										style={{ left: '90%' }}
									/>
									<div
										className='noUi-marker noUi-marker-horizontal noUi-marker-normal'
										style={{ left: '91%' }}
									/>
									<div
										className='noUi-marker noUi-marker-horizontal noUi-marker-normal'
										style={{ left: '92%' }}
									/>
									<div
										className='noUi-marker noUi-marker-horizontal noUi-marker-normal'
										style={{ left: '93%' }}
									/>
									<div
										className='noUi-marker noUi-marker-horizontal noUi-marker-normal'
										style={{ left: '94%' }}
									/>
									<div
										className='noUi-marker noUi-marker-horizontal noUi-marker-normal'
										style={{ left: '95%' }}
									/>
									<div
										className='noUi-marker noUi-marker-horizontal noUi-marker-normal'
										style={{ left: '96%' }}
									/>
									<div
										className='noUi-marker noUi-marker-horizontal noUi-marker-normal'
										style={{ left: '97%' }}
									/>
									<div
										className='noUi-marker noUi-marker-horizontal noUi-marker-normal'
										style={{ left: '98%' }}
									/>
									<div
										className='noUi-marker noUi-marker-horizontal noUi-marker-normal'
										style={{ left: '99%' }}
									/>
									<div
										className='noUi-marker noUi-marker-horizontal noUi-marker-large'
										style={{ left: '100%' }}
									/>
									<div
										className='noUi-value noUi-value-horizontal noUi-value-large'
										data-value={1000}
										style={{ left: '100%' }}>
										1000
									</div>
								</div>
							</div>
							<div className='d-flex pb-1'>
								<div className='w-50 pe-2 me-2'>
									<div className='input-group input-group-sm'>
										<span className='input-group-text'>$</span>
										<input
											className='form-control range-slider-value-min'
											type='text'
										/>
									</div>
								</div>
								<div className='w-50 ps-2'>
									<div className='input-group input-group-sm'>
										<span className='input-group-text'>$</span>
										<input
											className='form-control range-slider-value-max'
											type='text'
										/>
									</div>
								</div>
							</div>
						</div>
					</div>
					{/* Filter by Brand*/}
					<div className='widget widget-filter mb-4 pb-4 border-bottom'>
						<h3 className='widget-title'>Brand</h3>
						<div className='input-group input-group-sm mb-2'>
							<input
								className='widget-filter-search form-control rounded-end pe-5'
								type='text'
								placeholder='Search'
							/>
							<i className='ci-search position-absolute top-50 end-0 translate-middle-y fs-sm me-3' />
						</div>
						<ul
							className='widget-list widget-filter-list list-unstyled pt-1'
							style={{ maxHeight: '11rem' }}
							data-simplebar='init'
							data-simplebar-auto-hide='false'>
							<div
								className='simplebar-wrapper'
								style={{ margin: '-4px -16px 0px 0px' }}>
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
											style={{ height: 'auto', overflow: 'hidden scroll' }}>
											<div
												className='simplebar-content'
												style={{ padding: '4px 16px 0px 0px' }}>
												<li className='widget-filter-item d-flex justify-content-between align-items-center mb-1'>
													<div className='form-check'>
														<input
															className='form-check-input'
															type='checkbox'
															id='adidas'
														/>
														<label
															className='form-check-label widget-filter-item-text'
															htmlFor='adidas'>
															Adidas
														</label>
													</div>
													<span className='fs-xs text-muted'>425</span>
												</li>
												<li className='widget-filter-item d-flex justify-content-between align-items-center mb-1'>
													<div className='form-check'>
														<input
															className='form-check-input'
															type='checkbox'
															id='ataylor'
														/>
														<label
															className='form-check-label widget-filter-item-text'
															htmlFor='ataylor'>
															Ann Taylor
														</label>
													</div>
													<span className='fs-xs text-muted'>15</span>
												</li>
												<li className='widget-filter-item d-flex justify-content-between align-items-center mb-1'>
													<div className='form-check'>
														<input
															className='form-check-input'
															type='checkbox'
															id='armani'
														/>
														<label
															className='form-check-label widget-filter-item-text'
															htmlFor='armani'>
															Armani
														</label>
													</div>
													<span className='fs-xs text-muted'>18</span>
												</li>
												<li className='widget-filter-item d-flex justify-content-between align-items-center mb-1'>
													<div className='form-check'>
														<input
															className='form-check-input'
															type='checkbox'
															id='banana'
														/>
														<label
															className='form-check-label widget-filter-item-text'
															htmlFor='banana'>
															Banana Republic
														</label>
													</div>
													<span className='fs-xs text-muted'>103</span>
												</li>
												<li className='widget-filter-item d-flex justify-content-between align-items-center mb-1'>
													<div className='form-check'>
														<input
															className='form-check-input'
															type='checkbox'
															id='bilabong'
														/>
														<label
															className='form-check-label widget-filter-item-text'
															htmlFor='bilabong'>
															Bilabong
														</label>
													</div>
													<span className='fs-xs text-muted'>27</span>
												</li>
												<li className='widget-filter-item d-flex justify-content-between align-items-center mb-1'>
													<div className='form-check'>
														<input
															className='form-check-input'
															type='checkbox'
															id='birkenstock'
														/>
														<label
															className='form-check-label widget-filter-item-text'
															htmlFor='birkenstock'>
															Birkenstock
														</label>
													</div>
													<span className='fs-xs text-muted'>10</span>
												</li>
												<li className='widget-filter-item d-flex justify-content-between align-items-center mb-1'>
													<div className='form-check'>
														<input
															className='form-check-input'
															type='checkbox'
															id='klein'
														/>
														<label
															className='form-check-label widget-filter-item-text'
															htmlFor='klein'>
															Calvin Klein
														</label>
													</div>
													<span className='fs-xs text-muted'>365</span>
												</li>
												<li className='widget-filter-item d-flex justify-content-between align-items-center mb-1'>
													<div className='form-check'>
														<input
															className='form-check-input'
															type='checkbox'
															id='columbia'
														/>
														<label
															className='form-check-label widget-filter-item-text'
															htmlFor='columbia'>
															Columbia
														</label>
													</div>
													<span className='fs-xs text-muted'>508</span>
												</li>
												<li className='widget-filter-item d-flex justify-content-between align-items-center mb-1'>
													<div className='form-check'>
														<input
															className='form-check-input'
															type='checkbox'
															id='converse'
														/>
														<label
															className='form-check-label widget-filter-item-text'
															htmlFor='converse'>
															Converse
														</label>
													</div>
													<span className='fs-xs text-muted'>176</span>
												</li>
												<li className='widget-filter-item d-flex justify-content-between align-items-center mb-1'>
													<div className='form-check'>
														<input
															className='form-check-input'
															type='checkbox'
															id='dockers'
														/>
														<label
															className='form-check-label widget-filter-item-text'
															htmlFor='dockers'>
															Dockers
														</label>
													</div>
													<span className='fs-xs text-muted'>54</span>
												</li>
												<li className='widget-filter-item d-flex justify-content-between align-items-center mb-1'>
													<div className='form-check'>
														<input
															className='form-check-input'
															type='checkbox'
															id='fruit'
														/>
														<label
															className='form-check-label widget-filter-item-text'
															htmlFor='fruit'>
															Fruit of the Loom
														</label>
													</div>
													<span className='fs-xs text-muted'>739</span>
												</li>
												<li className='widget-filter-item d-flex justify-content-between align-items-center mb-1'>
													<div className='form-check'>
														<input
															className='form-check-input'
															type='checkbox'
															id='hanes'
														/>
														<label
															className='form-check-label widget-filter-item-text'
															htmlFor='hanes'>
															Hanes
														</label>
													</div>
													<span className='fs-xs text-muted'>92</span>
												</li>
												<li className='widget-filter-item d-flex justify-content-between align-items-center mb-1'>
													<div className='form-check'>
														<input
															className='form-check-input'
															type='checkbox'
															id='choo'
														/>
														<label
															className='form-check-label widget-filter-item-text'
															htmlFor='choo'>
															Jimmy Choo
														</label>
													</div>
													<span className='fs-xs text-muted'>17</span>
												</li>
												<li className='widget-filter-item d-flex justify-content-between align-items-center mb-1'>
													<div className='form-check'>
														<input
															className='form-check-input'
															type='checkbox'
															id='levis'
														/>
														<label
															className='form-check-label widget-filter-item-text'
															htmlFor='levis'>
															Levi's
														</label>
													</div>
													<span className='fs-xs text-muted'>361</span>
												</li>
												<li className='widget-filter-item d-flex justify-content-between align-items-center mb-1'>
													<div className='form-check'>
														<input
															className='form-check-input'
															type='checkbox'
															id='lee'
														/>
														<label
															className='form-check-label widget-filter-item-text'
															htmlFor='lee'>
															Lee
														</label>
													</div>
													<span className='fs-xs text-muted'>264</span>
												</li>
												<li className='widget-filter-item d-flex justify-content-between align-items-center mb-1'>
													<div className='form-check'>
														<input
															className='form-check-input'
															type='checkbox'
															id='wearhouse'
														/>
														<label
															className='form-check-label widget-filter-item-text'
															htmlFor='wearhouse'>
															Men's Wearhouse
														</label>
													</div>
													<span className='fs-xs text-muted'>75</span>
												</li>
												<li className='widget-filter-item d-flex justify-content-between align-items-center mb-1'>
													<div className='form-check'>
														<input
															className='form-check-input'
															type='checkbox'
															id='newbalance'
														/>
														<label
															className='form-check-label widget-filter-item-text'
															htmlFor='newbalance'>
															New Balance
														</label>
													</div>
													<span className='fs-xs text-muted'>218</span>
												</li>
												<li className='widget-filter-item d-flex justify-content-between align-items-center mb-1'>
													<div className='form-check'>
														<input
															className='form-check-input'
															type='checkbox'
															id='nike'
														/>
														<label
															className='form-check-label widget-filter-item-text'
															htmlFor='nike'>
															Nike
														</label>
													</div>
													<span className='fs-xs text-muted'>810</span>
												</li>
												<li className='widget-filter-item d-flex justify-content-between align-items-center mb-1'>
													<div className='form-check'>
														<input
															className='form-check-input'
															type='checkbox'
															id='navy'
														/>
														<label
															className='form-check-label widget-filter-item-text'
															htmlFor='navy'>
															Old Navy
														</label>
													</div>
													<span className='fs-xs text-muted'>147</span>
												</li>
												<li className='widget-filter-item d-flex justify-content-between align-items-center mb-1'>
													<div className='form-check'>
														<input
															className='form-check-input'
															type='checkbox'
															id='polo'
														/>
														<label
															className='form-check-label widget-filter-item-text'
															htmlFor='polo'>
															Polo Ralph Lauren
														</label>
													</div>
													<span className='fs-xs text-muted'>64</span>
												</li>
												<li className='widget-filter-item d-flex justify-content-between align-items-center mb-1'>
													<div className='form-check'>
														<input
															className='form-check-input'
															type='checkbox'
															id='puma'
														/>
														<label
															className='form-check-label widget-filter-item-text'
															htmlFor='puma'>
															Puma
														</label>
													</div>
													<span className='fs-xs text-muted'>370</span>
												</li>
												<li className='widget-filter-item d-flex justify-content-between align-items-center mb-1'>
													<div className='form-check'>
														<input
															className='form-check-input'
															type='checkbox'
															id='reebok'
														/>
														<label
															className='form-check-label widget-filter-item-text'
															htmlFor='reebok'>
															Reebok
														</label>
													</div>
													<span className='fs-xs text-muted'>506</span>
												</li>
												<li className='widget-filter-item d-flex justify-content-between align-items-center mb-1'>
													<div className='form-check'>
														<input
															className='form-check-input'
															type='checkbox'
															id='skechers'
														/>
														<label
															className='form-check-label widget-filter-item-text'
															htmlFor='skechers'>
															Skechers
														</label>
													</div>
													<span className='fs-xs text-muted'>209</span>
												</li>
												<li className='widget-filter-item d-flex justify-content-between align-items-center mb-1'>
													<div className='form-check'>
														<input
															className='form-check-input'
															type='checkbox'
															id='hilfiger'
														/>
														<label
															className='form-check-label widget-filter-item-text'
															htmlFor='hilfiger'>
															Tommy Hilfiger
														</label>
													</div>
													<span className='fs-xs text-muted'>487</span>
												</li>
												<li className='widget-filter-item d-flex justify-content-between align-items-center mb-1'>
													<div className='form-check'>
														<input
															className='form-check-input'
															type='checkbox'
															id='armour'
														/>
														<label
															className='form-check-label widget-filter-item-text'
															htmlFor='armour'>
															Under Armour
														</label>
													</div>
													<span className='fs-xs text-muted'>90</span>
												</li>
												<li className='widget-filter-item d-flex justify-content-between align-items-center mb-1'>
													<div className='form-check'>
														<input
															className='form-check-input'
															type='checkbox'
															id='urban'
														/>
														<label
															className='form-check-label widget-filter-item-text'
															htmlFor='urban'>
															Urban Outfitters
														</label>
													</div>
													<span className='fs-xs text-muted'>152</span>
												</li>
												<li className='widget-filter-item d-flex justify-content-between align-items-center mb-1'>
													<div className='form-check'>
														<input
															className='form-check-input'
															type='checkbox'
															id='vsecret'
														/>
														<label
															className='form-check-label widget-filter-item-text'
															htmlFor='vsecret'>
															Victoria's Secret
														</label>
													</div>
													<span className='fs-xs text-muted'>238</span>
												</li>
												<li className='widget-filter-item d-flex justify-content-between align-items-center mb-1'>
													<div className='form-check'>
														<input
															className='form-check-input'
															type='checkbox'
															id='wolverine'
														/>
														<label
															className='form-check-label widget-filter-item-text'
															htmlFor='wolverine'>
															Wolverine
														</label>
													</div>
													<span className='fs-xs text-muted'>29</span>
												</li>
												<li className='widget-filter-item d-flex justify-content-between align-items-center'>
													<div className='form-check'>
														<input
															className='form-check-input'
															type='checkbox'
															id='wrangler'
														/>
														<label
															className='form-check-label widget-filter-item-text'
															htmlFor='wrangler'>
															Wrangler
														</label>
													</div>
													<span className='fs-xs text-muted'>115</span>
												</li>
											</div>
										</div>
									</div>
								</div>
								<div
									className='simplebar-placeholder'
									style={{ width: 'auto', height: 870 }}
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
								style={{ visibility: 'visible' }}>
								<div
									className='simplebar-scrollbar simplebar-visible'
									style={{
										height: 35,
										transform: 'translate3d(0px, 0px, 0px)',
										display: 'block',
									}}
								/>
							</div>
						</ul>
					</div>
					{/* Filter by Size*/}
					<div className='widget widget-filter mb-4 pb-4 border-bottom'>
						<h3 className='widget-title'>Size</h3>
						<div className='input-group input-group-sm mb-2'>
							<input
								className='widget-filter-search form-control rounded-end pe-5'
								type='text'
								placeholder='Search'
							/>
							<i className='ci-search position-absolute top-50 end-0 translate-middle-y fs-sm me-3' />
						</div>
						<ul
							className='widget-list widget-filter-list list-unstyled pt-1'
							style={{ maxHeight: '11rem' }}
							data-simplebar='init'
							data-simplebar-auto-hide='false'>
							<div
								className='simplebar-wrapper'
								style={{ margin: '-4px -16px 0px 0px' }}>
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
											style={{ height: 'auto', overflow: 'hidden scroll' }}>
											<div
												className='simplebar-content'
												style={{ padding: '4px 16px 0px 0px' }}>
												<li className='widget-filter-item d-flex justify-content-between align-items-center mb-1'>
													<div className='form-check'>
														<input
															className='form-check-input'
															type='checkbox'
															id='size-xs'
														/>
														<label
															className='form-check-label widget-filter-item-text'
															htmlFor='size-xs'>
															XS
														</label>
													</div>
													<span className='fs-xs text-muted'>34</span>
												</li>
												<li className='widget-filter-item d-flex justify-content-between align-items-center mb-1'>
													<div className='form-check'>
														<input
															className='form-check-input'
															type='checkbox'
															id='size-s'
														/>
														<label
															className='form-check-label widget-filter-item-text'
															htmlFor='size-s'>
															S
														</label>
													</div>
													<span className='fs-xs text-muted'>57</span>
												</li>
												<li className='widget-filter-item d-flex justify-content-between align-items-center mb-1'>
													<div className='form-check'>
														<input
															className='form-check-input'
															type='checkbox'
															id='size-m'
														/>
														<label
															className='form-check-label widget-filter-item-text'
															htmlFor='size-m'>
															M
														</label>
													</div>
													<span className='fs-xs text-muted'>198</span>
												</li>
												<li className='widget-filter-item d-flex justify-content-between align-items-center mb-1'>
													<div className='form-check'>
														<input
															className='form-check-input'
															type='checkbox'
															id='size-l'
														/>
														<label
															className='form-check-label widget-filter-item-text'
															htmlFor='size-l'>
															L
														</label>
													</div>
													<span className='fs-xs text-muted'>72</span>
												</li>
												<li className='widget-filter-item d-flex justify-content-between align-items-center mb-1'>
													<div className='form-check'>
														<input
															className='form-check-input'
															type='checkbox'
															id='size-xl'
														/>
														<label
															className='form-check-label widget-filter-item-text'
															htmlFor='size-xl'>
															XL
														</label>
													</div>
													<span className='fs-xs text-muted'>46</span>
												</li>
												<li className='widget-filter-item d-flex justify-content-between align-items-center mb-1'>
													<div className='form-check'>
														<input
															className='form-check-input'
															type='checkbox'
															id='size-39'
														/>
														<label
															className='form-check-label widget-filter-item-text'
															htmlFor='size-39'>
															39
														</label>
													</div>
													<span className='fs-xs text-muted'>112</span>
												</li>
												<li className='widget-filter-item d-flex justify-content-between align-items-center mb-1'>
													<div className='form-check'>
														<input
															className='form-check-input'
															type='checkbox'
															id='size-40'
														/>
														<label
															className='form-check-label widget-filter-item-text'
															htmlFor='size-40'>
															40
														</label>
													</div>
													<span className='fs-xs text-muted'>85</span>
												</li>
												<li className='widget-filter-item d-flex justify-content-between align-items-center mb-1'>
													<div className='form-check'>
														<input
															className='form-check-input'
															type='checkbox'
															id='size-41'
														/>
														<label
															className='form-check-label widget-filter-item-text'
															htmlFor='size-40'>
															41
														</label>
													</div>
													<span className='fs-xs text-muted'>210</span>
												</li>
												<li className='widget-filter-item d-flex justify-content-between align-items-center mb-1'>
													<div className='form-check'>
														<input
															className='form-check-input'
															type='checkbox'
															id='size-42'
														/>
														<label
															className='form-check-label widget-filter-item-text'
															htmlFor='size-42'>
															42
														</label>
													</div>
													<span className='fs-xs text-muted'>57</span>
												</li>
												<li className='widget-filter-item d-flex justify-content-between align-items-center mb-1'>
													<div className='form-check'>
														<input
															className='form-check-input'
															type='checkbox'
															id='size-43'
														/>
														<label
															className='form-check-label widget-filter-item-text'
															htmlFor='size-43'>
															43
														</label>
													</div>
													<span className='fs-xs text-muted'>30</span>
												</li>
												<li className='widget-filter-item d-flex justify-content-between align-items-center mb-1'>
													<div className='form-check'>
														<input
															className='form-check-input'
															type='checkbox'
															id='size-44'
														/>
														<label
															className='form-check-label widget-filter-item-text'
															htmlFor='size-44'>
															44
														</label>
													</div>
													<span className='fs-xs text-muted'>61</span>
												</li>
												<li className='widget-filter-item d-flex justify-content-between align-items-center mb-1'>
													<div className='form-check'>
														<input
															className='form-check-input'
															type='checkbox'
															id='size-45'
														/>
														<label
															className='form-check-label widget-filter-item-text'
															htmlFor='size-45'>
															45
														</label>
													</div>
													<span className='fs-xs text-muted'>23</span>
												</li>
												<li className='widget-filter-item d-flex justify-content-between align-items-center mb-1'>
													<div className='form-check'>
														<input
															className='form-check-input'
															type='checkbox'
															id='size-46'
														/>
														<label
															className='form-check-label widget-filter-item-text'
															htmlFor='size-46'>
															46
														</label>
													</div>
													<span className='fs-xs text-muted'>19</span>
												</li>
												<li className='widget-filter-item d-flex justify-content-between align-items-center mb-1'>
													<div className='form-check'>
														<input
															className='form-check-input'
															type='checkbox'
															id='size-47'
														/>
														<label
															className='form-check-label widget-filter-item-text'
															htmlFor='size-47'>
															47
														</label>
													</div>
													<span className='fs-xs text-muted'>15</span>
												</li>
												<li className='widget-filter-item d-flex justify-content-between align-items-center mb-1'>
													<div className='form-check'>
														<input
															className='form-check-input'
															type='checkbox'
															id='size-48'
														/>
														<label
															className='form-check-label widget-filter-item-text'
															htmlFor='size-48'>
															48
														</label>
													</div>
													<span className='fs-xs text-muted'>12</span>
												</li>
												<li className='widget-filter-item d-flex justify-content-between align-items-center mb-1'>
													<div className='form-check'>
														<input
															className='form-check-input'
															type='checkbox'
															id='size-49'
														/>
														<label
															className='form-check-label widget-filter-item-text'
															htmlFor='size-49'>
															49
														</label>
													</div>
													<span className='fs-xs text-muted'>8</span>
												</li>
												<li className='widget-filter-item d-flex justify-content-between align-items-center'>
													<div className='form-check'>
														<input
															className='form-check-input'
															type='checkbox'
															id='size-50'
														/>
														<label
															className='form-check-label widget-filter-item-text'
															htmlFor='size-50'>
															50
														</label>
													</div>
													<span className='fs-xs text-muted'>6</span>
												</li>
											</div>
										</div>
									</div>
								</div>
								<div
									className='simplebar-placeholder'
									style={{ width: 'auto', height: 510 }}
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
								style={{ visibility: 'visible' }}>
								<div
									className='simplebar-scrollbar simplebar-visible'
									style={{
										height: 60,
										transform: 'translate3d(0px, 0px, 0px)',
										display: 'block',
									}}
								/>
							</div>
						</ul>
					</div>
					{/* Filter by Color*/}
					<div className='widget'>
						<h3 className='widget-title'>Color</h3>
						<div className='d-flex flex-wrap'>
							<div
								className='form-check form-option text-center mb-2 mx-1'
								style={{ width: '4rem' }}>
								<input
									className='form-check-input'
									type='checkbox'
									id='color-blue-gray'
								/>
								<label
									className='form-option-label rounded-circle'
									htmlFor='color-blue-gray'>
									<span
										className='form-option-color rounded-circle'
										style={{ backgroundColor: '#b3c8db' }}
									/>
								</label>
								<label
									className='d-block fs-xs text-muted mt-n1'
									htmlFor='color-blue-gray'>
									Blue-gray
								</label>
							</div>
							<div
								className='form-check form-option text-center mb-2 mx-1'
								style={{ width: '4rem' }}>
								<input
									className='form-check-input'
									type='checkbox'
									id='color-burgundy'
								/>
								<label
									className='form-option-label rounded-circle'
									htmlFor='color-burgundy'>
									<span
										className='form-option-color rounded-circle'
										style={{ backgroundColor: '#ca7295' }}
									/>
								</label>
								<label
									className='d-block fs-xs text-muted mt-n1'
									htmlFor='color-burgundy'>
									Burgundy
								</label>
							</div>
							<div
								className='form-check form-option text-center mb-2 mx-1'
								style={{ width: '4rem' }}>
								<input
									className='form-check-input'
									type='checkbox'
									id='color-teal'
								/>
								<label
									className='form-option-label rounded-circle'
									htmlFor='color-teal'>
									<span
										className='form-option-color rounded-circle'
										style={{ backgroundColor: '#91c2c3' }}
									/>
								</label>
								<label
									className='d-block fs-xs text-muted mt-n1'
									htmlFor='color-teal'>
									Teal
								</label>
							</div>
							<div
								className='form-check form-option text-center mb-2 mx-1'
								style={{ width: '4rem' }}>
								<input
									className='form-check-input'
									type='checkbox'
									id='color-brown'
								/>
								<label
									className='form-option-label rounded-circle'
									htmlFor='color-brown'>
									<span
										className='form-option-color rounded-circle'
										style={{ backgroundColor: '#9a8480' }}
									/>
								</label>
								<label
									className='d-block fs-xs text-muted mt-n1'
									htmlFor='color-brown'>
									Brown
								</label>
							</div>
							<div
								className='form-check form-option text-center mb-2 mx-1'
								style={{ width: '4rem' }}>
								<input
									className='form-check-input'
									type='checkbox'
									id='color-coral-red'
								/>
								<label
									className='form-option-label rounded-circle'
									htmlFor='color-coral-red'>
									<span
										className='form-option-color rounded-circle'
										style={{ backgroundColor: '#ff7072' }}
									/>
								</label>
								<label
									className='d-block fs-xs text-muted mt-n1'
									htmlFor='color-coral-red'>
									Coral red
								</label>
							</div>
							<div
								className='form-check form-option text-center mb-2 mx-1'
								style={{ width: '4rem' }}>
								<input
									className='form-check-input'
									type='checkbox'
									id='color-navy'
								/>
								<label
									className='form-option-label rounded-circle'
									htmlFor='color-navy'>
									<span
										className='form-option-color rounded-circle'
										style={{ backgroundColor: '#696dc8' }}
									/>
								</label>
								<label
									className='d-block fs-xs text-muted mt-n1'
									htmlFor='color-navy'>
									Navy
								</label>
							</div>
							<div
								className='form-check form-option text-center mb-2 mx-1'
								style={{ width: '4rem' }}>
								<input
									className='form-check-input'
									type='checkbox'
									id='color-charcoal'
								/>
								<label
									className='form-option-label rounded-circle'
									htmlFor='color-charcoal'>
									<span
										className='form-option-color rounded-circle'
										style={{ backgroundColor: '#4e4d4d' }}
									/>
								</label>
								<label
									className='d-block fs-xs text-muted mt-n1'
									htmlFor='color-charcoal'>
									Charcoal
								</label>
							</div>
							<div
								className='form-check form-option text-center mb-2 mx-1'
								style={{ width: '4rem' }}>
								<input
									className='form-check-input'
									type='checkbox'
									id='color-sky-blue'
								/>
								<label
									className='form-option-label rounded-circle'
									htmlFor='color-sky-blue'>
									<span
										className='form-option-color rounded-circle'
										style={{ backgroundColor: '#8bcdf5' }}
									/>
								</label>
								<label
									className='d-block fs-xs text-muted mt-n1'
									htmlFor='color-sky-blue'>
									Sky blue
								</label>
							</div>
						</div>
					</div>
				</div>
			</div>
		</aside>
	)
}

export default FiltersSidebar
