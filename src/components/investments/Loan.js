import React from 'react';

export const Loan = ({
	sixtyPercentCalc,
	handlePercentageLoanInputSubmit,
	handleInputChange,
	input,
}) => {
	return (
		<div className='loan d-flex flex-row justify-content-between'>
			<div className='loan-buttons mt-2 mb-2'>
				<p className='loan-description text-white h-50 px-2 pt-2'>
					Click on any of the buttons below to get your loan value
				</p>
				<button
					className='btn btn-primary'
					type='button'
					onClick={sixtyPercentCalc}>
					60%
				</button>
			</div>

			<p>OR</p>
			<div>
				<p className='specify-percentage text-white h-50 px-2 pt-2 mt-0'>
					Specify the percentage of your total equity value you want
					to loan:{' '}
				</p>
				<form
					onSubmit={handlePercentageLoanInputSubmit}
					className='form-percentage d-flex flex-row'>
					<input
						type='text'
						className='form-control w-50 mt-2'
						placeholder='e.g 15'
						value={input}
						onChange={handleInputChange}
					/>
					<button type='submit' className='btn btn-primary mt-2 ms-2'>
						Submit
					</button>
				</form>
			</div>
		</div>
	);
};
