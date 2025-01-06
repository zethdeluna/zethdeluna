import { LunaScroll } from "../../../LunaScroll";

interface FullWidthMediaProps {
	mediaType?: string;
	src: string;
	alt?: string;
	animate?: boolean;
}

interface ContainerProps {
	className: string;
	animation?: string;
}

const FullWidthMedia: React.FC<FullWidthMediaProps> = ({ mediaType = 'image', src, alt = '', animate = false }) => {

	const Container = animate ? LunaScroll : ( 'div' as keyof JSX.IntrinsicElements );
	const props: ContainerProps = {
		className: 'media-container',
		...(animate && { animation: 'bounce-in' })
	};

	return (
		<section className="project-module full-width-media">
			<div className="container grid">

				<Container {...props}>
					{
						mediaType === 'image'
							? <img src={src} alt={alt} />
							: <video autoPlay loop muted><source src={src} type="video/mp4"/>Your browser does not support the video tag.</video>
					}
				</Container>
					

			</div>
		</section>
	);
}

export default FullWidthMedia;