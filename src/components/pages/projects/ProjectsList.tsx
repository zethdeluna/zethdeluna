import ProjectCard from "./ProjectCard";
import headshot from '../../../assets/images/me.jpg';

const ProjectsList = () => {

	const projects = [
		{
			'name': 'Expense Calendar',
			'url': 'expense-calendar',
			'imageURL': headshot
		}
	];

	return (
		<section className="projects">
			<div className="container">

				<ul className="posts grid">
					{
						projects.map((project) => (
							<ProjectCard
								key={project.url}
								url={project.url}
								name={project.name}
								imageURL={project.imageURL}
							/>
						))
					}
				</ul>

			</div>
		</section>
	);
}

export default ProjectsList;