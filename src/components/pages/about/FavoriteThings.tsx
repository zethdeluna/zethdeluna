import ThingsList from "./ThingsList";
import { LunaScroll } from "../../LunaScroll";
import SVG from "../../SVG";

const FavoriteThings = () => {
	return (
		<section className="favorite-things">
			<div className="container grid">

				<h2 className="supermega">
					<LunaScroll animation="bounce-in">
						<SVG name="sun" />
					</LunaScroll>
					<LunaScroll animation="bounce-in">
						<SVG name="plumeria-smiley-mpls" />
					</LunaScroll>
					<span>Favorite Things</span>
				</h2>

				<ThingsList />

			</div>
		</section>
	);
};

export default FavoriteThings;