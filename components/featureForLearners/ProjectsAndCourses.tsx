import { projectCourcesImage } from "@/utils/imageUtils";
import { Button } from "antd";
import React from "react";
import CommonButton from "../common/CommonButton";

const ProjectsAndCourses = () => {
	return (
		<>
			<div className="flex flex-col items-center">
				<div className="lg:mt-16 flex px-10 lg:flex-row flex-col">
					<div className="lg:w-4/5 h-[40vh]">
						<img
							src={projectCourcesImage.src}
							alt="Project_course_image"
							className="w-full h-full object-contain"
						/>
					</div>
					<div className="w-full">
						<ul className=" list-disc mx-10 text-xl mt-5 space-y-10">
							<li>
								your professors and instructors connect directly with companies
								and organizations to curate projects based on real needs for you
								to work on.
							</li>
							<li>
								Those projects become a part of your class curriculum, allowing
								you to immediately apply what you’re learning to real work
								scenarios, build more skills, expose yourself to employment
								opportunities, and earn academic credit—all at the same time.
							</li>
						</ul>
					</div>
				</div>
			</div>
		</>
	);
};

export default ProjectsAndCourses;
