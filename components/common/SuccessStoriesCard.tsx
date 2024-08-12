import { Image } from "antd";
import React from "react";

interface SuccessStoriesCardProps {
	image: string;
	fullName: string;
	fullTitle: string;
	description: string;
	altText: string;
}

const SuccessStoriesCard = ({
	image,
	fullName,
	fullTitle,
	description,
	altText,
}: SuccessStoriesCardProps) => {
	return (
		<div className="px-5 py-5 _shadow rounded-xl space-y-5 pb-12">
			<div className="flex space-x-5">
				<div>
					<Image preview={false} src={image} alt={altText} />
				</div>
				<div>
					<h1 className="text-primary text-xl font-semibold">{fullName}</h1>
					<h3>{fullTitle}</h3>
				</div>
			</div>
			<div className="text-sm">
				<p className="sm:text-2xl lg:text-base">{description}</p>
			</div>
		</div>
	);
};

export default SuccessStoriesCard;
