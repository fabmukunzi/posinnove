import React from "react";

interface ActiveLearnersCardProps {
	number: number;
	description: string;
}

const ActiveLearnersCard = ({
	number,
	description,
}: ActiveLearnersCardProps) => {
	return (
		<div className="flex flex-col items-center">
			<span className="text-2xl font-bold text-primary">{number} +</span>
			<span className="text-primary text-lg">{description}</span>
		</div>
	);
};

export default ActiveLearnersCard;
