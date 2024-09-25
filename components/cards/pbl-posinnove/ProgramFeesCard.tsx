import { Button } from "antd";
import React from "react";

const ProgramFeesCard = () => {
	return (
		<div className="mt-14 lg:mt-24 border-2 rounded-md p-6 lg:p-16">
			<div>
				<h1 className="text-xl font-bold lg:text-4xl text-primary text-center">
					Program Fees and Payment Options
				</h1>
				<div className="flex flex-col gap-4 lg:gap-10 mt-4 lg:mt-10">
					<h1 className="text-primary text-xl lg:text-4xl font-semibold">
						Admin Fee: $30
					</h1>
					<p className="text-base md:text-xl font-semibold">
						The PBL Program fee is $30 for the entire 3-month program. To make
						it accessible, learners are allowed to pay in installments. However,
						please note that learners must complete the full payment for the
						first month to continue to the second month. Failure to do so will
						result in discontinuation from the program.
					</p>
				</div>
				<div className="mt-8 lg:mt-16 flex items-center justify-center">
					<Button className="bg-primary rounded-full px-6 md:px-8 md:py-6 py-4 font-bold text-white">
						Apply now
					</Button>
				</div>
			</div>
		</div>
	);
};

export default ProgramFeesCard;
