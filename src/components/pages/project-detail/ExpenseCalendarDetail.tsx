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

			<TextContent title="Overview">
				<p>As someone who didn't really learn <em>anything</em> about finance until I reached my early adulthood, I've kind of developed a method of tracking my finances in a more visual way. I was mainly doing this in spreadsheets, styling cells to make it look like a calendar so that I knew exactly when my bills were going to hit and be prepared for them.</p>
				<span className="eyebrow">Objective</span>

			</TextContent>

			<TwoColumnMedia
				src1={mockupDesktopAdd}
				alt1="Desktop mockup for adding an expense"
				src2={mockupDesktopExpense}
				alt2="Desktop mockup showing an expense"
				animate={true}
			/>

			<TextContent title="Problem">
				<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
			</TextContent>

			<TwoColumnMedia
				src1={mockupTablet}
				alt1="Tablet mockup for the expense calendar app"
				src2={mockupTabletExpense}
				alt2="Tablet mockup for the expense calendar app"
				animate={true}
				size="medium"
			/>

			<TextContent title="Process">
				<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
				<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
				<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
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

			<TextContent title="Solution">
				<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
				<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
				<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
				<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
				<ol>
					<li>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</li>
					<li>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</li>
					<li>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</li>
				</ol>
			</TextContent>

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