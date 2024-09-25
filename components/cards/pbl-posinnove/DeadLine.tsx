import { Button } from "antd";
import Link from "next/link";
import React from "react";

const DeadLine = () => {
	return (
		<div className="mt-14 lg:mt-24">
			<div className="flex flex-col gap-2">
				<h1 className="text-base italic md:text-xl font-semibold">
					Application Deadline: 04/10/2024
				</h1>
				<h1 className="font-semibold text-base lg:text-xl">
					Don’t miss this opportunity to gain experience and position yourself
					for success in the tech world!
				</h1>
				<div className="mt-8 lg:mt-16 flex items-center justify-center">
					<Link href={"https://form.jotform.com/242634760229559"}>
						<Button className="bg-primary rounded-full px-6 md:px-8 md:py-6 py-4 font-bold text-white">
							Apply now
						</Button>
					</Link>
				</div>
			</div>
		</div>
	);
};

export default DeadLine;
