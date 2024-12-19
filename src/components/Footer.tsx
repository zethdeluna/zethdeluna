import { Link } from "react-router-dom";
import { LunaScroll } from "./LunaScroll";
import SVG from "./SVG";

const Footer = () => {
	return (
		<footer>
			<div className="container grid outro">

				<h2 className="mega">
					Thanks
					<span className="plumeria-container">
						<span>for</span>
						<LunaScroll animation="bounce-in">
							<SVG name="plumeria-smiley-heat" />
						</LunaScroll>
					</span>
					<span className="plumeria-container">
						<span>stopping</span>
						<LunaScroll animation="bounce-in">
							<SVG name="plumeria-smiley-laker" />
						</LunaScroll>
					</span>
					by !
				</h2>
				<span className="mega">Zeth</span>

			</div>

			<ul className="container grid menu">
				<li>
					<Link to="/about" className="heading-1">
						<SVG name="plumeria-smiley-mpls" />
						<span>About</span>
						<SVG name="plumeria-smiley-heat" />
					</Link>
				</li>
				<li>
					<Link to="/projects" className="heading-1">
						<SVG name="plumeria-smiley-laker" />
						<span>Work</span>
						<SVG name="plumeria-smiley-dodger" />
					</Link>
				</li>
				<li>
					<Link to="/contact" className="heading-1">
						<SVG name="plumeria-smiley-heat" />
						<span>Contact</span>
						<SVG name="plumeria-smiley-dodger" />
					</Link>
				</li>
				<li>
					<Link to="/" className="heading-1">
						<SVG name="plumeria-smiley-heat" />
						<span>Home</span>
						<SVG name="plumeria-smiley-laker" />
					</Link>
				</li>
			</ul>

			<div className="container sub-footer">
				<p className="copyright">&copy; {new Date().getFullYear()}</p>
			</div>
		</footer>
	);
};

export default Footer;