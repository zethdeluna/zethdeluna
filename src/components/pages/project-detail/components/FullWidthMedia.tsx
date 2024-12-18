import { LunaScroll } from "../../../LunaScroll";

interface FullWidthMediaProps {
	src: string;
	alt: string;
	animate?: boolean;
}

interface ContainerProps {
	className: string;
	animation?: string;
}

const FullWidthMedia: React.FC<FullWidthMediaProps> = ({ src, alt, animate = false }) => {

	const Container = animate ? LunaScroll : ( 'div' as keyof JSX.IntrinsicElements );
	const props: ContainerProps = {
		className: 'image-container',
		...(animate && { animation: 'bounce-in' })
	};

	return (
		<section className="project-module full-width-media">
			<div className="container grid">

				<Container {...props}>
					<img src={src} alt={alt} />
				</Container>
					

			</div>
		</section>
	);
}

export default FullWidthMedia;