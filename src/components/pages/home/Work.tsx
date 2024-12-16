import { Link } from 'react-router-dom';
import { LunaScroll } from '../../LunaScroll';
import WorkList from './WorkList';
import SVG from '../../SVG';

const Work = () => {
	return (
		<section className="work-module">
			<div className="container">

				<h2 className="mega">
					<LunaScroll animation="bounce-in">
						<SVG name="plumeria-smiley-laker" />
					</LunaScroll>
					<span>Work</span>
					<LunaScroll animation="bounce-in">
						<SVG name="plumeria-smiley-dodger" />
					</LunaScroll>
				</h2>

				<WorkList />

				<Link to="/projects" className="btn arrow-btn heading-2">
					See all projects
					<SVG name="arrow-right" />
				</Link>

			</div>
		</section>
	);
};

export default Work;