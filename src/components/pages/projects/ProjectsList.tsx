import SVG from "../../SVG";
import { LunaScroll } from "../../LunaScroll";
import ProjectCard from "./ProjectCard";
import thumbnailExpenseCalendar from '../../../assets/images/expense-calendar/thumbnail.png';
import thumbnailMyWebsite from '../../../assets/images/my-website/thumbnail.jpg';
import thumbnailMathComparatorGame from '../../../assets/images/math-comparator-game/thumbnail.jpg';
import thumbnailCncMachineJobHandler from '../../../assets/images/cnc-machine-job-handler/thumbnail.png';

const ProjectsList = () => {

	const projects = [
		{
			'name': 'CNC Machine Job Handler',
			'date': 'February 2026',
			'url': 'cnc-machine-job-handler',
			'imageURL': thumbnailCncMachineJobHandler
		},
		{
			'name': 'Math Comparator Game',
			'date': 'March 2025',
			'url': 'math-comparator-game',
			'imageURL': thumbnailMathComparatorGame
		},
		{
			'name': 'zethdeluna.com',
			'date': 'November 2024',
			'url': 'my-website',
			'imageURL': thumbnailMyWebsite
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