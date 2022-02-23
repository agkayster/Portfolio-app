import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Investments from './components/investmentIndex';
import InvestmentsNew from './components/investmentsNew';

function App() {
	return (
		<Router>
			<div className='container'>
				<Routes>
					<Route
						path='/portfolio/InvestmentsNew'
						element={<InvestmentsNew />}
					/>
					<Route path='/portfolio' element={<Investments />} />
				</Routes>
			</div>
		</Router>
	);
}

export default App;
