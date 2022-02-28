import React from 'react';
import _ from 'lodash';

export const InvestmentSelectOptions = ({
	handleChange,
	getInvestmentsOptions,
}) => {
	return (
		<select
			className='form-select w-50'
			aria-label='portfolio-select'
			onChange={handleChange}>
			{_.map(getInvestmentsOptions, (item) => (
				<option key={item} value={item}>
					{item}
				</option>
			))}
		</select>
	);
};
