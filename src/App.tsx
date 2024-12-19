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
import ExpenseCalendarDetail from './components/pages/project-detail/ExpenseCalendarDetail';

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
				id: 'projects',
				// shouldRevalidate: () => true,
				children: [
					{
						path: 'expense-calendar',
						element: <ExpenseCalendarDetail />,
						loader: createLoader(),
						id: 'expense-calendar'
					},
					{
						path: 'demo/expense-calendar',
						element: <ExpenseCalendar />,
						loader: createLoader(),
						id: 'demo-expense-calendar'
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
