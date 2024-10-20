import { Button } from "@nextui-org/button";
import NextLink from "next/link";
import React from "react";
import twitter from "../public/TwitterX.png";
import linkedin from "@/public/LinkedIn.png";
import instagram from "@/public/Instagram.png";
import Image from "next/image";
import { Input } from "@nextui-org/input";
import { Instagram, Link, Linkedin, Twitter, X } from "lucide-react";

function Footer() {
	return (
		<div className="bg-[#303950] w-full flex flex-col mt-10">
			<div className="flex justify-around mx-[5%] mt-[5%] mb-[2%] text-white max-sm:flex-wrap max-sm:gap-5">
				<div className="max-sm:w-[1/2]">
					<h2 className="font-semibold text-xl pb-4">Learn More</h2>
					<p>
						<NextLink href="/about"> About us</NextLink>
					</p>
					<p>
						<NextLink href="/#whatWeoffer">What We offer</NextLink>
					</p>
					<p>
						<NextLink href="/#">Our Blogs</NextLink>
					</p>
					<p>
						<NextLink href="/#">Our Offerings</NextLink>
					</p>
				</div>
				<div className="max-sm:w-[1/2]">
					<h2 className="font-semibold text-xl pb-4">Get in Touch</h2>
					<p>KN 78 St, Kigali</p>
					<p>Norrsken House Kigali</p>
					<p>posinnove@gmail.com</p>
				</div>
				<div className="max-sm:w-[1/2] flex flex-col">
					<h2 className="font-semibold text-xl pb-4">Policy and Terms</h2>
					<ul>
						<li className="hover:underline">
							<NextLink href="/terms">Terms and Conditions</NextLink>
						</li>
						<li className="hover:underline">
							<NextLink href="/terms/privacy">Privacy and Policy</NextLink>
						</li>
					</ul>
				</div>
				<div className="w-[24%] max-sm:w-full max-sm:mt-10">
					<h2 className="font-semibold text-xl pb-4">Our Newsletter</h2>
					<p>
						Subscribe to our newsletter to get our news & deals delivered to
						you.
					</p>
					<div className="flex mt-4 w-[100%]">
						<Input
							type="email"
							placeholder="Email address"
							radius="none"
							className="text-[#9E9E9E] w-full"
						/>
						<Button
							radius="none"
							className="bg-primary px-4 -mr-[0.8rem] rounded-none text-white max-sm:px-10"
						>
							Submit
						</Button>
					</div>
				</div>
				<div>
					<h2 className="font-semibold text-xl pb-4 max-sm:hidden">
						Social Links
					</h2>
					<div className="flex gap-4 max-sm:py-4">
						<NextLink
							className="flex justify-start items-center gap-1"
							target="_blank"
							href="https://x.com/posinnove"
						>
							<Twitter className="hover:text-gray-300 hover:scale-110 duration-500" />
						</NextLink>
						<NextLink
							className="flex justify-start items-center gap-1"
							href="https://www.linkedin.com/company/posinnove-tech/"
						>
							<Linkedin className="hover:text-gray-300 hover:scale-110 duration-500" />
						</NextLink>
						<NextLink
							className="flex justify-start items-center gap-1"
							href="https://www.instagram.com/posinnove/"
						>
							<Instagram className="hover:text-gray-300 hover:scale-110 duration-500" />
						</NextLink>
					</div>
				</div>
			</div>
			<div className="w-full flex justify-center">
				<div className="w-[90%] h-[1px] bg-white"></div>
			</div>
			<div className="w-full flex justify-center">
				<p className="text-white pb-[2%] pt-[1%]">
					© 2024 Posinnove Tech Solution
				</p>
			</div>
		</div>
	);
}

export default Footer;
