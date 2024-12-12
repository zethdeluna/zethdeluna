import { Outlet, Link } from "react-router-dom";
import Hero from "../components/pages/projects/Hero";
// import ExpenseCalendar from "../projects/expense-calendar/ExpenseCalendar";

const Projects = () => {
	return (
		<section className="projects-page">

			<Hero />

			<Outlet />

		</section>
	);
}

export default Projects;