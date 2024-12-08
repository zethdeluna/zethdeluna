import { useEffect, useRef } from 'react';
import Zeth from "../../../assets/svgs/zeth.svg?react";
import DeLuna from "../../../assets/svgs/de-luna.svg?react";
import Moon from '../../../assets/svgs/moon-and-stars.svg?react';
import  ArrowLargeDown from '../../../assets/svgs/arrow-large-down.svg?react';

const HomeHero = () => {
	const containerRef = useRef<HTMLElement | null>(null);

	useEffect(() => {
		const container = containerRef.current;
		if ( !container ) return;

		// load animation on moon-and-stars svg
		const moon = container.querySelector('.moon-and-stars');
		if ( !moon ) return;

		const stars = moon.querySelectorAll<SVGGElement>('.star');
		if ( !stars ) return;

		stars.forEach((star) => {
			const currentTransform = star.getAttribute('transform') || '';
			if ( !currentTransform.includes('scale(0)') ) {
				const newTransform = currentTransform ? `${currentTransform} scale(0)` : 'scale(0)';
				star.setAttribute('transform', newTransform);
			}
		});

		let delay = 500;
		stars.forEach((star) => {
			setTimeout(() => {
				const currentTransform = star.getAttribute('transform') || '';
				const scaledTransform = currentTransform.replace('scale(0)', 'scale(1)');
				star.setAttribute('transform', scaledTransform);
			}, delay);

			delay += 250;
		});
	}, []);

	return (
		<section className="hero" ref={containerRef}>
			<div className="container">

				<article>
					<h1 className="accessibility">Home</h1>

					<Zeth />
					<DeLuna />
					<Moon />
					<ArrowLargeDown />
				</article>

			</div>
		</section>
	);
};

export default HomeHero;