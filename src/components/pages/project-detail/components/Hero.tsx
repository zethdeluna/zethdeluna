import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

interface LinkData {
	url: string;
	title: string;
	router?: boolean;
}

interface HeroProps {
	title: string | React.ReactNode;
	date?: string;
	link1?: LinkData;
	link2?: LinkData;
}

const Hero: React.FC<HeroProps> = ({ title, date, link1, link2 }) => {
	const [subtitle, setSubtitle] = useState<React.ReactNode[]>([]);

	useEffect(() => {

		const elements: React.ReactNode[] = [];

		if ( date ) {
			elements.push(<span className="date">{date}</span>);
		}

		if ( link1 ) {

			if ( !link1.router ) {
				elements.push(<a href={link1.url} target="_blank">{link1.title}</a>);
			} else {
				elements.push(<Link to={link1.url} target="_blank">{link1.title}</Link>)
			}

		}

		if ( link2 ) {

			if ( !link2.router ) {
				elements.push(<a href={link2.url} target="_blank">{link2.title}</a>);
			} else {
				elements.push(<Link to={link2.url} target="_blank">{link2.title}</Link>)
			}

		}
		
		if ( elements.length > 0 ) {

			setSubtitle(elements);

		}

	}, []);

	return (
		<section className="project-detail-hero">
			<div className="container grid">

				<article>
					<h1 className="mega">{title}</h1>
					{subtitle.length > 0 && <p className="small">{subtitle}</p>}
				</article>

			</div>
		</section>
	);
}

export default Hero;