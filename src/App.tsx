/// <reference types="vite-plugin-svgr/client" />
import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import MainLayout from './layouts/MainLayout';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Projects from './pages/Projects';
import ExpenseCalendar from './projects/expense-calendar/ExpenseCalendar';
import PageTransition from './components/PageTransition';

const RootLayout = () => {
	return (
		<>
			<PageTransition />
			<MainLayout />
		</>
	);
};

const createLoader = (delay: number = 1250) => {
	// simulate page load
	return async() => {
		await new Promise( resolve => setTimeout( resolve, delay ) );
		return null;
	}
};

const router = createBrowserRouter([
	{
		path: '/',
		element: <RootLayout />,
		children: [
			{
				index: true,
				element: <Home />,
				loader: createLoader()
			},
			{
				path: 'about',
				element: <About />,
				loader: createLoader()
			},
			{
				path: 'contact',
				element: <Contact />,
				loader: createLoader()
			},
			{
				path: 'projects',
				element: <Projects />,
				loader: createLoader(),
				children: [
					{
						path: 'expense-calendar',
						element: <ExpenseCalendar />,
						loader: createLoader()
					}
				]
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
