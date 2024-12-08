import { LunaScroll } from "../../LunaScroll";
import SVG from "../../SVG";

const Hero = () => {
	return (
		<section className="about-hero">
			<div className="container">

				<h1>
					<span className="heading-3">
						<LunaScroll animation="bounce-in">
							<SVG name="plumeria-smiley-laker" />
						</LunaScroll>
						<span>Get to Know</span>
					</span>
					<span className="mega">
						<SVG name="seven-leaves" />
						<LunaScroll animation="bounce-in">
							<SVG name="plumeria-smiley-heat" />
						</LunaScroll>
						<span>Zeth</span>
					</span>
				</h1>

			</div>
		</section>
	);
};

export default Hero;