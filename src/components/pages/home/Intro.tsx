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

					<p>I'm Zeth — a frontend software engineer with a bit of an unconventional background. I studied astrophysics in college because I genuinely love space, and that hasn't changed. What I discovered along the way is that I'm also really good at building software, and that the two pair together surprisingly well — there's something satisfying about using code to make the universe a little more tangible and explorable.</p>

				</article>

				<Link to="/about" className="btn arrow-btn heading-2">
					More about me <SVG name="arrow-right" />
				</Link>

			</div>
		</section>
	);
};

export default Intro;