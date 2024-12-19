import { lazy, Suspense } from 'react';

const SVGMap = {
	'arrow-right': () => import('../assets/svgs/arrow-right.svg'),
	'arrow-large-down': () => import('../assets/svgs/arrow-large-down.svg'),
	'brush-stroke': () => import('../assets/svgs/brush-stroke.svg'),
	'deluna': () => import('../assets/svgs/de-luna.svg'),
	'exclamation': () => import('../assets/svgs/exclamation.svg'),
	'moon': () => import('../assets/svgs/moon-and-stars.svg'),
	'plumeria-smiley-dodger': () => import('../assets/svgs/plumeria-smiley-dodger.svg'),
	'plumeria-smiley-heat': () => import('../assets/svgs/plumeria-smiley-heat.svg'),
	'plumeria-smiley-laker': () => import('../assets/svgs/plumeria-smiley-laker.svg'),
	'plumeria-smiley-mpls': () => import('../assets/svgs/plumeria-smiley-mpls.svg'),
	'seven-leaves': () => import('../assets/svgs/seven-leaves.svg'),
	'star': () => import('../assets/svgs/star-smiley.svg'),
	'sun': () => import('../assets/svgs/sun-smiley.svg'),
	'thing-8': () => import('../assets/svgs/thing-8.svg'),
	'thing-basketball': () => import('../assets/svgs/thing-basketball.svg'),
	'thing-coffee': () => import('../assets/svgs/thing-coffee.svg'),
	'thing-ice-cream': () => import('../assets/svgs/thing-ice-cream.svg'),
	'thing-plumeria': () => import('../assets/svgs/thing-plumeria.svg'),
	'thing-sushi': () => import('../assets/svgs/thing-sushi.svg'),
	'thing-wave': () => import('../assets/svgs/thing-wave.svg'),
	'thing-weight-plate': () => import('../assets/svgs/thing-weight-plate.svg'),
	'zeth': () => import('../assets/svgs/zeth.svg')
} as const;

export type SVGName = keyof typeof SVGMap;

interface SVGProps {
	name: SVGName;
}

const SVG: React.FC<SVGProps> = ({ name }) => {
	const LazyComponent = lazy(() =>
		SVGMap[name]().then(module => ({
			default: (module as any).default
		}))
	);

	return (
		<Suspense>
			<LazyComponent />
		</Suspense>
	);
}

export default SVG;