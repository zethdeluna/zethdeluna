import { Link } from 'react-router-dom';
import { LunaScroll } from '../../LunaScroll';
import PlumeriaSmileyLaker from '../../../assets/svgs/plumeria-smiley-laker.svg?react';
import PlumeriaSmileyDodger from '../../../assets/svgs/plumeria-smiley-dodger.svg?react';

const Work = () => {
	return (
		<section className="work-module">
			<div className="container">

				<h2 className="mega">
					<LunaScroll animation="bounce-in">
						<PlumeriaSmileyLaker />
					</LunaScroll>
					<span>Work</span>
					<LunaScroll animation="bounce-in">
						<PlumeriaSmileyDodger />
					</LunaScroll>
				</h2>

			</div>
		</section>
	);
};

export default Work;