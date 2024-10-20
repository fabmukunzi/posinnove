import React from "react";
import ActiveLearnersCard from "./common/ActiveLearnersCard";

const ActveLearners = () => {
	const activeLearnerData = [
		{
			number: 200,
			description: "Active learners",
		},
		{ number: 50, description: "Active projects" },
		{ number: 100, description: "Opportunity" },
	];
	return (
		<div className="flex justify-evenly">
			{activeLearnerData.map((learner, idx) => (
				<ActiveLearnersCard
					description={learner.description}
					number={learner.number}
					key={idx}
				/>
			))}
		</div>
	);
};

export default ActveLearners;
