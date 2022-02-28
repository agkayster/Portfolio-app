import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Investments from './components/investments/investmentIndex';
import InvestmentsNew from './components/investments/investmentsNew';
import Register from './components/auth/Register';
import Home from './components/pages/Home';
import Navbar from './components/common/Navbar';
import Login from './components/auth/Login';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { faFontAwesome } from '@fortawesome/free-regular-svg-icons';

library.add(fas, faFontAwesome);
function App() {
	return (
		<div className='container-fluid'>
			<Router>
				<Navbar />
				<Routes>
					<Route
						path='/portfolio/InvestmentsNew'
						element={<InvestmentsNew />}
					/>
					<Route path='/portfolio' element={<Investments />} />
					<Route path='/register' element={<Register />} />
					<Route path='/login' element={<Login />} />
					<Route exact path='/' element={<Home />} />
				</Routes>
			</Router>
		</div>
	);
}

export default App;
