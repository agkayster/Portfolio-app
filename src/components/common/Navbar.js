import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { axiosInstance } from '../../Utils/API';

const Navbar = () => {
	const [auth, setAuth] = useState(null);
	const [userName] = useState(() => {
		const saved = localStorage.getItem('formData');
		const initialValue = JSON.parse(saved);
		return initialValue || {};
	});

	const navigate = useNavigate();

	useEffect(() => {
		const getAuth = async () => {
			try {
				// url from the json-server db //
				let res = await axiosInstance.get('/users');
				setAuth(res.data);
			} catch (err) {
				console.log(err);
			}
		};
		getAuth();
	}, []);

	const logout = () => {
		navigate('/');
		delete userName.username;
		localStorage.removeItem('formData');
	};

	return (
		<nav className='navbar sticky-top navbar-expand-lg navbar-light'>
			<div className='container'>
				<Link to='/' className='navbar-brand text-white'>
					PortfolioX
				</Link>
				<button
					className='navbar-toggler'
					type='button'
					data-bs-toggle='collapse'
					data-bs-target='#navbarSupportedContent'
					aria-controls='navbarSupportedContent'
					aria-expanded='false'
					aria-label='Toggle navigation'>
					<span className='navbar-toggler-icon'></span>
				</button>
				<div
					className='collapse navbar-collapse'
					id='navbarSupportedContent'>
					<ul className='navbar-nav me-auto mb-2 mb-lg-0'></ul>
					<div className='d-flex'>
						{!userName.username && (
							<Link
								to='/register'
								className='nav-link me-2 nav-register'
								aria-current='page'>
								Sign-up
							</Link>
						)}
						{!userName.username && (
							<Link
								to='/login'
								className='nav-link nav-login text-white'
								aria-current='page'>
								Sign-in
							</Link>
						)}
						{userName.username && (
							<a
								onClick={logout}
								href='/'
								className='nav-link text-white'>
								Logout
							</a>
						)}
					</div>
				</div>
			</div>
		</nav>
	);
};

export default Navbar;
