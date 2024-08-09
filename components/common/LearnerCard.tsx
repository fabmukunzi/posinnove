import React from "react";

interface LearnerCardProps {
	title: string;
	image: string;
	description: string;
	altText: string;
	separate?: string;
}

const LearnerCard = ({
	title,
	image,
	description,
	altText,
	separate,
}: LearnerCardProps) => {
	return (
		<div
			className={`flex flex-col space-y-6 px-4 ${
				separate ? "bg-[#b0d9ff]" : "bg-[#d3eaff]"
			} items-center rounded-xl pb-5 h-80 lg:h-80 sm:h-96`}
		>
			<div className="w-24 h-24">
				<img
					src={image}
					alt={altText || title}
					className="w-full h-full object-cover"
				/>
			</div>
			<h1 className="text-center text-primary font-semibold text-xl sm:text-3xl lg:text-xl">
				{title}
			</h1>
			<p className="px-2 sm:text-3xl lg:text-lg">{description}</p>
		</div>
	);
};

export default LearnerCard;
