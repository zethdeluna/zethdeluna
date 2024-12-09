import { Outlet } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';

const MainLayout = () => {
	return (
		<>
			<section className="main">
				<Header />
				<main>
					<Outlet />
				</main>
				<Footer />
			</section>
		</>
	);
};

export default MainLayout;