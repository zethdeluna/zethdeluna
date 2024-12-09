/// <reference types="vite-plugin-svgr/client" />
import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import MainLayout from './layouts/MainLayout';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import PageTransition from './components/PageTransition';

const RootLayout = () => {
	return (
		<>
			<PageTransition />
			<MainLayout />
		</>
	);
};

const router = createBrowserRouter([
	{
		path: '/',
		element: <RootLayout />,
		children: [
			{
				index: true,
				element: <Home />,
				loader: async () => {
					// Simulate a brief delay
					await new Promise(resolve => setTimeout(resolve, 1250));
					return null;
				}
			},
			{
				path: 'about',
				element: <About />,
				loader: async () => {
					// Simulate a brief delay
					await new Promise(resolve => setTimeout(resolve, 1250));
					return null;
				}
			},
			{
				path: 'contact',
				element: <Contact />,
				loader: async () => {
					// Simulate a brief delay
					await new Promise(resolve => setTimeout(resolve, 1250));
					return null;
				}
			}
		]
	}
]);

const App = () => {
	return (
		<RouterProvider router={router} />
	);
}

export default App;
