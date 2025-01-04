import { Link } from "react-router-dom";
import SVG from "../../SVG";
import Hero from "./components/Hero";
import FullWidthMedia from "./components/FullWidthMedia";
import TextContent from "./components/TextContent";
import TwoColumnMedia from "./components/TwoColumnMedia";
import mockupDesktop from '../../../assets/images/my-website/desktop.png';
import sun from '../../../assets/svgs/sun-smiley.svg?url';
import moonAndStars from '../../../assets/svgs/moon-and-stars-static.svg?url';

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
				<p>In my defense, I actually did build this site from the ground up! I've been building custom modular WordPress themes at my current job, since mid-2021 to at least the time of this writing, late-2024. So, my first thought was to build a custom WordPress theme for myself. As I was going through the initial setup, I kept thinking things like "Do I really need all these features?" and "It would be so much easier to just do something <em>completely</em> custom and a little more 'bare bones'". Couple that with my goal of gaining more experience with React, and a few weeks later here we have a fully fledged React-based website.</p>

				<span className="eyebrow">Objective</span>
				<p>As I said before, I wanted to make a completely custom website and have full control over the user's experience. Since I'm the only one creating & editing content, it didn't make sense to try to work this site into a content management system, like WordPress. This gave me much more freedom to do what I want and how I wanted. I wanted to create an experience that was somewhat whimsical and fun, while also showcasing my talents.</p>

				<span className="eyebrow">Technologies</span>
				<p>This site was designed in <strong>Figma</strong>, built with <strong>Vite</strong>, written in <strong>React TypeScript</strong>, and styled with <strong>CSS</strong>. One notable React library used is <strong>react-router-dom</strong>. A solid foundation in <strong>HTML</strong> and <strong>Vanilla JS</strong> also came in handy during this project. We'll dive into the details in a bit.</p>
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
				<p>My goal was to create a multi-page experience using React that would showcase my skills and projects, and give visitors a little taste of my personality. </p>
				<p>I'm no designer, so I won't be getting that deep into the design process behind this site. I'll say that the design came about from a combination of two things:</p>
				<ol>
					<li>I've been lucky enough to work with an <em>amazing</em> group of designers over the last few years (shoutout Studio Simpatico designers) who create these beautifully consistent, hyper-organized and sleek designs. As a developer, I spend lots of time really getting into the details of those designs so that I can deliver a pixel-perfect replica in the form of a website. After a while, some of their design habits kind of got ingrained into my brain!</li>
					<li>I sometimes have this desire to make things look as good as I can make them look, especially if it's for others to see. Most of this design was me just feeling it out and keeping what I liked!</li>
				</ol>
				<p>In terms of development, these were the main features I need to tackle:</p>
				<ol>
					<li>Create a React-based site that supports a multi-page experience.</li>
					<li>Create smooth and satisfying transitions—between pages, hovering over elements, scrolling, etc.</li>
				</ol>
			</TextContent>

		</>
	);
}

export default MyWebsiteDetail;