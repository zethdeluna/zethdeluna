import { lazy, Suspense } from 'react';

const SVGMap = {
	'arrow-right': () => import('../assets/svgs/arrow-right.svg?react'),
	'arrow-large-down': () => import('../assets/svgs/arrow-large-down.svg?react'),
	'brush-stroke': () => import('../assets/svgs/brush-stroke.svg?react'),
	'deluna': () => import('../assets/svgs/de-luna.svg?react'),
	'exclamation': () => import('../assets/svgs/exclamation.svg?react'),
	'moon': () => import('../assets/svgs/moon-and-stars.svg?react'),
	'plumeria-smiley-dodger': () => import('../assets/svgs/plumeria-smiley-dodger.svg?react'),
	'plumeria-smiley-heat': () => import('../assets/svgs/plumeria-smiley-heat.svg?react'),
	'plumeria-smiley-laker': () => import('../assets/svgs/plumeria-smiley-laker.svg?react'),
	'plumeria-smiley-mpls': () => import('../assets/svgs/plumeria-smiley-mpls.svg?react'),
	'seven-leaves': () => import('../assets/svgs/seven-leaves.svg?react'),
	'star': () => import('../assets/svgs/star-smiley.svg?react'),
	'sun': () => import('../assets/svgs/sun-smiley.svg?react'),
	'thing-8': () => import('../assets/svgs/thing-8.svg?react'),
	'thing-basketball': () => import('../assets/svgs/thing-basketball.svg?react'),
	'thing-coffee': () => import('../assets/svgs/thing-coffee.svg?react'),
	'thing-ice-cream': () => import('../assets/svgs/thing-ice-cream.svg?react'),
	'thing-plumeria': () => import('../assets/svgs/thing-plumeria.svg?react'),
	'thing-sushi': () => import('../assets/svgs/thing-sushi.svg?react'),
	'thing-wave': () => import('../assets/svgs/thing-wave.svg?react'),
	'thing-weight-plate': () => import('../assets/svgs/thing-weight-plate.svg?react'),
	'zeth': () => import('../assets/svgs/zeth.svg?react')
} as const;

export type SVGName = keyof typeof SVGMap;

interface SVGProps {
	name: SVGName;
}

const SVG: React.FC<SVGProps> = ({ name }) => {
	const LazyComponent = lazy( SVGMap[name] );

	return (
		<Suspense>
			<LazyComponent />
		</Suspense>
	);
}

export default SVG;