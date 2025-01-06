import { Link } from "react-router-dom";
import SVG from "../../SVG";
import Hero from "./components/Hero";
import FullWidthMedia from "./components/FullWidthMedia";
import TextContent from "./components/TextContent";
import TwoColumnMedia from "./components/TwoColumnMedia";
import mockupDesktop from '../../../assets/images/expense-calendar/desktop.png';
import mockupDesktopAdd from '../../../assets/images/expense-calendar/desktop-add.png';
import mockupDesktopExpense from '../../../assets/images/expense-calendar/desktop-expense.png';
import mockupTablet from '../../../assets/images/expense-calendar/tablet.png';
import mockupTabletExpense from '../../../assets/images/expense-calendar/tablet-expense.png';
import mockupMobile from '../../../assets/images/expense-calendar/mobile.png';
import mockupMobileExpense from '../../../assets/images/expense-calendar/mobile-expense.png';

const ExpenseCalendarDetail = () => {
	return (
		<>
			<Link to="/projects" className="btn back">
				<span className="accessibility">Back to all projects</span>
				<SVG name="arrow-right" />
			</Link>

			<Hero
				title="Expense Calendar"
				date="November 2024"
			/>

			<FullWidthMedia
				src={mockupDesktop}
				alt="Expense Calendar desktop mockup"
			/>

			<TextContent title="The Overview">
				<p>As someone who wasn't exposed to <em>anything</em> about finance until I reached my early adulthood, I had to learn some basic things on my own — like how to budget, open a savings account, and track expenses. One good thing about learning late is that I've got the internet's latest info on the do's and don't's of finance, and I can really pick & choose what works best for me.</p>
				<p>I've kind of developed a method of tracking my finances in a more visual way. I was mainly doing this in spreadsheets, styling cells to make it look like a calendar so that I knew exactly when my bills were going to hit and to be prepared for them. This was my inspiration for creating my Expense Calendar web app.</p>

				<span className="eyebrow">Objective</span>
				<p>The main reason I ventured into this project was because I wanted to learn more about building sites with React, more specifically React TypeScript. I don't work with any JS frameworks at my day job, so I saw this as a great opportunity to jump into the deep (or medium) end of the React pool.</p>
				<p>Because the placement of dates and days change every month, I had to constantly rewrite my spreadsheet calendar and move my expenses. I wanted to make something that would automatically fill in my expenses each month. And I know, I probably could've just used something like Google Calendar to set this up, but why not make this my own?</p>

				<span className="eyebrow">Technologies</span>
				<p>This project was built with <strong>Vite</strong>, written in <strong>React TypeScript</strong>, and styled with <strong>CSS</strong>. The React hooks utilized are <strong>useState</strong>, <strong>useEffect</strong>, <strong>useCallback</strong>, and <strong>useRef</strong> A solid foundation in <strong>HTML</strong> and <strong>Vanilla JS</strong> also came in handy during this project. We'll get more into the nitty gritty later.</p>

			</TextContent>

			<TextContent title="The Breakdown">
				<p>My goal was to create a visually satisfying, semi-automated method of tracking my expenses. Here's what I needed to do:</p>
				<ol>
					<li>Generate a list of days and display them on a monthly scale.</li>
					<li>Be able to add items to a selected day.</li>
					<li>Be able to apply certain characteristics to these items, i.e. income or expense, frequency, amount, and description.</li>
					<li>Be able to browse through past and future months, as well as the details of each item.</li>
				</ol>
			</TextContent>

			<TextContent title="The Process">
				<p>Now, let's get a <em>little</em> more technical here.</p>

				<span className="eyebrow">Design</span>
				<p>Having spent the last 3.5 years (as of this writing) in the presence of an <em>amazing</em> team of designers (shoutout Studio Simpatico), I've humbly picked up a decent eye for UI/UX design. I wanted to design something clean, simple, and easy on the eyes. For starters, I decided to use soft colors, give buttons and popups nice rounded edges, and use a clean sans-serif font—Readex Pro by Google Fonts.</p>
				<p>I tried to make this app as intuitive as possible (I mean, how complex can a calendar be, honestly). Clicking on a day will open up a popup, in which you can enter the new item's information. Then, just click the "Add" button, or hit the enter key, and you're done!</p>
				<p>You can also view existing items by clicking on them. Income will be colored a nice calming green—I call it "bok choy green"—and expenses will be colored a mildly alarming red—"strawberry milk". You'll see its details, as well as an option to delete the item.</p>
			</TextContent>

			<TwoColumnMedia
				src1={mockupDesktopAdd}
				alt1="Desktop mockup for adding an expense"
				src2={mockupDesktopExpense}
				alt2="Desktop mockup showing an expense"
				animate={true}
			/>

			<TextContent>
				<span className="eyebrow">Development</span>
				<p>This was my first go-around at using React to build an interactive UX, so it was truly a learning experience for me. I've heard stories about React hooks, components, and state management, but with this project I was able to get some hands-on experience on how these concepts work "in real life".</p>
				<p>The useState and useEffect hooks were my main tools of choice for this project, with a sprinkle of useCallback and useRef. The main use cases for the useState hook were to store the data entered into the calendar and to handle some of the logic that controlled the state of the active popups/forms. useEffect was useful for handling existing data, i.e. parsing and displaying the calendar data stored in localStorage, while useCallback was the driver behind the user's ability to add new information to the calendar.</p>
				<p>If you'd like to take a more detailed look at the implementation, feel free to check out the code <a href="https://github.com/zethdeluna/zethdeluna/tree/main/src/projects/expense-calendar" target="_blank">here</a>!</p>
			</TextContent>

			<TwoColumnMedia
				src1={mockupTablet}
				alt1="Tablet mockup for the expense calendar app"
				src2={mockupTabletExpense}
				alt2="Tablet mockup for the expense calendar app"
				animate={true}
				size="medium"
			/>

			<TextContent title="The Retro">
				<p>I believe that no matter how good you are at your craft (or anything, really), there will always be some room left for improvement. I know, I said that this was my first go-around at building a full-on React app, but there were some things I could've done better from the start.</p>
				<p>I've spent the last few years working under amazing leadership and fellow developers, and we've come together as one well-oiled machine that outputs ultra-neat code and a super organized directory system *chef's kiss. That, unfortunately, didn't exactly carry over when I was getting this project going. My first iteration of this project was <em>a mess</em>, and going back to clean things up did take quite a while.</p>
				<p>Another point I should focus on for my next project would be to build with more clean & efficient functions, and more purposeful state management. I feel like now, after this project has put me through the wringer, I have a much better understanding of React component structures/hierarchy, state management between components, and the general uses of React hooks like useState, useCallback, useEffect, and useRef. I'm hopeful that I can carry my newfound knowledge to the next project, and am excited to continue to learn more!</p>
			</TextContent>

			<TwoColumnMedia
				src1={mockupMobile}
				alt1="Mobile mockup for the expense calendar app"
				src2={mockupMobileExpense}
				alt2="Mobile mockup for the expense calendar app"
				animate={true}
				size="small"
			/>

			<TextContent>
				<p>Thanks so much for stopping by and making it to the end! Please do check out a live demo of this project (link below) and feel free to browse through the repository if interested.</p>

			</TextContent>

			<section className="project-links">
				<div className="container">

					<Link to="/projects/demo/expense-calendar" className="btn heading-2">
						<span>Demo</span>
						<SVG name="star" />
					</Link>

					<a className="btn heading-2" href="https://github.com/zethdeluna/zethdeluna/tree/main/src/projects/expense-calendar" target="_blank">
						<span>Repo</span>
						<SVG name="star" />
					</a>

				</div>
			</section>

		</>
	);
}

export default ExpenseCalendarDetail;