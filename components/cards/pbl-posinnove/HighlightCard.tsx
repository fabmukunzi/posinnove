import { highlight } from "@/utils/imageUtils";
import { pgHighlight } from "@/utils/pblPosinnoveData";
import React from "react";

const HighlightCard = () => {
	return (
		<div className="mt-14 lg:mt-24">
			<div className="flex flex-col">
				<h1 className="text-lg font-bold md:text-xl lg:text-2xl text-primary text-center">
					Program Highlights
				</h1>
				<div className="flex items-center justify-between mt-4 lg:mt-10 lg:flex-row flex-col">
					<div>
						<div className="flex flex-col gap-2 lg:gap-4">
							{pgHighlight.map((highlight, idx) => (
								<h1 key={idx} className="text-base md:text-lg">
									<b>{highlight.name}</b>: {highlight.duration}
								</h1>
							))}
							<h1 className="font-bold">
								Matched with potential Employers and companies
							</h1>
						</div>
					</div>
					<div>
						<img src={highlight.src} alt="Highlight" />
					</div>
				</div>
			</div>
		</div>
	);
};

export default HighlightCard;
