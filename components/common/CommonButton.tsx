import React from "react";
import { Button } from "antd";

interface CommonButtonProps {
	title: string;
	link?: string;
	[key: string]: any;
}

const CommonButton: React.FC<CommonButtonProps> = ({
	title,
	link,
	...props
}) => {
	return (
		<button
			className="px-6 py-2 text-white font-semibold text-xl rounded-r-full rounded-l-full bg-primary"
			{...props}
		>
			{title}
		</button>
	);
};

export default CommonButton;
