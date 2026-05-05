import { Link } from "react-router-dom";
import SVG from "../../SVG";
import Hero from "./components/Hero";
import FullWidthMedia from "./components/FullWidthMedia";
import TextContent from "./components/TextContent";
import mockupDesktop from '../../../assets/images/tlescope/desktop.png';

const TlescopeDetail = () => {
	return (
		<>
			<Link to="/projects" className="btn back">
				<span className="accessbility">Back to all projects</span>
				<SVG name="arrow-right" />
			</Link>

			<Hero 
				title="TLEscope"
				date="April 2026"
				link1={{
					url: "https://github.com/zethdeluna/tlescope",
					title: "Repo"
				}}
				link2={{
					url: "https://www.tlescope.com/",
					title: "Demo"
				}}
			/>

			<FullWidthMedia 
				src={mockupDesktop} 
				alt="TLEscope desktop mockup"
			/>

			<TextContent title="The Overview">
				<p>This project was my attempt at bringing myself back to my roots in astrophysics. I wanted to build something useful <em>and</em> cool (to me, at least), and something that used real-world physics and data.</p>
				<p>So, I built this live satellite tracker! Orbital data is free-to-use and up-to-date, the physics is tried and true, and the end goal actually felt interesting to me, so I thought this would be a fun challenge. What started as a simple map idea evolved into a full-stack app that tracks up to 5 satellites simultaneously, predicts when they'll pass overhead at any give location, and renders their orbital paths on a 3D globe in real-time.</p>
				<p>You can say that I got a little carried away (in the best way possible).</p>

				<span className="eyebrow">Objective</span>
				<p>I had two goals going into this project. The first was to gain deeper, more practical experience with Python backend development — specifically, building a real REST API around a non-trivial physics pipeline, not just your average CRUD endpoints. The second was to get comfortable with the kinds of tools and concepts that show up in aerospace software engineering: coordinate frames, propagation algorithms, real flight data formats, and the infrastructure needed to serve all of that reliably.</p>
				<p>I also just wanted something that would make someone look at it and think "wait, that's happening right now??", inviting curiosity into aerospace and astrophysics.</p>

				<span className="eyebrow">Technologies</span>
				<p>The backend is built with <strong>Python</strong>: <strong>FastAPI</strong> for RESTful services, <strong>SGP4</strong> (the actual algorithm used by NASA and space agencies worldwide for orbital calculations), <strong>pymap3d</strong> for coordinate transforms, <strong>SQLAlchemy</strong> with <strong>Alembic</strong> for the database layer, and <strong>APScheduler</strong> for background TLE refresh jobs.</p>
				<p>The frontend is built with <strong>React + TypeScript</strong> through <strong>Vite</strong>. The 2D map is powered by <strong>Leaflet</strong>, and the 3D view is powered by <strong>CesiumJS</strong>. State management is cleanly handled by <strong>Zustand</strong>. And the whole thing runs in Docker Compose, deployed to a live URL on Railway.app, and version-controlled on GitHub.</p>
			</TextContent>

			<TextContent title="The Breakdown">
				<p>The core of this app is a four-stage physics pipeline. Each stage does exactly one thing and feeds its output into the next:</p>
				<p>
					<pre>
						<span>parse_tle()</span>
						<span>↓</span>
						<span>propagate_eci()</span>
						<span>↓</span>
						<span>eci_to_geodetic()</span>
						<span>↓</span>
						<span>build_ground_track()</span>
					</pre>
				</p>
				<p>Why those stages? The SGP4 algorithm doesn't output latitude and longitude directly, it outputs a position vector in the <strong>ECI</strong> (Earth-Centered Interial) frame, where the axes are fixed relative to the starts, not rotating with Earth. To get from that to a point on a map, you have to apply a time-dependent rotation to convert ECI to <strong>ECEF</strong> (Earth-Centered Earth-Fixed), and then account for Earth's slightly squashed shape to convert to geodetic (latitude/longitude/altitude).</p>
				<p>I validated the entire pipeline against Vallado's published aerospace reference data (literal textbook reference) before writing a single line of frontend code. If the physics are wrong, everything downstream is wrong.</p>
			</TextContent>

			<TextContent title="The Process">
				<span className="eyebrow">V1 — The Physics Backend</span>
				<p>V1 is just the backend. No UI, no map, nothing. Just a FastAPI application that fetches a live <strong>TLE</strong> (Two-Line Element set, the standard data format for describing a satellite orbit) from <a href="https://celestrak.org/" target="_blank">Celestrak</a>, propagates it forward using SGP4, and returns a 90-minute ground track as GeoJSON. All accompanied by 16 tests validating our calculations against reference ephemeris data.</p>
				<p>This step in the process took the longest. V2 through V5 went along much smoother since we had a solid foundation to work with.</p>
				<p>A key highlight in the data processing: When passing time to SGP4, I had to split the Julian date into an integer-day part and a fractional-day part, instead of passing one large floating-point number. It's a trick that let's us keep a higher level of precision, ensuring we get the most accurate results in our calculations.</p>

				<span className="eyebrow">V2 — Starting the Frontend</span>
				<p>V2 adds our most basic version of a UI. The goal here was simple: a browser app that shows the ISS moving in real time.</p>
				<p>Here, I laid down a pattern for setting up Leafleft and making updates to the map, with a focus on optimizing for smoother and less frequent re-renders. I used one <strong>useEffect</strong> to initialize Leaflet and establish a "base layer" for the map, another useEffect to sync data changes, and several <strong>useRef</strong> to hold the map's state across renders. This same structure will later apply to the CesiumJS 3D map, so it was good to get it right early.</p>

				<span className="eyebrow">V3 — The Full Catalog</span>
				<p>V3 expands the app from one hardcoded satellite (the ISS) to any of the ~10,000 active satellites in Celestrak's catalog. I added a new endpoint (GET /satellites) to the backend that parses the full active TLE list and returns names and NORAD IDs as JSON. The frontend sees this update in the form of a new "search" component with a dropdown satellite selector.</p>
				<p>This is also where <strong>Zustand</strong> entered the picture. Keeping track of the selected satellites became messy pretty quickly when that data had to flow through the search component, the data hook, the map, and the info panel simultaneously. Zustand fixed that <em>easily</em>, allowing components to pull data from one place instead of playing the telephone game.</p>
				<p>A major speed bump (literally and figuratively) was working around Celestrak's fetching policies. I frequently ran into rate-limiting issues, where I would be completely blocked from fetching new data for at least 2 hours, whether I needed new data or not. This would force me to pause any actually productive development and wait until I was cleared to fetch again. So, I created a caching system that would use TLE data that was up to 4 hours old (longer than that and the orbital calculations start becoming more and more inaccurate) and only refresh the catalog once every 24 hours (the list of active satellites is relatively stable).</p>

				<span className="eyebrow">V4 — Pass Prediction</span>
				<p>V4 is where the app becomes "useful". Instead of just pure map visualization, you can enter your location and it'll predict exaclty when a selected satellite will pass overhead (rise time, max elevation, azimuth, and duration).</p>
				<p>I used a two-stage approach to reduce calculation time and improve performance. First, a coarse scan evaluates the satellite's elevation at 30-second intervals over a multi-day window to find potential pass windows. Then, if any potential passes are found, a binary-search refinement finds the precise rise and set times to within a few seconds.</p>
				<p>The whole thing is backed by a 20-test suite, including property-based tests that verify the physics holds across arbitrary inputs.</p>

				<span className="eyebrow">V5 — 3D Visualization and Product Launch</span>
				<p>By the time we got to V5, we've set up a pretty solid product. Here, nail down the "cool" factor by adding Cesium's 3D map, and prep the app for launch.</p>
				<p>Setting up the Cesium map was pretty similar to setting up Leaflet: initialize the base map and update the satellite tracks as satellites are added or removed. There were a few subtle differences, like running the position calculations directly through Cesium instead of calculating them myself, and obviously using Cesium's own suite of components.</p>
				<p>Getting the app launched might've actually been the most tedious part, ironically. I updated the backend to include an <strong>APScheduler</strong> job that refreshes TLEs every four hours automatically, and added a <strong>PostgreSQL</strong> database with <strong>SQLAlchemy</strong> and <strong>Alembic</strong> to store TLE snapshots. Then, I set up Docker Compose to handle the build (hosted on Railway.app to a live URL) and a GitHub Actions pipeline to handle deployments. I was having a surprisingly hard time getting the API to go through to the frontend, which ended up being just a mixup of variable names and source URLs.</p>
			</TextContent>

			<TextContent title="The Retro">
				<p>This project was an amazing learning experience and the end result was pretty fulfulling.</p>
				<p>I expected the hardest part to be the physics, but with all the available resources and the "true" nature of physics, it actually wasn't. The hardest part was the infrastructure, specifically making the app reliable enough that it doesn't break whenever Celestrak is down or rate-limiting. I learned the importance of setting up a system that refreshes the data on a schedule in the background. Rather than fetching at request time and hoping that it works, we'd have a more reliable experience if we always had relatively up-to-date data ready to use.</p>
				<p>This project also reinforced how important it is to have unit tests that give you proper error messages, so when something breaks (and boy, did things break) you know exactly where to look.</p>
				<p>If I were to continue building on this, I'd probably think about adding conjunction screening (flagging pairs of satellites whose orbits come within some distance of each other). I know satellites are heavily tracked and collisions are rare, but I think it would be a fun challenge and a great way to try to immerse myself in real-world aerospace work. Another idea would be to expand this to satellites orbiting Lagrange points, like the JWST, that are not orbiting Earth.</p>
				<p>In the meantime, the live URL is up — check it out, find some satellites, and maybe go outside and try to catch one flying over you!</p>
			</TextContent>

			<section className="project-links">
				<div className="container">

					<a className="btn heading-2" href="https://github.com/zethdeluna/tlescope" target="_blank">
						<span>Repo</span>
						<SVG name="star" />
					</a>

					<a className="btn heading-2" href="https://www.tlescope.com/" target="_blank">
						<span>Demo</span>
						<SVG name="star" />
					</a>

				</div>
			</section>
		</>
	);
}

export default TlescopeDetail;