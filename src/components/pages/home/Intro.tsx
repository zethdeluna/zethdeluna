import { Link } from 'react-router-dom';
import { LunaScroll } from '../../LunaScroll';
import PlumeriaSmileyMPLS from '../../../assets/svgs/plumeria-smiley-mpls.svg?react';
import Exclamation from '../../../assets/svgs/exclamation.svg?react';
import ArrowRight from '../../../assets/svgs/arrow-right.svg?react';

const Intro = () => {
	return (
		<section className="intro">
			<div className="container grid">

				<article>

					<h2 className="mega">
						<LunaScroll animation="bounce-in">
							<PlumeriaSmileyMPLS />
						</LunaScroll>
						<span>Hello</span>
						<LunaScroll animation="bounce-in">
							<Exclamation />
						</LunaScroll>
					</h2>

					<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>

				</article>

				<Link to="/about" className="btn arrow-btn heading-2">
					More about me <ArrowRight />
				</Link>

			</div>
		</section>
	);
};

export default Intro;