import { LunaScroll } from "../../LunaScroll";
import { Link } from "react-router-dom";

interface ProjectCardProps {
	url?: string;
	name?: string;
	imageURL?: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ url, name, imageURL }) => {
	if ( !url ) return;

	return (
		<LunaScroll tag="li" animation="bounce-in">
			<Link to={url} className="project-card">
				<div className="image-container">
					{
						imageURL && <img src={imageURL} />
					}
				</div>
				<article>
					<h3 className="heading-5">{name}</h3>
				</article>
			</Link>
		</LunaScroll>
	);
}

export default ProjectCard;