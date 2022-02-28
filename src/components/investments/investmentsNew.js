import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const InvestmentsNew = () => {
	const [formData, setFormData] = useState({});
	const [errors, setErrors] = useState({});

	const navigate = useNavigate();

	const handleSubmit = async (e) => {
		e.preventDefault();
		try {
			await axios
				.post('http://localhost:4000/investments', formData)
				.then(() => navigate('/portfolio'));
		} catch (err) {
			setErrors(err.response.data.errors);
		}
	};

	const handleChange = (e) => {
		const { name, value, type } = e.target;

		// Converting the form type from "string" to "number"//
		setFormData((formData) => {
			const nextFormData = { ...formData };
			switch (type) {
				case 'number':
					nextFormData[name] = Number(value);
					break;
				default:
					nextFormData[name] = value;
					break;
			}
			return nextFormData;
		});
	};

	return (
		<div className='px-3 pt-3 mb-0'>
			<form className='mt-4' onSubmit={handleSubmit}>
				<div className='mb-3'>
					<label htmlFor='inputSymbol' className='form-label'>
						Symbol
					</label>
					<input
						className='form-control'
						id='inputSymbol'
						aria-describedby='symbolHelp'
						type='text'
						name='symbol'
						placeholder='eg: AAPL'
						value={formData.symbol || ''}
						onChange={handleChange}
					/>
				</div>

				<div className='mb-3'>
					<label htmlFor='inputtotalQuantity' className='form-label'>
						Total Quantity
					</label>
					<input
						className='form-control'
						id='inputtotalQuantity'
						aria-describedby='totalQuantityHelp'
						type='number'
						name='totalQuantity'
						placeholder='20'
						value={formData.totalQuantity || ''}
						onChange={handleChange}
					/>
				</div>

				<div className='mb-3'>
					<label htmlFor='inputEquityValue' className='form-label'>
						Equity Value
					</label>
					<input
						className='form-control'
						id='inputEquityValue'
						aria-describedby='equityValueHelp'
						type='number'
						name='equityValue'
						placeholder='eg: 1500'
						value={formData.equityValue || ''}
						onChange={handleChange}
					/>
				</div>

				<div className='mb-3'>
					<label htmlFor='inputPricePerShare' className='form-label'>
						Price Per Share
					</label>
					<input
						className='form-control'
						id='inputPricePerShare'
						aria-describedby='pricePerShareHelp'
						type='number'
						name='pricePerShare'
						placeholder='eg: 125'
						value={formData.pricePerShare || ''}
						onChange={handleChange}
					/>
				</div>
				<div className='control'>
					<button type='submit' className='btn btn-primary'>
						Submit Form
					</button>
				</div>
			</form>
		</div>
	);
};

export default InvestmentsNew;
