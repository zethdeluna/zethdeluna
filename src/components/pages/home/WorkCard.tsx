import { LunaScroll } from '../../LunaScroll';
import SVG from '../../SVG';

interface WorkCardProps {
	svg?: string;
	title?: string;
	link?: string;
};

const WorkCard: React.FC<WorkCardProps> = ({ svg, title, link }) => {

	return (
		<li>
			<LunaScroll animation="bounce-in">
				{svg === 'sun' && <SVG name="sun" />}
				{svg === 'star' && <SVG name="star" />}
			</LunaScroll>
			<a className="card" href={link ? link : '#'}>
				<div className="image-container"></div>
				<div className="metadata">
					{title !== '' && <h3 className="heading-5">{title}</h3>}
				</div>
				<div className="hover-text heading-5">
					Take a look
					<SVG name="arrow-right" />
				</div>
			</a>
		</li>
	);
};

export default WorkCard;