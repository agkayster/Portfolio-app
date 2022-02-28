import React from 'react';
import _ from 'lodash';

export const PaymentPlan = ({
	handlePaymentPlanChange,
	paymentPeriod,
	paymentPerMonth,
}) => {
	return (
		<div>
			<h5 className='payment-plan text-white h-25 px-2 pt-1'>
				Pick a payment plan in Months
			</h5>
			<select
				className='form-select w-25 mt-3'
				aria-label='paymentPlan-select'
				onChange={handlePaymentPlanChange}>
				{_.map(paymentPeriod, (item) => (
					<option key={item} value={item}>
						{item}
					</option>
				))}
			</select>
			<div className='loan-payment mt-3 text-white w-25 ps-3 pt-2 rounded'>
				<h4 className='paymentMonthlyFigure mb-0'>
					₦{paymentPerMonth}
				</h4>
				<p className='payment-month mt-0'>Payment Per Month</p>
			</div>
		</div>
	);
};
