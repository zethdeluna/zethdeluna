import WorkCard from "./WorkCard";

const WorkList = () => {
	return (
		<ul className="grid" data-count="odd">
			<WorkCard
				svg=""
				title="Project 1"
				link=""
			/>
			<WorkCard
				svg="sun"
				title="Project 2"
				link=""
			/>
			<WorkCard
				svg="star"
				title="Project 3"
				link=""
			/>
		</ul>
	);
};

export default WorkList;