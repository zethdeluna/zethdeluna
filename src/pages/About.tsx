import Hero from '../components/pages/about/Hero';
import Intro from '../components/pages/about/Intro';
import FavoriteThings from '../components/pages/about/FavoriteThings';

const About = () => {
	return (
		<section className="about-page">

			<Hero />
			<Intro />
			<FavoriteThings />

		</section>
	);
};

export default About;