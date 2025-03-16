import { Link } from "react-router-dom";
import SVG from "../../SVG";
import Hero from "./components/Hero";
import FullWidthMedia from "./components/FullWidthMedia";
import TextContent from "./components/TextContent";
import mockupDesktop from '../../../assets/images/math-comparator-game/desktop.png';
import demoVideo from '../../../assets/videos/math-comparator-demo.mp4?url';
import twoCubes from '../../../assets/images/math-comparator-game/two-cubes.png';

const MathComparatorGameDetail = () => {
	return (
		<>
			<Link to="/projects" className="btn back">
				<span className="accessibility">Back to all projects</span>
				<SVG name="arrow-right" />
			</Link>

			<Hero 
				title="Math Comparator Game"
				date="March 2025"
				link1={{
					url: "https://github.com/zethdeluna/math-comparator-game-v2",
					title: "Repo"
				}}
				link2={{
					url: "https://zethdeluna.github.io/math-comparator-game-v2/",
					title: "Demo"
				}}
			/>

			<FullWidthMedia 
				src={mockupDesktop}
				alt="Math comparator game desktop mockup"
			/>

			<TextContent title="The Overview">
				<p><em>Math</em> *jazzhands</p>

				<p>This project came to me during a job search as one of the hiring team's qualification tests. Bit of a crazy situation: the role was filled on the morning of my interview, but I am so appreciative that the hiring manager liked my submission so much that he still wanted to meet me! (Shout out to the hiring manager for being so nice and open.)</p>

				<p>The project your seeing here is actually my 2nd iteration of the app. The 1st one was honestly such a mess because I was just trying to get something together to submit to application 😅. A couple weeks later, I felt inclined to try to build the game with more intent—I took my time with it and made sure that it was the best I could make it.</p>

				<span className="eyebrow">Objective</span>
				<p>The goal of this project was to teach users (primarily children) the concept of math comparators (i.e. less than, greater than, or equal to) through an interactive and visually engaging game. I'll get more into the technical details later.</p>

				<span className="eyebrow">Technologies</span>
				<p>This project was designed in <strong>Figma</strong>, built with <strong>Vite</strong>, written in <strong>React TypeScript</strong>, and styled with <strong>CSS</strong>. A noteable library used is <strong>React Redux</strong> to handle global states. A solid foundation in <strong>HTML</strong> and <strong>Vanilla JS</strong> also came in handy during this project.</p>
			</TextContent>

			<TextContent title="The Breakdown">
				<p>Again, the goal was to build an interactive, visually engaging game that can demonstrate and teach the concepts of math comparators. Here are the main features I needed to build:</p>
				<ol>
					<li>
						Create in "interactive window" that satisfies the following:
						<ul>
							<li>The area contains 2 stacks of blocks (like actual blocks—picture kids building blocks toys).</li>
							<li>The user can click each stack to add blocks (max 10), or click and drag to remove blocks (min 1).</li>
							<li>The user can draw lines above and below the stacks to connect the 2 stacks.</li>
							<li>The number count of a stack is displayed below each respective stack.</li>
						</ul>
					</li>
					<li>
						Create a "control panel" that satisfies the following:
						<ul>
							<li>The user can change each stack's count via 2 number inputs.</li>
							<li>The user can switch between "stack" mode and "compare" mode. In "stack" mode the user can update the stacks and in "compare" mode the user can draw the connectors between stacks.</li>
							<li>The user can click a "play" button to start an animation that takes the drawn lines and creates an appropriate math comparator symbol.</li>
							<li>The user can reset all settings back to the game's original state.</li>
						</ul>
					</li>
				</ol>
			</TextContent>

			<FullWidthMedia 
				mediaType="video"
				src={demoVideo}
			/>

			<TextContent title="The Process">
				<span className="eyebrow">Design</span>
				<p>If you've read my other project blog posts, you'll know that I don't really consider myself a designer—more a "developer who works with amazing designers that have engrained some of their style and habits in me". I'm confident in making design choices and "extending" existing design identities, but I haven't been through the full experience of extracting ideas from clients and building a "world" from scratch.</p>
				<p>Anyways, the hiring team provided a description and a draft mockup of what the game should look like. From there, I made some tweaks:</p>
				<ul>
					<li>I curated a color selection of blues and whites to give a more modern feel.</li>
					<li>I chose a font and icons, based solely on the fact that I thought they looked nice.</li>
					<li>I created a more "smooth" looking cube graphic.</li>
					<li>I designed user-friendly and engaging animations.</li>
				</ul>

				<span className="eyebrow">Development</span>
				<p>At this point in my life, this was the most complex React app that I've ever built, which means I learned <em>a lot</em> during this process.</p>
				<p>Let's start with state management. Before this project, I would use what's commonly known as "prop drilling", in which you store states locally and pass them down to any component that needs to use them. For this project, prop drilling was getting <em>way</em> out of hand, making it difficult to keep track of things. I did some research and ended up going with <strong>Redux</strong>. In my understanding, Redux lets you create and store global variables that you can easily call anywhere in your project. This made state management so much easier to track, and made my components a lot cleaner and easier to read.</p>
				<p>Speaking of components, I decided to split this project into 5 main components:</p>
				<ul>
					<li>Game Window</li>
					<li>Interactive Window</li>
					<li>Stack</li>
					<li>Control Panel</li>
					<li>Stack Input</li>
				</ul>
				<p>The <strong>Game Window</strong> simply housed all the components together in one area.</p>
				<p>The <strong>Interactive Window</strong> was the place where users can play with the content. Add blocks by clicking, remove blocks by dragging, and draw connections. This is also where the <strong>Stack</strong> component lives, which one might guess is where blocks are stacked together.</p>
				<p>The <strong>Control Panel</strong> and <strong>Stack Input</strong> components are also intertwined. The Stack Input component allows users an alternative method of adding or removing blocks from the stack. This is housed within the Control Panel component, which also contains different actions like mouse control settings, play/rewind, and reset.</p>
				<p>Using a combination of <strong>Redux</strong>, <strong>useState</strong>, <strong>useRef</strong>, and <strong>useEffect</strong>, these components can work together to create an engaging and smooth experience for the user. If you want to take a direct look at my implementation, feel free to check out <a href="https://github.com/zethdeluna/math-comparator-game-v2" target="_blank">my repo</a>!</p>
			</TextContent>

			<FullWidthMedia 
				src={twoCubes}
				alt="Two little ice cubes"
			/>

			<TextContent title="The Retro">
				<p>This project was my first taste of building a more complex UI system and it was such a great learning experience for me. After getting through this, I've learned how to integrate React Redux into my apps for better state management, and I have a much, <em>much</em>, better understanding of how/when to properly use React hooks.</p>
				<p>Shoutout to the hiring manager for sending me this challenge and for giving me some tips & tricks in React development. One major take away I had from him was his suggestion to go through React escape hatches. He said that if you can get comfortable with escape hatches, you can become a great React developer. That's exactly what I did before tackling this project and it truly helped me out <em>so</em> much.</p>
				<p>Thanks for reading all the way through—have a good one!</p>
			</TextContent>

			<section className="project-links">
				<div className="container">

					<a className="btn heading-2" href="https://github.com/zethdeluna/math-comparator-game-v2" target="_blank">
						<span>Repo</span>
						<SVG name="star" />
					</a>

					<a className="btn heading-2" href="https://zethdeluna.github.io/math-comparator-game-v2/" target="_blank">
						<span>Demo</span>
						<SVG name="star" />
					</a>

				</div>
			</section>
		</>
	);
}

export default MathComparatorGameDetail;