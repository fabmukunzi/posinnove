import { Button } from "@nextui-org/button";
import NextLink from "next/link";
import React from "react";
import twitter from "../public/TwitterX.png";
import linkedin from "@/public/LinkedIn.png";
import instagram from "@/public/Instagram.png";
import Image from "next/image";

function Footer() {
  return (
    <div className="bg-[#303950] w-full flex flex-col mt-10">
      <div className="flex justify-around mx-[5%] mt-[5%] mb-[2%] text-white">
        <div>
          <h2 className="font-extrabold text-xl pb-4">Learn More</h2>
          <p><NextLink href='/about'> About us</NextLink></p>
          <p><NextLink href='/#whatWeoffer'>What We offer</NextLink></p>
          <p><NextLink href='/#'>Our Blogs</NextLink></p>
          <p><NextLink href='/#'>Our Offerings</NextLink></p>
        </div>
        <div>
          <h2 className="font-extrabold text-xl pb-4">Get in Touch</h2>
          <p>Kigali, Rwanda</p>
          <p>posinnove@gmail.com</p>
        </div>
        <div className="w-[24%]">
          <h2 className="font-extrabold text-xl pb-4">Our Newsletter</h2>
          <p>
            Subscribe to our newsletter to get our news & deals delivered to
            you.
          </p>
          <div className="bg-[#D9D9D9] flex rounded-xl mt-4">
            <input
              type="text"
              placeholder="Email address"
              className="p-2 bg-[#D9D9D9] outline-none rounded-xl rounded-r-none text-[#9E9E9E]"
            />
            <Button className="bg-primary rounded-xl rounded-l-none px-10 text-white">
              Submit
            </Button>
          </div>
        </div>
        <div>
          <h2 className="font-extrabold text-xl pb-4">Learn More</h2>
          <div className="flex">
            <NextLink
              className="flex justify-start items-center gap-1"
              href="/"
            >
              <Image width={40} src={twitter} alt="Twitter" />
            </NextLink>
            <NextLink
              className="flex justify-start items-center gap-1"
              href="/"
            >
              <Image width={40} src={linkedin} alt="Linkedin" />
            </NextLink>
            <NextLink
              className="flex justify-start items-center gap-1"
              href="/"
            >
              <Image width={40} src={instagram} alt="Instagram" />
            </NextLink>
          </div>
        </div>
      </div>
      <div className="w-full flex justify-center">
        <div className="w-[90%] h-[1px] bg-white"></div>
      </div>
      <div className="w-full flex justify-center">
        <p className="text-white pb-[2%] pt-[1%]">© 2024 Posinnove Tech Solution. All rights reserved.</p>
      </div>
    </div>
  );
}

export default Footer;