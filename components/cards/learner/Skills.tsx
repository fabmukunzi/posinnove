import React from "react";
import { ComboChartIcon } from "@/utils/imageUtils";
import LearnerCard from "@/components/common/LearnerCard";

type GuidanceDataTypes = {
	image: string;
	title: string;
	description: string;
	altText: string;
};

const Skills = () => {
	const skillsData: GuidanceDataTypes = {
		image: ComboChartIcon.src,
		title: "Cultivate employable skills",
		description:
			"Gain the skills and experiences needed to find a job after graduation. We believe that no student should be left behind.",
		altText: "Employable skills",
	};
	return (
		<div>
			<LearnerCard
				image={skillsData.image}
				title={skillsData.title}
				description={skillsData.description}
				altText={skillsData.altText}
			/>
		</div>
	);
};

export default Skills;
