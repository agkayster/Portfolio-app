import React from 'react';
import _ from 'lodash';

export const HomeImagesList = ({ images }) => {
	return (
		<ul className='list-inline d-lg-inline-flex flex-row justify-content-between mt-3 p-3 connect-logos'>
			{_.map(images, ({ image, header, text, id }) => {
				if (id === 2 || id === 3 || id === 4) {
					return (
						<li key={id} className='me-2 '>
							<img
								src={image}
								alt='all'
								height={100}
								width={100}
							/>
							<h6 className='ms-3 fw-bolder'>{header}</h6>
							<p className='mt-3 ms-3 connected-text'>{text}</p>
						</li>
					);
				} else {
					return (
						<li key={id} className='me-2 p-2'>
							<img
								src={image}
								alt='all'
								height={50}
								className='mt-4'
							/>
							<h6 className='mt-4 fw-bolder'>{header}</h6>
							<p className='mt-3 connected-text'>{text}</p>
						</li>
					);
				}
			})}
		</ul>
	);
};
