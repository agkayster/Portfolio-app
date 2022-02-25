import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { axiosInstance } from '../../Utils/API';

import _ from 'lodash';

const log = console.log.bind(document);

const Investments = () => {
	const paymentPeriodOptions = [6, 12, 18, 24];
	const [investmentsData, setInvestmentsData] = useState([]);
	const [allInvestments, setAllInvestments] = useState(null);
	const [sumEquityValue, setSumEquityValue] = useState(0);
	const [loanValue, setLoanValue] = useState(0);
	const [balance, setBalance] = useState(0);
	const [paymentPeriod, setPaymentPeriod] = useState(paymentPeriodOptions);
	const [paymentPerMonth, setPaymentPerMonth] = useState(0);
	const [input, setInput] = useState('');

	useEffect(() => {
		const getInvestments = async () => {
			try {
				// url from the json-server db //
				let res = await axiosInstance.get('/investments');
				setInvestmentsData(res.data);
			} catch (err) {
				console.log(err);
			}
		};
		getInvestments();
	}, []);

	log('get investments data =>', investmentsData);

	const getInvestmentsOptions = investmentsData.map(({ symbol }) => {
		return symbol;
	});

	getInvestmentsOptions.unshift('All');

	const handleChange = (e) => {
		const { value } = e.target;

		const data = _.find(investmentsData, ({ symbol }) => symbol === value);

		_.forEach(getInvestmentsOptions, (item) => {
			if (value === item) {
				setAllInvestments([data]);
			} else if (value === 'All') {
				setAllInvestments(investmentsData);
				const totalEquityValue = _.reduce(
					investmentsData,
					(acc, cur) => acc + cur.equityValue,
					0
				);
				setSumEquityValue(totalEquityValue);
			}
		});
	};

	const handlePaymentPlanChange = (e) => {
		const { value } = e.target;

		const newValue = +value;

		const getSixMonthsPaymentPerMonth = (loanValue / 6).toFixed(2);
		const getTwelveMonthsPaymentPerMonth = (loanValue / 12).toFixed(2);
		const getEighteenMonthsPaymentPerMonth = (loanValue / 18).toFixed(2);
		const getTwentyFoureMonthsPaymentPerMonth = (loanValue / 24).toFixed(2);

		switch (newValue) {
			case 6:
				setPaymentPerMonth(getSixMonthsPaymentPerMonth);
				break;
			case 12:
				setPaymentPerMonth(getTwelveMonthsPaymentPerMonth);
				break;
			case 18:
				setPaymentPerMonth(getEighteenMonthsPaymentPerMonth);
				break;
			case 24:
				setPaymentPerMonth(getTwentyFoureMonthsPaymentPerMonth);
				break;
			default:
				break;
		}
	};

	const handleInputChange = (e) => {
		const { value } = e.target;
		log('get input =>', typeof value);
		setInput(value);
	};

	const handlePercentageLoanInputSubmit = (e) => {
		e.preventDefault();
		const newValue = +input;

		const percentageCalc = ((sumEquityValue * newValue) / 100).toFixed(2);
		const getBalanceAfterLoan = (sumEquityValue - percentageCalc).toFixed(
			2
		);
		setLoanValue(percentageCalc);
		setBalance(getBalanceAfterLoan);
	};

	const sixtyPercentCalc = () => {
		const getSixtyPercentCalc = ((sumEquityValue * 60) / 100).toFixed(2);
		const getBalanceAfterLoan = (
			sumEquityValue - getSixtyPercentCalc
		).toFixed(2);

		setLoanValue(getSixtyPercentCalc);
		setBalance(getBalanceAfterLoan);
	};

	// log('get all investments =>', allInvestments);

	if (investmentsData.length === 0) return <h4>Loading...</h4>;
	return (
		<div className='portfolio-index px-3 pt-3 mb-0'>
			<h4 className='portfolios bg-secondary text-white ps-2 pb-2 pt-2'>
				Portfolios
			</h4>
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
			<table className='table table-hover table-striped mt-4'>
				<thead className='table-head table-primary'>
					<tr>
						<th scope='col'>S/No</th>
						<th scope='col'>Symbol</th>
						<th scope='col'>Qty</th>
						<th scope='col'>Equity Value(₦)</th>
						<th scope='col'>Price Per Share(₦)</th>
					</tr>
				</thead>
				<tbody>
					{_?.map(
						allInvestments,
						({
							symbol,
							totalQuantity,
							equityValue,
							pricePerShare,
							id,
						}) => (
							<tr key={id}>
								<th scope='row'>{id}</th>
								<td>{symbol}</td>
								<td>{totalQuantity}</td>
								<td>{equityValue}</td>
								<td>{pricePerShare}</td>
							</tr>
						)
					)}
				</tbody>
			</table>
			<div className='equity bg-success text-white w-25 ps-3 pt-3 pb-1 rounded'>
				<h4 className='equity-value mb-0'>₦{sumEquityValue}</h4>
				<p className='totalEquityValue mt-0'>Total Equity Value</p>
			</div>

			<Link to='/portfolio/InvestmentsNew'>
				<button className='btn btn-primary mt-3'>Add Portfolio</button>
			</Link>

			<hr />
			<div className='loan d-flex flex-row justify-content-between'>
				<div className='loan-buttons mt-2 mb-2'>
					<p className='loan-description bg-secondary text-white h-50 px-2 pt-2 pb-2'>
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
					<p className='bg-secondary text-white h-50 px-2 pt-3'>
						Specify the percentage of your total equity value you
						want to loan:{' '}
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
						<button
							type='submit'
							className='btn btn-primary mt-2 ms-2'>
							Submit
						</button>
					</form>
				</div>
			</div>

			<div className='loan-value d-flex flex-row justify-content-between mt-4 '>
				<div className='equity-loan bg-warning w-25 ps-3 pt-4 rounded'>
					<h4 className='mb-0 loan-value'>₦{loanValue}</h4>
					<p className='loan-text'>Active Loan value</p>
				</div>
				<div className='equity-balance bg-success text-white w-25 ps-3 pt-3 rounded'>
					<h4 className='mb-0 loan-balance'>₦{balance}</h4>
					<p className='balance-text'>
						Total Equity Value Balance after Loan
					</p>
				</div>
			</div>
			<hr />
			<div>
				<h5 className='bg-secondary text-white h-25 px-2 pt-1'>
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
				<div className='loan-payment mt-3 bg-danger text-white w-25 ps-3 pt-2 rounded'>
					<h4 className='paymentMonthlyFigure mb-0'>
						₦{paymentPerMonth}
					</h4>
					<p className='payment-month mt-0'>Payment Per Month</p>
				</div>
			</div>
			<hr />
		</div>
	);
};

export default Investments;
