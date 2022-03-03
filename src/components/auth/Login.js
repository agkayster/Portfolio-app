import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { useLocalStorage } from '../../useLocalStorage';
import 'react-toastify/dist/ReactToastify.css';
import axios from 'axios';

const log = console.log.bind(document);
toast.configure();

const Login = () => {
	const [formData, setFormData] = useLocalStorage('formData', {});
	const [error, setError] = useState('');

	// const navigate = useNavigate();

	const handleChange = (e) => {
		const { name, value } = e.target;

		const newFormdata = { ...formData, [name]: value };

		setFormData(newFormdata);
		setError('');
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		axios
			.post('http://localhost:4000/login', formData)
			.then((res) => {
				log('get res message =>', res.data.user.username);
				toast(`Welcome ${res.data.user.username}`);
				window.location = '/portfolio';
			})
			.catch(() => {
				setError('Invalid email or password'); // display an error
			});
	};

	return (
		<div className='container-fluid px-3 pt-3 mb-0'>
			<h2>Login</h2>
			<form className='mt-4' onSubmit={handleSubmit}>
				<div className='mb-3'>
					<label htmlFor='username' className='form-label'>
						Username
					</label>
					<input
						type='text'
						className='form-control w-50'
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
						className='form-control w-50'
						id='email'
						name='email'
						aria-describedby='emailHelp'
						placeholder='e.g portfolioX@gmail.com'
						value={formData.email || ''}
						onChange={handleChange}
					/>
				</div>
				<div className='mb-3'>
					<label htmlFor='password' className='form-label'>
						Password
					</label>
					<input
						type='password'
						className='form-control w-50'
						id='password'
						name='password'
						aria-describedby='passwordHelp'
						placeholder='e.g xxxx'
						value={formData.password || ''}
						onChange={handleChange}
					/>
					{error && <p className='small text-danger'>{error}</p>}
				</div>

				<button type='submit' className='btn btn-primary'>
					Submit
				</button>
			</form>
		</div>
	);
};

export default Login;
