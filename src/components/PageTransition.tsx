import { useEffect, useState } from "react";
import { useNavigation } from "react-router-dom";

const PageTransition = () => {
	const navigation = useNavigation();
	const [isAnimating, setIsAnimating] = useState<boolean>(false);
	const [render, setRender] = useState<boolean>(false);

	useEffect(() => {
		// show transition for bnoth loading and submitting states
		if ( navigation.state !== 'idle' ) {
			setRender(true);
			setIsAnimating(true);

			// scroll to top when navigation starts
			window.scrollTo({
				top: 0,
				behavior: 'smooth'
			});
		} else {
			// keep showing animation for a brief moment after navigatino completes
			setIsAnimating(false);
			const timer = setTimeout(() => {
				setRender(false);
			}, 500);
			return () => clearTimeout(timer);
		}
	}, [navigation.state]);

	if ( !render ) return null;

	return (
		<div className={`page-transition ${isAnimating ? 'active' : ''}`} role="progressbar" aria-busy={isAnimating}>
		</div>
	);
}

export default PageTransition;