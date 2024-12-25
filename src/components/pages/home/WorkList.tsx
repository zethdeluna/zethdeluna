import WorkCard from "./WorkCard";
import expenseCalendarThumbnail from '../../../assets/images/expense-calendar/thumbnail.png';

const CARDS = [
	{
		'title': 'Expense Calendar',
		'url': 'projects/expense-calendar',
		'svg': '',
		'image': expenseCalendarThumbnail
	},
	{
		'title': 'Project 2',
		'url': '/',
		'svg': 'sun',
		'image': ''
	},
	{
		'title': 'Project 3',
		'url': '/',
		'svg': 'star',
		'image': ''
	},
];

const WorkList = () => {
	return (
		<ul className="grid" data-count="odd">
			{
				CARDS.map(card => {

					return (
						<WorkCard
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