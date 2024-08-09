import LearnerCard from "@/components/common/LearnerCard";
import { crowedIcon } from "@/utils/imageUtils";

type ExperienceDataTypes = {
	image: string;
	title: string;
	description: string;
	altText: string;
};

const Experience = () => {
	const experienceData: ExperienceDataTypes = {
		image: crowedIcon.src,
		title: "Real-World Experience",
		description:
			"Gain hands-on experience by working on actual projects from partnering organizations. Develop practical skills that are directly applicable in the workforce.",
		altText: "Experience",
	};
	return (
		<div>
			<LearnerCard
				image={experienceData.image}
				title={experienceData.title}
				description={experienceData.description}
				altText={experienceData.altText}
			/>
		</div>
	);
};

export default Experience;
