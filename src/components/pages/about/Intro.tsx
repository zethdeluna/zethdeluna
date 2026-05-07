import headshot from '../../../assets/images/me.jpg';

const Intro = () => {
	return (
		<section className="about-intro">
			<div className="container grid">

				<article>

					<div className="about-me">
						<h2 className="heading-4">About Me</h2>
						<p>I'm Zeth — a frontend software engineer with a bit of an unconventional background. I studied astrophysics in college because I genuinely love space, and that hasn't changed. What I discovered along the way is that I'm also really good at building software, and that the two pair together surprisingly well — there's something satisfying about using code to make the universe a little more tangible and explorable.</p>
						<p>I spent the last 5 years at Studio Simpatico, a small agency where I got to work on a pretty wide range of products — shipping component systems, wiring up APIs, and generally obsessing over creating experiences that were interactive and memorable. I learned a ton there and genuinely loved the work. On the side I built TLEscope, a full-stack satellite tracker with a live 3D orbit visualization and a searchable catalog of ~10,000 satellites, mostly because I wanted to see if I could.</p>
						<p>I work primarily in React, TypeScript, and Zustand. I care a lot about the space between a beautiful design and a great implementation — getting that right is the part of the job I find most satisfying.</p>
						<p>Outside of work, I enjoy eating good food, drinking good coffee, strengthening my body, and hanging out with my peeps. When the weather's nice, taking a drive down PCH to my little spot on the beach is my favorite way to clear the mind and live in the moment. When the money's nice, travelling to new places and exploring the food and nature is a must!</p>
					</div>

					<div className="skills">
						<h2 className="heading-4">Skills</h2>

						<div className="skills-container">
							<div className="skills-list">
								<span className="eyebrow">Development</span>
								<ul>
									<li>JavaScript (Vanilla, jQuery)</li>
									<li>React</li>
									<li>TypeScript</li>
									<li>Zustand</li>
									<li>Redux</li>
									<li>Python</li>
									<li>PostgreSQL</li>
									<li>HTML</li>
									<li>CSS</li>
									<li>PHP</li>
									<li>Git</li>
								</ul>
							</div>
							<div className="skills-list">
								<span className="eyebrow">Design</span>
								<ul>
									<li>Figma</li>
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