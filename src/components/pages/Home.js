import React from 'react';
import porfolioXImage from '../../assets/portfolioX-img.jpeg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function Home() {
	return (
		<>
			<div className='row first-portfolio-section'>
				<div className='clearfix pt-2'>
					<h2 className='portfolio-header'>
						Manage your Portfolio in minutes
					</h2>
					<p className='portfolio-paragraph'>
						Join the world's largest portfolio platform
					</p>
					<p className='register-paragraph'>Register Now</p>
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
					<h2 className='portfolio-text2'>AnotherX</h2>
				</div>
			</div>
		</>
	);
}

export default Home;
