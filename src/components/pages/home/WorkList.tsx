import WorkCard from "./WorkCard";
import expenseCalendarThumbnail from '../../../assets/images/expense-calendar/thumbnail.png';
import myWebsiteThumbnail from '../../../assets/images/my-website/thumbnail.jpg';
import mathComparatorGameThumbnail from '../../../assets/images/math-comparator-game/thumbnail.jpg';
import tlescopeThumbnail from '../../../assets/images/tlescope/thumbnail.png';

const CARDS = [
	{
		'title': 'TLEscope Satellite Tracker',
		'url': 'projects/tlescope',
		'svg': '',
		'image': tlescopeThumbnail
	},
	{
		'title': 'Math Comparator Game',
		'url': 'projects/math-comparator-game',
		'svg': 'sun',
		'image': mathComparatorGameThumbnail
	},
	{
		'title': 'zethdeluna.com',
		'url': '/projects/my-website',
		'svg': 'star',
		'image': myWebsiteThumbnail
	},
	{
		'title': 'Expense Calendar',
		'url': 'projects/expense-calendar',
		'svg': 'star',
		'image': expenseCalendarThumbnail
	},
];

const WorkList = () => {
	return (
		<ul className="grid" data-count="even">
			{
				CARDS.map(card => {

					return (
						<WorkCard
							key={card.title}
							title={card.title}
							url={card.url}
							svg={card.svg}
							image={card.image}
						/>
					);

				})
			}
		</ul>
	);
};

export default WorkList;