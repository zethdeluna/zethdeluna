import { Outlet } from "react-router-dom";
import Hero from "../components/pages/projects/Hero";
import ProjectsList from "../components/pages/projects/ProjectsList";
// import ExpenseCalendar from "../projects/expense-calendar/ExpenseCalendar";

const Projects = () => {
	return (
		<section className="projects-page">

			<Hero />
			<ProjectsList />

			<Outlet />

		</section>
	);
}

export default Projects;