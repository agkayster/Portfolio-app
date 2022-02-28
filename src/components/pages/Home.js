import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import porfolioXImage from '../../assets/portfolioX-img.jpeg';
import blog from '../../assets/blog-portfolioX-logo.jpeg';
import callCenter from '../../assets/call-center-logo-portfolioX.jpeg';
import community from '../../assets/community-portfolioX-logo.jpeg';
import careers from '../../assets/careers-portfoliox-logo.jpeg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const log = console.log.bind(document);

function Home() {
	const homeImages = [
		{
			id: 1,
			image: blog,
			header: 'PortfolioX Blog',
			text: "News and Updates from the world's leading shares and assets exchange.",
		},
		{
			id: 2,
			image: callCenter,
			header: '24/7 Support',
			text: 'Got a problem? Just get in touch, Our support team is available round the clock.',
		},
		{
			id: 3,
			image: community,
			header: 'Community',
			text: 'PortfolioX is global. Join the discussion in our worldwide communities.',
		},
		{
			id: 4,
			image: careers,
			header: 'Careers',
			text: 'Help build the future of technology. Start your new career at PortfolioX',
		},
	];
	const [images] = useState(homeImages);

	log('get images =>', images);

	return (
		<div>
			<div className='row first-portfolio-section'>
				<div className='clearfix pt-2'>
					<h2 className='portfolio-header'>
						Manage your Portfolio in minutes
					</h2>
					<p className='portfolio-paragraph'>
						Join the world's largest portfolio platform
					</p>
					<Link
						to='/register'
						className='register-paragraph text-decoration-none'
						aria-current='page'>
						Register Now
					</Link>

					<FontAwesomeIcon icon='fa-solid fa-star' />
					<FontAwesomeIcon icon='fa-solid fa-star' />
					<FontAwesomeIcon icon='fa-solid fa-star' />
					<FontAwesomeIcon icon='fa-solid fa-star' />
					<FontAwesomeIcon icon='fa-solid fa-star' />
					<img
						className='float-end pt-2 portfolio-img'
						src={porfolioXImage}
						height='350'
						width='300'
						alt='portfolio'
					/>
				</div>
			</div>
			<div className='row second-portfolio-section position-relative'>
				<div className='col'>
					<h2 className='portfolio-text2 position-absolute top-50 start-50 translate-middle'>
						Trade, Monitor, Add and Loan.
					</h2>
					<p className='portfolio-paragraph2 position-absolute top-50 start-50 translate-middle mt-5'>
						PortfolioX gives you that convenience to trade, monitor,
						add and loan money against your portfolio at your own
						desired interest rate and re-payment plan.
					</p>
				</div>
			</div>
			<div className='row third-portfolio-section position-relative'>
				<div className='col mt-5'>
					<h2 className='portfolio-text3 position-absolute top-0 start-50 translate-middle mt-5'>
						Get connected. Stay connected.
					</h2>
					<ul className='list-inline d-inline-flex flex-row justify-content-between mt-4 p-3'>
						{images.map(({ image, header, text, id }) => {
							if (id === 2 || id === 3 || id === 4) {
								return (
									<li key={id} className='me-2 '>
										<img
											src={image}
											alt='all'
											height={100}
											width={100}
										/>
										<h6 className='ms-3 fw-bolder'>
											{header}
										</h6>
										<p className='mt-3 ms-3 connected-text'>
											{text}
										</p>
									</li>
								);
							} else if (id === 1) {
								return (
									<li key={id} className='me-2 p-2'>
										<img
											src={image}
											alt='all'
											height={50}
											className='mt-4'
										/>
										<h6 className='mt-4 fw-bolder'>
											{header}
										</h6>
										<p className='mt-3 connected-text'>
											{text}
										</p>
									</li>
								);
							}
						})}
					</ul>
				</div>
			</div>
			<div className='row fourth-portfolio-section position-relative'>
				<div className='col'>
					<h2 className='portfolio-text4 position-absolute top-50 start-50 translate-middle pb-5'>
						Start managing your portfolio now
					</h2>
					<div className='reg-man d-flex flex-row position-absolute top-50 start-50 translate-middle mt-5'>
						<Link
							to='/register'
							className='register-paragraph2 text-decoration-none'
							aria-current='page'>
							Register Now
						</Link>

						<Link
							to='/login'
							className='manage-paragraph ms-2 text-decoration-none'
							aria-current='page'>
							Manage Now
						</Link>
					</div>
				</div>
			</div>

			<div className='row fifth-portfolio-section pt-5 ps-5'>
				<div className='col about'>
					<h5 className='portfolio-text5'>
						<b>About Us</b>
					</h5>
					<ul className='list-unstyled text-muted'>
						<li>About</li>
						<li>Careers</li>
						<li>Community</li>
						<li>Blog</li>
					</ul>
				</div>
				<div className='col products'>
					<h5 className='portfolio-text6'>
						<b>Products</b>
					</h5>
					<ul className='list-unstyled text-muted'>
						<li>Exchange</li>
						<li>Academy</li>
						<li>Charity</li>
						<li>Card</li>
					</ul>
				</div>
				<div className='col service'>
					<h5 className='portfolio-text7'>
						<b>Service</b>
					</h5>
					<ul className='list-unstyled text-muted'>
						<li>Downloads</li>
						<li>Desktop Application</li>
						<li>Referral</li>
						<li>Affiliate</li>
					</ul>
				</div>
				<div className='col support'>
					<h5 className='portfolio-text8'>
						<b>Support</b>
					</h5>
					<ul className='list-unstyled text-muted'>
						<li>Give us Feedback</li>
						<li>Support Center</li>
						<li>Submit a request</li>
						<li>API Documentation</li>
					</ul>
				</div>
				<hr className='horizontal-line' />
				<p className='text-center text-muted'>PortfolioX &copy; 2022</p>
			</div>
		</div>
	);
}

export default Home;
