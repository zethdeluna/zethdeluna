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
				<p>As someone who wasn't expose to <em>anything</em> about finance until I reached my early adulthood, I had to learn some basic things on my own — like how to budget, open a savings account, and track expenses. One good thing about learning late is that I've got the internet's latest info on the do's and don't's of finance, and I can really pick & choose what works best for me.</p>
				<p>I've kind of developed a method of tracking my finances in a more visual way. I was mainly doing this in spreadsheets, styling cells to make it look like a calendar so that I knew exactly when my bills were going to hit and to be prepared for them. This was my inspiration for creating my Expense Calendar web app.</p>

				<span className="eyebrow">Objective</span>
				<p>So, the main reason I ventured into this project was because I wanted to learn more about building sites with React, more specifically React TypeScript. I don't work with any JS frameworks at my day job, so I saw this as a great opportunity to jump into the deep (or medium) end of the React pool.</p>
				<p>Because the dates and days change every month, I had to constantly rewrite my spreadsheet calendar and move my expenses. I wanted to make something that would automatically fill in my expenses each month. And I know, I probably could've just used something like Google Calendar to set this up, but why not make this my own?</p>

				<span className="eyebrow">Technologies</span>
				<p>This project was built with <strong>Vite</strong>, written in <strong>React TypeScript</strong>, and styled with <strong>CSS</strong>. We'll get more into the nitty gritty later.</p>

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
				<p>You can also view existing items by clicking on them. Income will be colored a nice calming green—I call it "bokchoy green"—and expenses will be colored a mildly alarming red—"strawberry milk". You'll see its details, as well as an option to delete the item.</p>
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
				<p>This was my first go-around at using React to build an interactive UX, so it was truly a learning experience for me. I've only heard stories about React hooks, components, and state management (?), but with this project I've turned myth into reality.</p>
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
				<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
				<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
				<ol>
					<li>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</li>
					<li>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</li>
					<li>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</li>
				</ol>
			</TextContent>

			<TwoColumnMedia
				src1={mockupMobile}
				alt1="Mobile mockup for the expense calendar app"
				src2={mockupMobileExpense}
				alt2="Mobile mockup for the expense calendar app"
				animate={true}
				size="small"
			/>

			<section className="project-module project-link">
				<div className="container grid">

					<Link to="/projects/demo/expense-calendar" className="btn arrow-btn heading-2">
						Check out a demo <SVG name="arrow-right" />
					</Link>

				</div>
			</section>

		</>
	);
}

export default ExpenseCalendarDetail;