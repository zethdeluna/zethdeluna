import headshot from '../../../assets/images/me.jpg';

const Intro = () => {
	return (
		<section className="about-intro">
			<div className="container grid">

				<article>

					<div className="about-me">
						<h2 className="heading-4">About Me</h2>
						<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
					</div>

					<div className="skills">
						<h2 className="heading-4">Skills</h2>

						<div className="skills-container">
							<div className="skills-list">
								<span className="eyebrow">Development</span>
								<ul>
									<li>JavaScript (Vanilla, jQuery)</li>
									<li>React (JS, TypeScript)</li>
									<li>HTML</li>
									<li>CSS</li>
									<li>PHP</li>
									<li>Git</li>
									<li>WordPress</li>
								</ul>
							</div>
							<div className="skills-list">
								<span className="eyebrow">Design</span>
								<ul>
									<li>Figma</li>
									<li>Sketch</li>
								</ul>
							</div>
						</div>
					</div>

				</article>

				<div className="image-container">
					<img src={headshot} alt="zeth's headshot" />
				</div>

			</div>
		</section>
	);
};

export default Intro;