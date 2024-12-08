/// <reference types="vite-plugin-svgr/client" />

import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MainLayout from './layouts/MainLayout';
import Home from './pages/Home';
import About from './pages/About';

const App = () => {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<MainLayout />}>
					<Route index element={<Home />} />
					<Route path="about" element={<About />} />
				</Route>
			</Routes>
		</BrowserRouter>
	);
}

export default App;