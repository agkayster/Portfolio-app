import React, { useState, useEffect, useRef } from 'react';
import { Link, withRouter } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { axiosInstance } from '../../Utils/API';

const log = console.log.bind(document);

const Navbar = () => {
	const [auth, setAuth] = useState(null);
	const [userName, setUserName] = useState(() => {
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
				log('get res data =>', res.data);
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

	log('get user name =>', userName);

	return (
		<nav className='navbar navbar-expand-lg navbar-light bg-light'>
			<div className='container'>
				<Link to='/' className='navbar-brand'>
					PorfolioX
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
					<ul className='navbar-nav me-auto mb-2 mb-lg-0'>
						<li className='nav-item'>
							<Link
								to='/about'
								className='nav-link'
								aria-current='page'>
								About
							</Link>
						</li>
						{/* <li className='nav-item'>
							<Link
								to='/portfolio'
								className='nav-link'
								aria-current='page'>
								Portfolio
							</Link>
						</li> */}
					</ul>
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
								className='nav-link nav-login'
								aria-current='page'>
								Sign-in
							</Link>
						)}
						{userName.username && (
							<a onClick={logout} href='/' className='nav-link'>
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
