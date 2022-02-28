import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import porfolioXImage from '../../assets/portfolioX-img.jpeg';
import { homeImages } from '../../Utils/HelperMethods';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { HomeImagesList } from '../pages/HomeImagesList';

function Home() {
	const [images] = useState(homeImages);

	return (
		<div className='home container-fluid'>
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
			<div className='row second-portfolio-section'>
				<div className='col'>
					<h2 className='portfolio-text2'>
						Trade, Monitor, Add and Loan.
					</h2>
					<p className='portfolio-paragraph2'>
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
					<HomeImagesList images={images} />
				</div>
			</div>
			<div className='row fourth-portfolio-section'>
				<div className='col'>
					<h2 className='portfolio-text4'>
						Start managing your portfolio now
					</h2>
					<div className='reg-man d-lg-inline-flex flex-row'>
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
				<div className='col-lg-3 about'>
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
				<div className='col-lg-3 products'>
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
				<div className='col-lg-3 service'>
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
				<div className='col-lg-3 support'>
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
				<p className='text-lg-center text-muted copyright-text'>
					PortfolioX &copy; 2022
				</p>
			</div>
		</div>
	);
}

export default Home;
