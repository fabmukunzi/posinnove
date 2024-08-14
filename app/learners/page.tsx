"use client";

import ActveLearners from "@/components/ActveLearners";
import ProjectManagement from "@/components/featureForLearners/ProjectManagement";
import ProjectsAndCourses from "@/components/featureForLearners/ProjectsAndCourses";
import VerifiedSkills from "@/components/featureForLearners/VerifiedSkills";
import PosinnoveLearner from "@/components/PosinnoveLearner";
import QuantitiesEmployerSeek from "@/components/QuantitiesEmployerSeek";
import SeeOurPlatform from "@/components/SeeOurPlatform";
import SuccessStories from "@/components/SuccessStories";
import { studentImage } from "@/utils/imageUtils";
import React, { useEffect, useState } from "react";
import { Button } from "@nextui-org/button";
import { Image } from "@nextui-org/react";

const StudentPage: React.FC = () => {
	const [selectedFeature, setSelectedFeature] =
		useState<string>("Projects & courses");
	const [isClient, setIsClient] = useState<boolean>(false);

	const featuredItems = [
		{ label: "Projects & courses", key: "Projects & courses" },
		{ label: "Project management", key: "Project management" },
		{
			label: "Verified skills and portfolio",
			key: "Verified skills and portfolio",
		},
	];

	useEffect(() => {
		setIsClient(true);
		const storedFeature = localStorage.getItem("selectedFeature");
		if (storedFeature) {
			setSelectedFeature(storedFeature);
		}
	}, []);

	const handleMenuClick = (key: string) => {
		setSelectedFeature(key);
		if (isClient) {
			localStorage.setItem("selectedFeature", key);
		}
	};

	return (
		<>
			<div>
				<div className="flex justify-between mt-10">
					<div className="w-1/2 flex flex-col justify-between space-y-3 sm:space-y-10 lg:space-y-3">
						<h3 className="text-primary font-bold text-2xl">
							Posinnove for learners
						</h3>
						<h1 className="text-primary text-base sm:text-lg lg:text-xl font-semibold pt-8 lg:pt-16 ">
							Empowering Your Learning Journey with Real-World Experience
						</h1>
						<p className="text-base sm:text-lg lg:text-base">
							Apply what you have learned in the classroom by completing
							projects for real companies and organizations while gaining
							employable skills and building your professional network.
						</p>
						<div className="">
							<Button className="bg-primary rounded-full hover:!bg-primary/90 hover:!text-white h-10 px-8 text-white">
								Get started
							</Button>
						</div>
					</div>
					<Image
						src={studentImage.src}
						alt="studentImage"
						className="!w-[20rem] h-32 object-cover"
					/>
				</div>
				<div className="lg:py-20 pt-20">
					<ActveLearners />
				</div>
				<div className="mt-20 space-y-12">
					<h1 className="text-primary text-2xl font-semibold text-center">
						Features for learners
					</h1>
					<div className="relative flex flex-col">
						<div className="flex items-center justify-between px-24 shadow-md text-primary bg-white p-4 text-2xl absolute top-0 w-full rounded-3xl _shadow">
							{featuredItems.map((item) => (
								<span
									key={item.key}
									className={`cursor-pointer ${
										selectedFeature === item.key ? "font-extrabold" : ""
									}`}
									onClick={() => handleMenuClick(item.key)}
								>
									{item.label}
								</span>
							))}
						</div>
						<div className="w-full bg-[#f4f6ff] mt-10 rounded-b-3xl _shadow">
							{selectedFeature === "Projects & courses" && (
								<div className="flex flex-col items-center space-y-10 py-10">
									<ProjectsAndCourses />
									<Button className="bg-primary rounded-full hover:!bg-primary/90 hover:!text-white h-10 px-8 text-white">
										Get started
									</Button>
								</div>
							)}
							{selectedFeature === "Project management" && (
								<ProjectManagement />
							)}
							{selectedFeature === "Verified skills and portfolio" && (
								<VerifiedSkills />
							)}
						</div>
					</div>
				</div>
				<PosinnoveLearner />
				<QuantitiesEmployerSeek />
				<SeeOurPlatform />
				<div className="">
					<h1 className="text-center text-2xl text-primary p-10 font-semibold">
						Success Stories from learners
					</h1>
					<div className="flex lg:space-x-10 lg:flex-row flex-col space-y-10 lg:space-y-0">
						<SuccessStories />
						<SuccessStories />
						<SuccessStories />
					</div>
				</div>
			</div>
		</>
	);
};

export default StudentPage;
