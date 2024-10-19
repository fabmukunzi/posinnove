import { Button } from "@nextui-org/button";
import NextLink from "next/link";
import React from "react";

const QuantitiesEmployerSeek = () => {
	return (
		<div className="mt-10 flex flex-col items-center space-y-5">
			<h1 className="text-center font-semibold text-2xl text-primary py-10">
				Qualities Employers Seek
			</h1>
			<div className="_shadow flex flex-col lg:px-10 rounded-xl bg-[#f4f6ff] space-y-5 pb-10 w-full">
				<h1 className="p-5 text-xl font-semibold text-primary text-center">
					How Posinnove Can Help
				</h1>
				<ul className=" list-disc space-y-5 sm:text-2xl px-10">
					<li className="text-sm md:text-lg xl:text-xl">
						<b>Critical Thinking: </b>Through real-world projects, students
						develop problem-solving and decision-making skills.
					</li>
					<li className="text-sm md:text-lg xl:text-xl">
						<b>Adaptability: </b>Exposure to various projects and scenarios
						helps students become flexible and resilient.
					</li>
					<li className="text-sm md:text-lg xl:text-xl">
						<b>Computer Literacy: </b>Digital learning modules and tools enhance
						students' proficiency in technology.
					</li>
					<li className="text-sm md:text-lg xl:text-xl">
						<b>Teamwork: </b>Collaborative projects and community interactions
						build teamwork skills.
					</li>
					<li className="text-sm md:text-lg xl:text-xl">
						<b>Communication: </b> Regular feedback, mentorship, and peer
						interactions improve communication abilities.
					</li>
				</ul>
				<div className="flex items-center justify-center pt-10">
					<Button className="bg-primary rounded-full hover:!bg-primary/90 hover:!text-white h-10 px-8 text-white">
						<NextLink href={"https://dev.posinnove.com/"}>Get started</NextLink>
					</Button>
				</div>
			</div>
		</div>
	);
};

export default QuantitiesEmployerSeek;
