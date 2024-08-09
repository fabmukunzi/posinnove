import LearnerCard from "@/components/common/LearnerCard";
import { MachineLearningIcon } from "@/utils/imageUtils";

type GuidanceDataTypes = {
	image: string;
	title: string;
	description: string;
	altText: string;
	separate: string;
};

const Guidance = () => {
	const guidanceData: GuidanceDataTypes = {
		image: MachineLearningIcon.src,
		title: "Mentorship and Guidance",
		description:
			"Receive guidance from experienced educators and industry mentors. Get personalized feedback to improve your skills and knowledge.",
		altText: "mentor_guidance",
		separate: "colore",
	};
	return (
		<div>
			<LearnerCard
				image={guidanceData.image}
				title={guidanceData.title}
				description={guidanceData.description}
				altText={guidanceData.altText}
				separate={guidanceData.separate}
			/>
		</div>
	);
};

export default Guidance;
