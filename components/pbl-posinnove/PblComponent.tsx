import { pbl } from "@/utils/imageUtils";
import { Button } from "antd";
import React from "react";
import AboutPblCard from "../cards/pbl-posinnove/AboutPblCard";
import HighlightCard from "../cards/pbl-posinnove/HighlightCard";
import Eligibility from "../cards/pbl-posinnove/EligibilityCard";
import ProgramFeesCard from "../cards/pbl-posinnove/ProgramFeesCard";
import DeadLine from "../cards/pbl-posinnove/DeadLine";

const PblComponent = () => {
	return (
		<div className="relative">
			<div className="flex flex-col gap-5 lg:flex-row items-center justify-between">
				<div className="mt-6">
					<h1 className="md:text-lg">Posinnove for Organizations</h1>
					<div className="w-full lg:w-3/5 flex flex-col">
						<div className="mt-6 lg:mt-14 flex flex-col gap-4 lg:gap-10">
							<h1 className="font-bold md:text-2xl lg:text-4xl text-primary">
								PBL Program - Become Job-Ready with Real-World Projects
							</h1>
							<p className="text-base md:text-lg">
								Posinnove is thrilled to announce the launch of our{" "}
								<b>
									PBL (Project-Based Learning) Program for Frontend and Backend
									Development!
								</b>
							</p>
							<div className="mt-5 flex items-center ">
								<Button className="bg-primary rounded-full px-6 md:px-8 md:py-6 py-4 font-bold text-white">
									Apply now
								</Button>
							</div>
						</div>
					</div>
				</div>
				<div className="lg:absolute lg:-right-20 xl:-right-32 2xl:-right-56 top-1 lg:h-[40vh] xl:h-[60vh] rounded-lg overflow-hidden md:rounded-none">
					<img
						src={pbl.src}
						alt="pbl_images"
						className="h-full object-cover "
					/>
				</div>
			</div>

			<AboutPblCard />
			<HighlightCard />
			<Eligibility />
			<ProgramFeesCard />
			<DeadLine />
		</div>
	);
};

export default PblComponent;
