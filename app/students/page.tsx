"use client";

import ActveLearners from "@/components/ActveLearners";
import CommonButton from "@/components/common/CommonButton";
import ProjectManagement from "@/components/featureForLearners/ProjectManagement";
import ProjectsAndCourses from "@/components/featureForLearners/ProjectsAndCourses";
import VerifiedSkills from "@/components/featureForLearners/VerifiedSkills";
import PosinnoveLearner from "@/components/PosinnoveLearner";
import QuantitiesEmployerSeek from "@/components/QuantitiesEmployerSeek";
import SeeOurPlatform from "@/components/SeeOurPlatform";
import SuccessStories from "@/components/SuccessStories";
import { studentImage } from "@/utils/imageUtils";
import { Menu } from "antd";
import { MenuInfo } from "rc-menu/lib/interface";
import React, { useEffect, useState } from "react";

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

	const handleMenuClick = (e: MenuInfo) => {
		setSelectedFeature(e.key as string);
		if (isClient && e.key) {
			localStorage.setItem("selectedFeature", e.key as string);
		}
	};

	return (
		<>
			<div>
				<div className="flex flex-col items-center lg:flex-row space-x-10 mt-2 lg:mt-10 space-y-10 lg:space-x-0">
					<div className="w-full flex flex-col justify-between space-y-3 sm:space-y-10 lg:space-y-3">
						<h3 className="text-lg">Posinnove for learners</h3>
						<h1 className="text-primary text-xl sm:text-2xl lg:text-3xl font-bold pt-8 lg:pt-16 ">
							Empowering Your Learning Journey with Real-World Experience
						</h1>
						<p className="text-xl sm:text-2xl lg:text-xl">
							Apply what you have learned in the classroom by completing
							projects for real companies and organizations while gaining
							employable skills and building your professional network.
						</p>
						<div className="">
							<CommonButton title="Get started" />
						</div>
					</div>
					<div className="w-full">
						<div className="w-full">
							<img
								src={studentImage.src}
								alt="studentImage"
								className="w-full object-cover"
							/>
						</div>
					</div>
				</div>
				<div className="lg:py-40 pt-20">
					<ActveLearners />
				</div>
				<div className="mt-20 space-y-12">
					<h1 className="text-primary text-4xl font-bold text-center">
						Features for learners
					</h1>
					<div className="relative flex flex-col">
						<Menu
							className="flex items-center justify-between px-24 rounded-r-full rounded-l-full text-primary bg-white _shadow p-4 text-2xl absolute top-0 w-full "
							mode={"horizontal"}
							items={featuredItems}
							onClick={handleMenuClick}
							selectedKeys={[selectedFeature]}
						/>
						<div className="w-full bg-[#f4f6ff] mt-10 rounded-b-3xl _shadow">
							{selectedFeature === "Projects & courses" && (
								<div className="flex flex-col items-center space-y-10 py-10">
									<ProjectsAndCourses />
									<CommonButton title="Get started" />
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
