import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { axiosInstance } from '../../Utils/API';
import { Table } from './Table';
import { Loan } from './Loan';
import { PaymentPlan } from './PaymentPlan';
import { InvestmentSelectOptions } from './InvestmentSelectOptions';

import _ from 'lodash';

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
			<h4 className='portfolios text-white ps-2 pb-2 pt-2'>Portfolios</h4>
			<InvestmentSelectOptions
				handleChange={handleChange}
				getInvestmentsOptions={getInvestmentsOptions}
			/>
			<Table allInvestments={allInvestments} />
			<div className='equity text-white w-25 ps-3 pt-3 pb-1 rounded'>
				<h4 className='equity-value mb-0'>₦{sumEquityValue}</h4>
				<p className='totalEquityValue mt-0'>Total Equity Value</p>
			</div>

			<Link to='/portfolio/InvestmentsNew'>
				<button className='btn btn-primary mt-3'>Add Portfolio</button>
			</Link>

			<hr />
			<Loan
				sixtyPercentCalc={sixtyPercentCalc}
				handlePercentageLoanInputSubmit={
					handlePercentageLoanInputSubmit
				}
				handleInputChange={handleInputChange}
				input={input}
			/>

			<div className='loan-value d-flex flex-row justify-content-between mt-4 '>
				<div className='equity-loan w-25 ps-3 pt-4 rounded'>
					<h4 className='mb-0 loan-value text-white'>₦{loanValue}</h4>
					<p className='loan-text text-white'>Active Loan value</p>
				</div>
				<div className='equity-balance text-white w-25 ps-3 pt-3 rounded'>
					<h4 className='mb-0 loan-balance'>₦{balance}</h4>
					<p className='balance-text'>
						Total Equity Value Balance after Loan
					</p>
				</div>
			</div>
			<hr />
			<PaymentPlan
				handlePaymentPlanChange={handlePaymentPlanChange}
				paymentPeriod={paymentPeriod}
				paymentPerMonth={paymentPerMonth}
			/>
			<hr />
		</div>
	);
};

export default Investments;
