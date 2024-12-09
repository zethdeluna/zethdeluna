import { useState } from "react";
import SVG from "../../SVG";
import type { SVGName } from "../../SVG";

interface ThingItemProps {
	title?: string;
	thing?: string;
	image?: SVGName;
};

const ThingItem: React.FC<ThingItemProps> = ({ title, thing, image }) => {

	const [isActive, setIsActive] = useState<boolean>(false);

	const clickHandler = () => {
		setIsActive(!isActive);
	};

	return (
		<li className={isActive ? 'active' : ''}>
			<button onClick={clickHandler}>
				<span className="thing supermega">{title}</span>
				<span className="my-fav heading-1">
					{thing}
					{image && <SVG name={image} />}
				</span>
			</button>
		</li>
	);
}

export default ThingItem;