import SVG from "../../SVG";

const Hero = () => {
	return (
		<section className="projects-hero">
			<div className="container">

				<h1>
					<span className="work-text mega">
						<SVG name="brush-stroke" />
						<span>Work</span>
					</span>
					<span className="play-text mega">Play</span>
				</h1>

			</div>
		</section>
	);
}

export default Hero;