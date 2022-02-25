import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Investments from './components/investments/investmentIndex';
import InvestmentsNew from './components/investments/investmentsNew';
import Register from './components/auth/Register';
import Home from './components/pages/Home';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { faFontAwesome } from '@fortawesome/free-regular-svg-icons';
import Login from './components/auth/Login';

library.add(fas, faFontAwesome);
function App() {
	return (
		<Router>
			<div className='container-fluid'>
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
			</div>
		</Router>
	);
}

export default App;
