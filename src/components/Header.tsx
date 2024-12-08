import { Link } from 'react-router-dom';
import { useState } from 'react';
import SVG from './SVG';

const Header = () => {
	const [navActive, setNavActive] = useState<boolean>(false);

	const handleMenu = () => {
		setNavActive(!navActive);
	};

	const handleClick = ( event: React.MouseEvent<HTMLAnchorElement> ) => {
		setNavActive(false);
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
							<Link to="/about" className="heading-1" onClick={handleClick}>
								<SVG name="plumeria-smiley-mpls" />
								<span>About</span>
								<SVG name="plumeria-smiley-heat" />
							</Link>
						</li>
						<li>
							<Link to="/work" className="heading-1" onClick={handleClick}>
								<SVG name="plumeria-smiley-laker" />
								<span>Work</span>
								<SVG name="plumeria-smiley-dodger" />
							</Link>
						</li>
						<li>
							<Link to="/contact" className="heading-1" onClick={handleClick}>
								<SVG name="plumeria-smiley-heat" />
								<span>Contact</span>
								<SVG name="plumeria-smiley-dodger" />
							</Link>
						</li>
						<li>
							<Link to="/" className="heading-1" onClick={handleClick}>
								<SVG name="plumeria-smiley-heat" />
								<span>Home</span>
								<SVG name="plumeria-smiley-laker" />
							</Link>
						</li>
					</ul>
				</nav>
			</div>
		</header>
	);
};

export default Header;