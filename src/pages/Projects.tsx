import { Outlet, useLocation } from "react-router-dom";
import Hero from "../components/pages/projects/Hero";
import ProjectsList from "../components/pages/projects/ProjectsList";

const Projects = () => {

	const location = useLocation();
  	const isProjectsMainPage = location.pathname === '/projects';

	return (
		<section className="projects-page">

			{
				isProjectsMainPage ? (
					<>
						<Hero />
						<ProjectsList />
					</>
				) : (
					<Outlet />
				)
			}

		</section>
	);
}

export default Projects;