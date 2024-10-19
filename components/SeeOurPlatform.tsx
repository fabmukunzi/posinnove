import React from "react";
import { IoLogoYoutube } from "react-icons/io";

const SeeOurPlatform = () => {
	return (
		<div className="mt-10">
			<h1 className="text-center text-primary text-2xl p-10">
				See our platform in action, watch our demo video!
			</h1>
			<div className="w-full h-[35rem] flex items-center justify-center text-[8rem] text-red-500 bg-[#d3eaff] rounded-xl _shadow ">
				<IoLogoYoutube className="cursor-pointer" />
			</div>
		</div>
	);
};

export default SeeOurPlatform;
