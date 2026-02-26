import WorkCard from "./WorkCard";
import expenseCalendarThumbnail from '../../../assets/images/expense-calendar/thumbnail.png';
import myWebsiteThumbnail from '../../../assets/images/my-website/thumbnail.jpg';
import mathComparatorGameThumbnail from '../../../assets/images/math-comparator-game/thumbnail.jpg';
import cncMachineJobHandlerThumbnail from '../../../assets/images/cnc-machine-job-handler/thumbnail.png';

const CARDS = [
	{
		'title': 'CNC Machine Job Handler',
		'url': 'projects/cnc-machine-job-handler',
		'svg': '',
		'image': cncMachineJobHandlerThumbnail
	},
	{
		'title': 'Math Comparator Game',
		'url': 'projects/math-comparator-game',
		'svg': '',
		'image': mathComparatorGameThumbnail
	},
	{
		'title': 'zethdeluna.com',
		'url': '/projects/my-website',
		'svg': 'sun',
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
		<ul className="grid" data-count="odd">
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