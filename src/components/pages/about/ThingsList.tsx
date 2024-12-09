import ThingItem from "./ThingItem";
import type { SVGName } from '../../SVG';

interface Things {
	title: string;
	thing: string;
	image: SVGName;
}

const ThingsList = () => {

	const things: Things[] = [
		{
			title: 'Food',
			thing: 'Sushi',
			image: 'thing-sushi'
		},
		{
			title: 'Drink',
			thing: 'Coffee',
			image: 'thing-coffee'
		},
		{
			title: 'Treat',
			thing: 'Ice Cream',
			image: 'thing-ice-cream'
		},
		{
			title: 'Hobby',
			thing: 'Strength Training',
			image: 'thing-weight-plate'
		},
		{
			title: 'Sport',
			thing: 'Basketball',
			image: 'thing-basketball'
		},
		{
			title: 'Team',
			thing: 'Lakers',
			image: 'thing-8'
		},
		{
			title: 'Place',
			thing: 'Malibu',
			image: 'thing-wave'
		},
		{
			title: 'Flower',
			thing: 'Plumeria',
			image: 'thing-plumeria'
		},
	];

	return (
		<ul className="things">
			{
				things.map((thing) => (
					<ThingItem key={thing.title} title={thing.title} thing={thing.thing} image={thing.image} />
				))
			}
		</ul>
	);
}

export default ThingsList;