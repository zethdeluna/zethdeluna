import { useEffect, useRef, useState } from 'react';

/**
 * Luna Scroll Logic
 */
export const useLunaScroll = () => {
	const ref = useRef<HTMLDivElement | null>(null);
	const [isInViewport, setIsInViewport] = useState<boolean>(false);

	const checkIsInViewport = () => {
		const element = ref.current;
		if ( !element ) return;

		const rect = element.getBoundingClientRect();
		const elementTop = rect.top + window.scrollY;
		const elementBottom = elementTop + element.offsetHeight;
		const viewportTop = window.scrollY;
		const viewportBottom = viewportTop + window.innerHeight;

		setIsInViewport( elementBottom > viewportTop && elementTop < viewportBottom );
	};

	useEffect(() => {
		// initial check
		checkIsInViewport();

		// add event listeners for scroll and resize
		window.addEventListener('scroll', () => checkIsInViewport());
		window.addEventListener('resize', () => checkIsInViewport());

		// cleanup
		return () => {
			window.addEventListener('scroll', () => checkIsInViewport());
			window.addEventListener('resize', () => checkIsInViewport());
		}

	}, []);

	return { ref, isInViewport } as const;
};

interface LunaScrollProps {
	children: React.ReactNode;
	animation?: string;
};

export const LunaScroll: React.FC<LunaScrollProps> = ({ children, animation = '' })  => {
	const { ref, isInViewport } = useLunaScroll();

	return (
		<div
			ref={ref}
			className={`${isInViewport ? 'animate' : ''}`}
			data-luna-scroll={animation}
		>
			{children}
		</div>
	);
}