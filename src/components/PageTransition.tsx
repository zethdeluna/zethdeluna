import { useEffect, useState } from "react";
import { useNavigation } from "react-router-dom";

const PageTransition = () => {
	const navigation = useNavigation();
	const [isAnimating, setIsAnimating] = useState<boolean>(false);

	useEffect(() => {
		if ( navigation.state === 'loading' ) {
			setIsAnimating(true);

			// scroll to top when navigation starts
			window.scrollTo({
				top: 0
			});
		} else {
			// keep showing animation for a brief moment after navigatino completes
			setIsAnimating(false);
		}
	}, [navigation.state]);

	if ( !isAnimating ) return null;

	return (
		<div className="page-transition">
			<h1>Loading</h1>
		</div>
	);
}

export default PageTransition;