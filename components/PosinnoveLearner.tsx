import React from "react";
import Experience from "./cards/learner/Experience";
import Guidance from "./cards/learner/Guidance";
import Skills from "./cards/learner/Skills";

const PosinnoveLearner = () => {
	return (
		<div className="flex flex-col mt-10">
			<h1 className="text-center text-primary text-2xl font-semibold py-10">
				Why Posinnove as Learner
			</h1>
			<div className="flex items-center lg:gap-4 gap-16 lg:flex-row flex-col ">
				<Experience />
				<Guidance />
				<Skills />
			</div>
		</div>
	);
};

export default PosinnoveLearner;
