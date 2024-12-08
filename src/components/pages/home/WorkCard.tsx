import { LunaScroll } from '../../LunaScroll';
import Sun from '../../../assets/svgs/sun-smiley.svg?react';
import Star from '../../../assets/svgs/star-smiley.svg?react';
import ArrowRight from '../../../assets/svgs/arrow-right.svg?react';

interface WorkCardProps {
	svg?: string;
	title?: string;
	link?: string;
	category?: string;
};

const WorkCard: React.FC<WorkCardProps> = ({ svg, title, link, category }) => {

	return (
		<li>
			<LunaScroll animation="bounce-in">
				{svg === 'sun' && <Sun />}
				{svg === 'star' && <Star />}
			</LunaScroll>
			<a className="card" href={link ? link : '#'}>
				<div className="image-container"></div>
				<div className="metadata">
					{title !== '' && <h3 className="heading-5">{title}</h3>}
					{category !== '' && <span className="eyebrow">{category}</span>}
				</div>
				<div className="hover-text heading-5">
					Take a look
					<ArrowRight />
				</div>
			</a>
		</li>
	);
};

export default WorkCard;