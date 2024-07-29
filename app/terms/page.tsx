import React from "react";
import { terms } from "@/utils/tems";

const TermsAndConditions = () => {
	return (
		<>
			<section className=" flex flex-col gap-5 mx-[5%] max-sm:mx-0 2xl:mx-0">
				<h1 className="text-center lg:text-2xl font-bold my-5">
					Posinnove Terms and Conditions
				</h1>
				<div className="flex flex-col gap-2">
					<h2 className="font-bold lg:text-xl">Welcome to Posinnove!</h2>
					<p>
						These Terms and Conditions ("Terms") govern your access to and use
						of the Posinnove platform (the "Platform"), including any websites (
						https://www.posinnove.com/ ), mobile applications, or other online
						services or features offered by Posinnove (collectively, the
						"Services"). By accessing or using the Services, you agree to be
						bound by these Terms.
					</p>
					{terms?.map((term, idx) => (
						<div key={idx}>
							<h2 className="font-bold">
								{idx + 1}. {term.title}
							</h2>
							<p className="m-2">{term.description}</p>
						</div>
					))}
				</div>
			</section>
		</>
	);
};

export default TermsAndConditions;
