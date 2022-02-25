import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import axios from 'axios';

const log = console.log.bind(document);



const Register = () => {
	const [formData, setFormData] = useState({});
	const [errors, setErrors] = useState({});

	const navigate = useNavigate();

	const handleChange = (e) => {
		const { name, value } = e.target;

		const newFormData = { ...formData, [name]: value };
		const newErrors = { ...errors, [name]: '' };

		setFormData(newFormData);
		setErrors(newErrors);
	};

	const handleSubmit = async (e) => {
		e.preventDefault();
		try {
			await axios
				.post('http://localhost:4000/register', formData)

				.then((res) => {
					
					navigate('/login');
				});
		} catch (err) {
			setErrors(err.response.data.errors);
			log('get errors =>', err);
		}
	};

	return (
		<div className='px-3 pt-3 mb-0'>
			<h2>Register</h2>
			<p>Please sign up to be part of our community at PortfolioX</p>
			<form className='mt-4' onSubmit={handleSubmit}>
				<div className='mb-3'>
					<label htmlFor='username' className='form-label'>
						Username
					</label>
					<input
						type='text'
						className='form-control'
						id='username'
						name='username'
						aria-describedby='usernameHelp'
						placeholder='e.g Ejike'
						value={formData.username || ''}
						onChange={handleChange}
					/>
				</div>
				<div className='mb-3'>
					<label htmlFor='email' className='form-label'>
						Email address
					</label>
					<input
						type='email'
						className='form-control'
						id='email'
						name='email'
						aria-describedby='emailHelp'
						placeholder='e.g portfolioX@gmail.com'
						value={formData.email || ''}
						onChange={handleChange}
					/>
					<div id='emailHelp' className='form-text'>
						We'll never share your email with anyone else.
					</div>
				</div>
				<div className='mb-3'>
					<label htmlFor='password' className='form-label'>
						Password
					</label>
					<input
						type='password'
						className='form-control'
						id='password'
						name='password'
						aria-describedby='passwordHelp'
						placeholder='e.g xxxx'
						value={formData.password || ''}
						onChange={handleChange}
					/>
					<div id='passwordHelp' className='form-text'>
						We'll never share your password with anyone else.
					</div>
				</div>
				<div className='mb-3'>
					<label
						htmlFor='passwordConfirmation'
						className='form-label'>
						Password Confirmation
					</label>
					<input
						type='password'
						className='form-control'
						id='passwordConfirmation'
						name='passwordConfirmation'
						aria-describedby='passwordConfirmationHelp'
						placeholder='e.g xxxx'
						value={formData.passwordConfirmation || ''}
						onChange={handleChange}
					/>
				</div>
				<button type='submit' className='btn btn-primary'>
					Submit
				</button>
			</form>
		</div>
	);
};

export default Register;
