interface HeroProps {
	title: string | React.ReactNode;
	date?: string;
}

const Hero: React.FC<HeroProps> = ({ title, date }) => {
	return (
		<section className="project-detail-hero">
			<div className="container grid">

				<article>
					<h1 className="mega">{title}</h1>
					{date && <p className="small">{date}</p>}
				</article>

			</div>
		</section>
	);
}

export default Hero;