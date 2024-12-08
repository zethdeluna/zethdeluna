import { Link } from 'react-router-dom';
import { useState } from 'react';
import PlumeriaSmileyDodger from '../assets/svgs/plumeria-smiley-dodger.svg?react';
import PlumeriaSmileyHeat from '../assets/svgs/plumeria-smiley-heat.svg?react';
import PlumeriaSmileyLaker from '../assets/svgs/plumeria-smiley-laker.svg?react';
import PlumeriaSmileyMPLS from '../assets/svgs/plumeria-smiley-mpls.svg?react';

const Nav = () => {
	const [navActive, setNavActive] = useState<boolean>(false);

	const handleMenu = () => {
		setNavActive(!navActive);
	};

	return (
		<header>
			<div className="container flex-container">

				<button className="menu-btn animated" role="button" onClick={handleMenu}>
					<span className="accessibility">Open menu</span>
					<span className="line line-1"></span>
					<span className="line line-2"></span>
				</button>

				<nav role="navigation" className={navActive ? 'active' : ''}>
					<ul className="container grid menu">
						<li>
							<Link to="/about" className="heading-1">
								<PlumeriaSmileyMPLS />
								<span>About</span>
								<PlumeriaSmileyHeat />
							</Link>
						</li>
						<li>
							<Link to="/work" className="heading-1">
								<PlumeriaSmileyLaker />
								<span>Work</span>
								<PlumeriaSmileyDodger />
							</Link>
						</li>
						<li>
							<Link to="/contact" className="heading-1">
								<PlumeriaSmileyHeat />
								<span>Contact</span>
								<PlumeriaSmileyDodger />
							</Link>
						</li>
						<li>
							<Link to="/" className="heading-1">
								<PlumeriaSmileyHeat />
								<span>Home</span>
								<PlumeriaSmileyLaker />
							</Link>
						</li>
					</ul>
				</nav>
			</div>
		</header>
	);
};

export default Nav;