import { Link } from "react-router-dom";
import SVG from "../../SVG";
import Hero from './components/Hero';
import FullWidthMedia from "./components/FullWidthMedia";
import TextContent from "./components/TextContent";
import mockupDesktop from '../../../assets/images/cnc-machine-job-handler/desktop.png';
import demoVideo from '../../../assets/videos/cnc-machine-job-handler-demo.mp4';

const CncMachineJobHandler = () => {
  return (
	<>
		<Link to="/projects" className="btn back">
			<span className="accessibility">Back to all projects</span>
			<SVG name="arrow-right" />
		</Link>

		<Hero 
			title="CNC Machine Job Handler"
			date="February 2026"
			link1={{
				url: "https://github.com/zethdeluna/cnc-machine-job-handler",
				title: "Repo"
			}}
			link2={{
				url: "https://frontend-production-ed1f.up.railway.app/",
				title: "Demo"
			}}
		/>

		<FullWidthMedia 
			src={mockupDesktop}
			alt="CNC Machine Job handler desktop mockup"
		/>

		<TextContent title="The Overview">
			<p>I'll be honest with you: I came into this project not knowing what a job queue was.</p>
			<p>I had a solid understanding of React and a decent grasp of building REST APIs, but the backend concepts behind this project — Redis, WebSockets, PostgreSQL transactions — were all pretty new territory for me. I knew that tackling something outside of my comfort zone was exactly what my portfolio needed, so I leaned into it. About a week and a lot of documentation tabs later, I had a fully functioning, real-time job orchestration platform. Pretty cool!</p>

			<span className="eyebrow">Objective</span>
			<p>The goal was to dive in and learn about full-stack development. The plan was to build a platform that manages CNC machining jobs from start to finish. A user submits a job with details like material, complexity, and machine type. From there, a scheduler automatically picks up the job, finds an available machine, runs it, and logs everything along the way. The whole process updates live in the browser with no refreshing required.</p>
			<p>On the surface, it sounds simple enough. But the further I got into the build, the more interesting (and humbling) the problems became.</p>

			<span className="eyebrow">Technologies</span>
			<ul>
				<li><strong>Frontend:</strong> React + TypeScript, scaffolded with Vite</li>
				<li><strong>Backend:</strong> Node.js + Express + TypeScript</li>
				<li><strong>Database:</strong> PostgreSQL</li>
				<li><strong>Queue:</strong> Redis</li>
				<li><strong>Real-time:</strong> WebSockets</li>
				<li><strong>Infrastructure:</strong> Docker + Docker Compose</li>
				<li><strong>Hosting:</strong> Railway</li>
			</ul>
		</TextContent>

		<TextContent title="The Breakdown">
			<p>Here are the main features I set out to build:</p>
			<p><strong>The Dashboard</strong> displays a live view of the machine fleet on the left and the full job queue on the right. The job list is filterable by status, and clicking any row takes you to that job's detail page. The whole thing refreshes automatically whenever a job changes state, thanks to WebSockets.</p>
			<p><strong>The Scheduler</strong> is where most of the interesting backend stuff lives. It runs a continuous loop, pulling jobs off a Redis priority queue and walking them through a full lifecycle: queued, assigned, running, and finally completed (or failed). Complexity-5 jobs have a 25% chance of simulated failure to demonstrate retry logic, which I thought was a fun touch.</p>
			<p><strong>The Job Detail Page</strong> shows all of the key information about a single job, plus a full reverse-chronological event history. Every state change, every assignment, every retry gets logged to an events table so you can see exactly what happened and when.</p>
			<p><strong>Crash Recovery</strong> was one of those features I didn't originally plan for, but ended up being really glad I built. If the backend goes down mid-run, jobs that were stuck in "assigned" or "running" get automatically reset and re-queued the next time the server starts up.</p>
		</TextContent>

		<FullWidthMedia 
			mediaType="video"
			src={demoVideo}
		/>

		<TextContent title="The Process">

			<span className="eyebrow">Design</span>
			<p>The aesthetic I went for was something clear, simple, and tech-y with dark charcoal backgrounds, amber accents, and a monospace font (JetBrains Mono). I wanted it to be clear and have everything visible at once, like something an operator would actually use. It was really fun to design something with such a clear real-world context in mind.</p>
			<p>I leaned on CSS custom properties heavily for this one. Setting up a full token system upfront (colors, spacing, typography, status states) made the whole thing a lot more consistent and saved me a ton of time when I started wiring up the components.</p>

			<span className="eyebrow">Development</span>
			<p>Let's talk about the backend first, because that's where I grew the most.</p>
			<p><strong>Redis</strong> as a job queue was a new concept for me. The basic idea is that instead of constantly asking the database "hey, are there any new jobs?" (which is called polling, and is inefficient), the scheduler just sits and waits. The moment a new job gets added to the queue, it wakes up and processes it. Redis has a built-in command for this called `BZPOPMAX`, which blocks until something shows up. It's a satisfying pattern once it clicks.</p>
			<p>I also used Redis for a pub/sub channel, which is a way for different parts of the backend to broadcast messages to each other. Every time a job changes state, the scheduler publishes an update to a channel, and the WebSocket server is subscribed to that channel and forwards it to the browser. Three separate Redis clients are needed to make this work (one for queue operations, one for publishing, one for subscribing), which was a fun puzzle to figure out.</p>
			<p><strong>PostgreSQL</strong> transactions were another concept I had heard of but never actually implemented. The idea is that some operations involve multiple database writes, and they need to either all succeed together or all fail together. For example, when a job is created, you need to insert the job AND log a creation event. If the event insert fails, you don't want a job sitting in the database with no history attached to it. Wrapping both writes in a transaction with `BEGIN`/`COMMIT`/`ROLLBACK` solves that cleanly.</p>
			<p>On the frontend, I was able to put a lot of React skills to use that I had been developing across previous projects. One pattern I'm happy with is how the three main hooks (`useMachines`, `useJobs`, and `useWebSocket`) wire together in the dashboard. Each hook does one thing, they're all independently testable, and the page component just calls `refresh()` on the data hooks whenever a WebSocket message comes in. Clean and easy to follow:</p>
			<p>
				<pre>
					<span>const &lcub; machines, refresh: freshMachines &rbrace; = useMachines();</span>
					<span>const &lbrace; jobs, refresh: refreshJobs &rbrace; = useJobs();</span>
					<span>useWebSocket&lpar;(message) =&gt; &lbrace;</span>
					<span className="indent">if &lpar;message.type !== 'connected'&rpar; &lbrace;</span>
					<span className="indent">
						<span className="indent">refreshMachines();</span>
						<span className="indent">refreshJobs();</span>
					</span>
					<span className="indent">&rbrace;</span>
					<span>&rbrace;&lpar; ;</span>
				</pre>
			</p>

		</TextContent>

		<TextContent title="The Retro">
			<p>This project put me through the wringer in the best way possible. I came in knowing React and left with a much deeper understanding of backend architecture, database integrity, and real-time data pipelines. Concepts that used to feel abstract (queues, pub/sub, transactions) now feel like concrete tools I know how to reach for. If I were to do it again, I'd probably spend more time planning the WebSocket message structure upfront. I went back and tweaked it a few times as I built out the frontend, which caused some ripple effects. Not a disaster, but a good reminder that a little planning goes a long way.</p>
			<p>All in all, really proud of how this one came together. Thanks for reading, and feel free to check out the repo if you want to dig into the code!</p>
		</TextContent>

		<section className="project-links">
			<div className="container">

				<a className="btn heading-2" href="https://github.com/zethdeluna/cnc-machine-job-handler" target="_blank">
					<span>Repo</span>
					<SVG name="star" />
				</a>

				<a className="btn heading-2" href="https://frontend-production-ed1f.up.railway.app/" target="_blank">
					<span>Demo</span>
					<SVG name="star" />
				</a>

			</div>
		</section>

	</>
  );
}

export default CncMachineJobHandler;