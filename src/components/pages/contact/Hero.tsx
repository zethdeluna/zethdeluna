import { useEffect, useRef } from 'react';
import SVG from "../../SVG";
import { LunaScroll } from "../../LunaScroll";

const Hero = () => {
	const containerRef = useRef<HTMLElement | null>(null);

	useEffect(() => {
		const container = containerRef.current;
		if ( !container ) return;

		const observer = new MutationObserver(() => {
			// load animation on moon-and-stars svg
			const moon = container.querySelector('.moon-and-stars');
			if ( !moon ) return;

			observer.disconnect();

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
		});

		observer.observe(container, {
			childList: true,
			subtree: true,
		});

		return () => {
			observer.disconnect();
		};

	}, []);

	return (
		<section className="contact" ref={containerRef}>
			<div className="container grid">

				<h1 className="mega">
					<LunaScroll animation="bounce-in"><SVG name="star"/></LunaScroll>
					<LunaScroll animation="bounce-in"><SVG name="star"/></LunaScroll>
					<LunaScroll animation="bounce-in"><SVG name="star"/></LunaScroll>
					<LunaScroll animation="bounce-in"><SVG name="star"/></LunaScroll>
					<span>Contact</span>
				</h1>

				<LunaScroll animation="bounce-in"><SVG name="moon"/></LunaScroll>

				<article>
					<p className="heading-2">
						Want to get in touch?<br/>
						Reach me at<br/>
						<a className="email" href="mailto:hey@zethdeluna.com">hey@zethdeluna.com</a>
					</p>
				</article>

			</div>
		</section>
	);
}

export default Hero;