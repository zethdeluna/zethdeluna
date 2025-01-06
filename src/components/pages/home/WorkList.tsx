import WorkCard from "./WorkCard";
import expenseCalendarThumbnail from '../../../assets/images/expense-calendar/thumbnail.png';
import myWebsiteThumbnail from '../../../assets/images/my-website/thumbnail.jpg';

const CARDS = [
	{
		'title': 'Expense Calendar',
		'url': 'projects/expense-calendar',
		'svg': '',
		'image': expenseCalendarThumbnail
	},
	{
		'title': 'zethdeluna.com',
		'url': '/projects/my-website',
		'svg': 'sun',
		'image': myWebsiteThumbnail
	},
];

const WorkList = () => {
	return (
		<ul className="grid" data-count="even">
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