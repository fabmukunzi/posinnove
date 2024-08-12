import React from "react";
import CommonButton from "./common/CommonButton";

const QuantitiesEmployerSeek = () => {
	return (
		<div className="mt-10 flex flex-col items-center space-y-5">
			<h1 className="text-center font-semibold text-2xl text-primary py-10">
				Qualities Employers Seek
			</h1>
			<div className="_shadow flex flex-col px-10 rounded-xl bg-[#f4f6ff] space-y-5 pb-10">
				<h1 className="p-5 text-xl font-semibold text-primary text-center">
					How Posinnove Can Help
				</h1>
				<ul className=" list-disc space-y-5 sm:text-2xl px-10">
					<li>
						<b>Critical Thinking:</b>Through real-world projects, students
						develop problem-solving and decision-making skills.
					</li>
					<li>
						<b>Adaptability:</b>Exposure to various projects and scenarios helps
						students become flexible and resilient.
					</li>
					<li>
						<b>Computer Literacy:</b>Digital learning modules and tools enhance
						students' proficiency in technology.
					</li>
					<li>
						<b>Teamwork:</b>Collaborative projects and community interactions
						build teamwork skills.
					</li>
					<li>
						<b>Communication:</b> Regular feedback, mentorship, and peer
						interactions improve communication abilities.
					</li>
				</ul>
				<div className="flex items-center justify-center pt-10">
					<CommonButton title="Get started" />
				</div>
			</div>
		</div>
	);
};

export default QuantitiesEmployerSeek;
