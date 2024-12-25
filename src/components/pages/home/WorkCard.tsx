import { Link } from "react-router-dom";
import { LunaScroll } from '../../LunaScroll';
import SVG from '../../SVG';

interface WorkCardProps {
	title?: string;
	url: string;
	svg?: string;
	image?: string;
};

const WorkCard: React.FC<WorkCardProps> = ({ title, url, svg, image }) => {

	return (
		<li>
			<LunaScroll animation="bounce-in">
				{svg === 'sun' && <SVG name="sun" />}
				{svg === 'star' && <SVG name="star" />}
			</LunaScroll>
			<Link to={url} className="card">
				<div className="image-container">{image && <img src={image} alt={`${title} preview image`} />}</div>
				<div className="metadata">
					{title !== '' && <h3 className="heading-5">{title}</h3>}
				</div>
				<div className="hover-text heading-5">
					Take a look
					<SVG name="arrow-right" />
				</div>
			</Link>
		</li>
	);
};

export default WorkCard;