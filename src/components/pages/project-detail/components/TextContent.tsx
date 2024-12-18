import { LunaScroll } from "../../../LunaScroll";

interface TextContentProps {
	title?: string;
	children: React.ReactNode;
	animate?: boolean;
}

const TextContent: React.FC<TextContentProps> = ({ title, children, animate = true }) => {

	const Container = animate ? LunaScroll : 'article' as any;
	const props = animate ? { tag: 'article', animation: 'bounce-in' } : {};

	return (
		<section className="project-module text-content">
			<div className="container grid">

				<Container {...props}>
					{ title && <h2 className="heading-1">{title}</h2> }
					{children}
				</Container>

			</div>
		</section>
	);
}

export default TextContent;