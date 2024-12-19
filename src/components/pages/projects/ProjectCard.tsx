import SVG from "../../SVG";
import { LunaScroll } from "../../LunaScroll";
import { Link } from "react-router-dom";

interface ProjectCardProps {
	url?: string;
	name?: string;
	date?: string;
	imageURL?: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ url, name, date, imageURL }) => {
	if ( !url ) return;

	return (
		<LunaScroll tag="li" animation="bounce-in">
			<Link to={url} className="project-card">
				<div className="image-container">
					{ imageURL && <img src={imageURL} /> }
					<span className="heading-4"><SVG name="arrow-right" /></span>
				</div>
				<article>
					<h3 className="heading-5">{name}</h3>
					{ date && <span className="eyebrow small">{date}</span> }
				</article>
			</Link>
		</LunaScroll>
	);
}

export default ProjectCard;