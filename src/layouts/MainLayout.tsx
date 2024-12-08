import { Outlet } from 'react-router-dom';
import Nav from '../components/Nav';

const MainLayout = () => {
	return (
		<section className="main">
			<Nav />
			<main>
				<Outlet />
			</main>
		</section>
	);
};

export default MainLayout;