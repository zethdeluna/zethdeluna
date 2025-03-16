import headshot from '../../../assets/images/me.jpg';

const Intro = () => {
	return (
		<section className="about-intro">
			<div className="container grid">

				<article>

					<div className="about-me">
						<h2 className="heading-4">About Me</h2>
						<p>I'm Zeth, a frontend developer with years of experience crafting engaging sites through the magical languages of HTML, CSS, JavaScript, PHP, and a sprinkle of React JavaScript/TypeScript. I love taking beautiful, aesthetically pleasing designs and turning them into real usable experiences. I'm not really a designer, but I do sometimes like to design things for myself—including this website!</p>
						<p>I've been at my current role as Frontend Developer at Studio Simpatico for about 3.5 years. I <em>have</em> to take a moment to share how lucky I feel to have ended up with this group of such amazing people, both professionally and personally! I've learned so much from them and had fun while doing it—the vibes are truly immaculate.</p>
						<p>Outside of work, I enjoy eating good food, drinking good coffee, strengthening my body, and hanging out with my peeps. When the weather's nice, taking a drive down PCH to my little spot on the beach is my favorite way to clear the mind and live in the moment. When the money's nice, travelling to new places and exploring the food and nature is a must!</p>
					</div>

					<div className="skills">
						<h2 className="heading-4">Skills</h2>

						<div className="skills-container">
							<div className="skills-list">
								<span className="eyebrow">Development</span>
								<ul>
									<li>JavaScript (Vanilla, jQuery)</li>
									<li>React (JS, TypeScript)</li>
									<li>Redux</li>
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