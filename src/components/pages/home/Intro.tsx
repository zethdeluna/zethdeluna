import { Link } from 'react-router-dom';
import { LunaScroll } from '../../LunaScroll';
import SVG from '../../SVG';

const Intro = () => {
	return (
		<section className="intro">
			<div className="container grid">

				<article>

					<h2 className="mega">
						<LunaScroll animation="bounce-in">
							<SVG name="plumeria-smiley-mpls" />
						</LunaScroll>
						<span>Hello</span>
						<LunaScroll animation="bounce-in">
							<SVG name="exclamation" />
						</LunaScroll>
					</h2>

					<p>I'm Zeth, a frontend developer with years of experience crafting engaging sites through the magical languages of HTML, CSS, JavaScript, PHP, and a sprinkle of React JavaScript/TypeScript. I love taking beautiful, aesthetically pleasing designs and turning them into real usable experiences. Outside of work, I enjoy eating good food, drinking good coffee, and strengthening my body—throw in some Lakers basketball and a drive down PCH, then I got myself a great day!</p>

				</article>

				<Link to="/about" className="btn arrow-btn heading-2">
					More about me <SVG name="arrow-right" />
				</Link>

			</div>
		</section>
	);
};

export default Intro;