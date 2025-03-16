import { useEffect, useRef } from 'react';
import SVG from '../../SVG';

const Hero = () => {
	const containerRef = useRef<HTMLElement | null>(null);

	useEffect(() => {

		const hero = containerRef.current;
		if ( !hero ) return;
		
		const stars = hero.querySelectorAll('.star');
		if ( !stars ) return;

		let delay = 500;
		stars.forEach((star) => {

			setTimeout(() => {
				
				const currentTransform = star.getAttribute('transform');
				if ( currentTransform ) {
					const scaledTransform = currentTransform.replace('scale(0)', 'scale(1)');
					star.setAttribute('transform', scaledTransform);
				}
				

			}, delay);

			delay += 250;

		});

	}, []);

	return (
		<section className="hero" ref={containerRef}>
			<div className="container">

				<article>
					<h1 className="accessibility">Home</h1>

					<SVG name="zeth" />
					<SVG name="deluna" />
					<SVG name="moon" />
					<SVG name="arrow-large-down" />
				</article>

			</div>
		</section>
	);
};

export default Hero;