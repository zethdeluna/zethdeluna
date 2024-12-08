import HomeHero from "../components/pages/home/Hero";
import Intro from "../components/pages/home/Intro";
import Work from "../components/pages/home/Work";

const Home = () => {
	return (
		<section className="home-page">

			<HomeHero />
			<Intro />
			<Work />

		</section>
	);
};

export default Home;