import React from "react";
import SuccessStoriesCard from "./common/SuccessStoriesCard";
import { successProfile } from "@/utils/imageUtils";

type SuccessProfileTypes = {
	image: string;
	fullName: string;
	fullTitle: string;
	description: string;
	altText: string;
};

const SuccessStories = () => {
	const successProfileData: SuccessProfileTypes = {
		image: successProfile.src,
		fullName: "Full Name",
		fullTitle: "Full Title",
		description:
			"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
		altText: "alt_text",
	};
	return (
		<div>
			<SuccessStoriesCard
				image={successProfileData.image}
				fullName={successProfileData.fullName}
				fullTitle={successProfileData.fullTitle}
				description={successProfileData.description}
				altText={successProfileData.altText}
			/>
		</div>
	);
};

export default SuccessStories;
