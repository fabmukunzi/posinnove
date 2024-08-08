import React from "react";
import { Button } from "antd";
import { studentImage } from "@/utils/imageUtils";

const StudentPage = () => {
	return (
		<div className="flex space-x-10 mt-10">
			<div className="w-full flex flex-col justify-between">
				<h3>Posinnove for learners</h3>
				<h1 className="text-primary text-3xl font-bold pt-16">
					Empowering Your Learning Journey with Real-World Experience
				</h1>
				<p className="text-xl">
					Apply what you have learned in the classroom by completing projects
					for real companies and organizations while gaining employable skills
					and building your professional network.
				</p>
				<div>
					<Button
						type="primary"
						className="px-6 py-6 text-2xl rounded-r-full rounded-l-full bg-primary"
					>
						Get started
					</Button>
				</div>
			</div>
			<div className="w-full">
				<div className="">
					<img src={studentImage.src} alt="studentImage" />
				</div>
			</div>
		</div>
	);
};

export default StudentPage;
