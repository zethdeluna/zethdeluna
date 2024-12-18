import { LunaScroll } from "../../../LunaScroll";

interface TwoColumnMediaProps {
	src1: string;
	alt1: string;
	src2: string;
	alt2: string;
	animate?: boolean;
	size?: string;
}

interface ContainerProps {
	className: string;
	animation?: string;
}

const TwoColumnMedia: React.FC<TwoColumnMediaProps> = ({ src1, alt1, src2, alt2, animate = false, size = '' }) => {

	const Container = animate ? LunaScroll : ( 'div' as keyof JSX.IntrinsicElements );
	const props1: ContainerProps = {
		className: 'image-container',
		...(animate && { animation: 'bounce-in' }),
	};
	const props2: ContainerProps = {
		className: 'image-container',
		...(animate && { animation: 'bounce-in' }),
	};

	return (
		<section className={`project-module two-column-media${size && ' ' + size}`}>
			<div className="container grid">

				<Container {...props1}>
					<img src={src1} alt={alt1} />
				</Container>

				<Container {...props2}>
					<img src={src2} alt={alt2} />
				</Container>

			</div>
		</section>
	);
}

export default TwoColumnMedia;