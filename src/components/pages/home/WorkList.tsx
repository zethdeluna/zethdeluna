import WorkCard from "./WorkCard";

const WorkList = () => {
	return (
		<ul className="grid">
			<WorkCard
				svg=""
				title="Project 1"
				link=""
				category="Category"
			/>
			<WorkCard
				svg="sun"
				title="Project 2"
				link=""
				category="Category"
			/>
			<WorkCard
				svg="star"
				title="Project 3"
				link=""
				category="Category"
			/>
		</ul>
	);
};

export default WorkList;