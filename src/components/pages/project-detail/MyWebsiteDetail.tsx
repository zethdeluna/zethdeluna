import { Link } from "react-router-dom";
import SVG from "../../SVG";
import Hero from "./components/Hero";
import FullWidthMedia from "./components/FullWidthMedia";
import TextContent from "./components/TextContent";
import TwoColumnMedia from "./components/TwoColumnMedia";
import mockupDesktop from '../../../assets/images/my-website/desktop.png';
import sun from '../../../assets/svgs/sun-smiley.svg?url';
import moonAndStars from '../../../assets/svgs/moon-and-stars-static.svg?url';
import layoutVideo from '../../../assets/videos/layout.mp4?url';
import designStyles from '../../../assets/images/my-website/styles.jpg?url';

const MyWebsiteDetail = () => {
	return (
		<>
			<Link to="/projects" className="btn back">
				<span className="accessibility">Back to all projects</span>
				<SVG name="arrow-right" />
			</Link>

			<Hero
				title="zethdeluna.com"
				date="November 2024"
			/>

			<FullWidthMedia
				src={mockupDesktop}
				alt="My website desktop mockup"
			/>

			<TextContent title="The Overview">
				<p>Yes, it's true... I'm using my own website as a portfolio project.</p>
				<p>In my defense, I actually did build this site from the ground up! I've been building custom modular WordPress themes at my current job, since mid-2021 to at least the time of this writing (late-2024). So, my first thought was to build a custom WordPress theme for myself. As I was going through the initial setup, I kept thinking things like "Do I really need all these features?" and "It would be so much easier to just do something <em>completely</em> custom and a little more 'bare bones'". Couple that with my goal of gaining more experience with React, and a few weeks later here we have a fully-fledged React-based website.</p>

				<span className="eyebrow">Objective</span>
				<p>As I said before, I wanted to make a completely custom website and have full control over the user's experience. Since I'm the only one creating & editing content, it didn't make sense to try to work this site into a content management system, like WordPress. This gave me much more freedom to do what I wanted and how I wanted it. I wanted to create an experience that was somewhat whimsical and fun, while also highlighting my skills.</p>

				<span className="eyebrow">Technologies</span>
				<p>This site was designed in <strong>Figma</strong>, built with <strong>Vite</strong>, written in <strong>React TypeScript</strong>, and styled with <strong>CSS</strong>. The main React hooks utilized are <strong>useState</strong>, <strong>useEffect</strong>, and <strong>useRef</strong>. One notable React library used is <strong>react-router-dom</strong>. A solid foundation in <strong>HTML</strong> and <strong>Vanilla JS</strong> also came in handy during this project. We'll dive into the details in a bit.</p>
			</TextContent>

			<TwoColumnMedia
				src1={sun}
				alt1="Sun smiley"
				src2={moonAndStars}
				alt2="Moon and stars"
				animate={true}
				size="small"
			/>

			<TextContent title="The Breakdown">
				<p>My goal was to create a multi-page experience using React that would highlight my skills and projects, and give visitors a little taste of my personality. </p>
				<p>I'm no designer, so I won't be getting that deep into the design process behind this site. I'll say that the design came about from a combination of two things:</p>
				<ol>
					<li>I've been lucky enough to work with an <em>amazing</em> group of designers over the last few years (shoutout to the Studio Simpatico designers) who create these beautifully consistent, hyper-organized, and sleek designs. As a developer, I spend lots of time really getting into the details of those designs so that I can deliver a pixel-perfect replica in the form of a website. After a while, some of their design habits kind of got ingrained into my brain!</li>
					<li>I sometimes have this desire to make things look as good as I can make them look, especially if it's for others to see. Most of this design was me just feeling it out and keeping what I liked!</li>
				</ol>
				<p>In terms of development, these were the main features I wanted to tackle:</p>
				<ol>
					<li>Create a React-based site that supports a multi-page experience.</li>
					<li>Create smooth and satisfying transitions—between pages, hovering over elements, scrolling, and similar interactions.</li>
				</ol>
			</TextContent>

			<TextContent title="The Process">
				<p>Now, I'll get a little more detailed as to how I got this site up & running.</p>
				<span className="eyebrow">Design</span>
				<p>Again, I won't be going too deep into my design process—I honestly don't even know much about the proper lingo designers use amongst each other. I spent countless hours browsing UI/UX designs on Behance to gather some inspiration for my own design, and in between browsing sessions I would go into Figma to slowly build up my site's overall theme and layout. I set up some global text styles and colors for design consistency throughout the site. I also set spacing values to guarantee consistent module separation throughout the site, which includes a 12-column layout and a series of module spacing variables.</p>
			</TextContent>

			<FullWidthMedia
				mediaType="video"
				src={layoutVideo}
			/>

			<FullWidthMedia
				src={designStyles}
				alt="Styles template"
				animate={true}
			/>

			<TextContent>
				<p>A lot of my design practices and choices stem from working with the spectacular design team that I mentioned earlier. Even though I've never officially worked on a design project, they've taught me so much during my time with the Studio. Now, let's move onto something I'm a little more familiar with!</p>
				<span className="eyebrow">Development</span>
				<p>Let's start with the not-so-development-y things. I wanted my site to be as low-cost as possible in terms of hosting and maintenance. This means no fancy site hosting platforms, no expensive third-party plugins, and no fancy content management systems. I decided to use GitHub both as a version control platform and as a site hosting service, via GitHub Pages. Both are completely free for someone like me who only has one site! I bought a domain name, based on my own name, and luckily my name isn't super common so in total I'm only paying $12 a year to run my whole situation. <em>Twelve dollars</em>.</p>
				<p>Now for the fun stuff. I decided to build this site with React because 1) I mainly work with plain HTML, CSS and JavaScript during my day job and I wanted to gain a deeper understanding of building with React, and 2) I was intrigued by some of React's native features, such as the virtual DOM for performance (when utilized effectively), its component-based nature, and its potential for building more interactive user experiences.</p>
				<p>I was able to successfully build a multi-page experience using React's virtual DOM paired with a React library called <strong>react-router-dom</strong>. This library allows you to set up client-side navigation between your components, which creates a simulation of a multi-page website within your React app. This was crucial for my website because of my decision to host it with GitHub pages (free), which is a static site hosting service. <em>Technically</em> it does support multi-page websites, but you have to jump through some hoops and have a separate repository for each page. The <strong>react-router-dom</strong> library just made things a whole lot simpler.</p>
				<p>I utilized React's components system mostly as a form of organization, however did make use of it's reusable nature in some parts of the site. In terms of organization, I isolated each page's sections into its own component. This allowed for cleaner, simpler files and more traceable state management. My Project Details pages, such as the one you're reading now, are where I was able to take advantage of the component reusability. I wanted to create a flexible "page builder" for these blog posts that would allow me to repeat sections and organize them as I needed. Due to the simplicity of these project write-ups, I only made 3 components, or "modules", that I could use to build my posts:</p>
				<ol>
					<li>A Text module to write my post content</li>
					<li>A Full-Width Media module to include large images</li>
					<li>A Two-Column Image module to include two smaller images</li>
				</ol>
				<p>all of which you've already seen by the time you reach this sentence.</p>
				<p>I could go into detail about how each component was built or how they function, but that's not my intention for these project posts. If you're interested in seeing the code, feel free to check out <a href="https://github.com/zethdeluna/zethdeluna/tree/main" target="_blank">my repository</a>. In the meantime, I'll just show you a little bit of how these components look when I use them:</p>
				<p>
					<pre>
						<span>&lt;TextContent title="The Process"&gt;</span>
						<span className="indent">&lt;p&gt;Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.&lt;/p&gt;</span>
						<span>&lt;/TextContent&gt;</span>
					</pre>
				</p>
				<p>
					<pre>
						<span>&lt;FullWidthMedia</span>
						<span className="indent">mediaType="video"</span>
						<span className="indent">src=&#123;layoutVideo&#125;</span>
						<span className="indent">animate=&#123;true&#125;</span>
						<span>/&gt;</span>
					</pre>
				</p>
				<p>
					<pre>
						<span>&lt;TwoColumnMedia</span>
						<span className="indent">src1=&#123;sun&#125;</span>
						<span className="indent">alt1="Sun smiley"</span>
						<span className="indent">src2=&#123;moonAndStars&#125;</span>
						<span className="indent">alt2="Moon and stars"</span>
						<span className="indent">animate=&#123;true&#125;</span>
						<span className="indent">size="small"</span>
						<span>/&gt;</span>
					</pre>
				</p>
				<p>Before we head out, I'll talk briefly about all the fun animations on this site. To keep things simple and efficient, all the animations are handled almost purely by CSS. The animations that required a touch of JavaScript/React are the scrolling animations, for which I built a "wrapper" component that I can... <em>wrap</em>... around elements that I want to "animate in" once they enter the screen. Here's an example from my footer that shows how I set up the flower images to "bounce in" when you get down to the footer:</p>
				<p>
					<pre>
						<span>&lt;LunaScroll animation="bounce-in"&gt;</span>
						<span className="indent">&lt;SVG name="plumeria-smiley-heat" /&gt;</span>
						<span>&lt;/LunaScroll&gt;</span>
					</pre>
				</p>
				<p>My LunaScroll component uses the <strong>useRef</strong> hook to keep track of multiple animation elements per page, the <strong>useEffect</strong> hook to handle the animation triggers (supplemented by CSS), and the <strong>useState</strong> hook to keep track of whether the element is within the viewport or not. (Again, feel free to check out the code! <a href="https://github.com/zethdeluna/zethdeluna/blob/main/src/components/LunaScroll.tsx" target="_blank">Here's a direct link to the code for this component</a>.)</p>
				<p>There's so much code to talk about with this site, and I definitely didn't get to all of it, but I wanted to keep this post as concise as I could.</p>
			</TextContent>

			<TextContent title="The Retro">
				<p>All in all, this was a really fun project for me. I'm usually working off of other people's designs, so it was exciting to work on something of my own—something that started all in my head and ended as a real site for people to see.</p>
				<p>This was an amazing learning experience. I learned simple things like how to display images that are stored locally in the codebase (which I wasn't used to since I <em>only</em> work in content management systems at my day job) and how to effectively organize the file directories of a React-based website. I learned <em>a lot</em> about the common practices for writing in React TypeScript, and I was able to really dial in my workflow for creating custom components and experiences.</p>
				<p>I'd like to say that this site can't get any better, in terms of the code that I wrote, but I'm <em>certain</em> I'll find something worth improving in the future. This is my site after all, and I'll probably spend a lot more time with it than projects I've worked on in the past.</p>
				<p>I'm hoping to carry my newfound knowledge into whatever coding adventure comes to me next!</p>
				<p>Thanks so much for stopping by and making it to the end! One last time, feel free to browse through the repository if interested (link below).</p>
			</TextContent>

			<section className="project-links">
				<div className="container">

					<a className="btn heading-2" href="https://github.com/zethdeluna/zethdeluna/tree/main/src/projects/expense-calendar" target="_blank">
						<span>My Repository</span>
						<SVG name="star" />
					</a>

				</div>
			</section>

		</>
	);
}

export default MyWebsiteDetail;