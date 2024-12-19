import SVG from "../../SVG";
import { LunaScroll } from "../../LunaScroll";
import ProjectCard from "./ProjectCard";
import thumbnailExpenseCalendar from '../../../assets/images/expense-calendar/thumbnail.png';

const ProjectsList = () => {

	const projects = [
		{
			'name': 'Expense Calendar',
			'date': 'November 2024',
			'url': 'expense-calendar',
			'imageURL': thumbnailExpenseCalendar
		},
		{
			'name': 'Expense Calendar',
			'date': 'November 2024',
			'url': 'expense-calendar',
			'imageURL': thumbnailExpenseCalendar
		},
		{
			'name': 'Expense Calendar',
			'date': 'November 2024',
			'url': 'expense-calendar',
			'imageURL': thumbnailExpenseCalendar
		},
		{
			'name': 'Expense Calendar',
			'date': 'November 2024',
			'url': 'expense-calendar',
			'imageURL': thumbnailExpenseCalendar
		},
		{
			'name': 'Expense Calendar',
			'date': 'November 2024',
			'url': 'expense-calendar',
			'imageURL': thumbnailExpenseCalendar
		},
	];

	return (
		<section className="projects">
			<div className="container">

				<ul className="posts grid">
					{
						projects.map((project, index) => {

							const stars_card = 
								<li key={`stars-card-${index}`} className="stars-card">
									<LunaScroll animation="bounce-in"><SVG name="star" /></LunaScroll>
									<LunaScroll animation="bounce-in"><SVG name="star" /></LunaScroll>
									<LunaScroll animation="bounce-in"><SVG name="star" /></LunaScroll>
									<LunaScroll animation="bounce-in"><SVG name="star" /></LunaScroll>
								</li>
							;
							
							return (
								<>
									{ index === 3 && stars_card}
									<ProjectCard
										key={project.url}
										url={project.url}
										name={project.name}
										date={project.date}
										imageURL={project.imageURL}
									/>
								</>
							);
						})
					}
				</ul>

			</div>
		</section>
	);
}

export default ProjectsList;