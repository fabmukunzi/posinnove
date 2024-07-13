import { Link } from '@nextui-org/link';
import { Snippet } from '@nextui-org/snippet';
import { Code } from '@nextui-org/code';
import { button as buttonStyles } from '@nextui-org/theme';
import { siteConfig } from '@/config/site';
import { title, subtitle } from '@/components/primitives';
import { GithubIcon } from '@/components/icons';
import onboardPic from '@/public/Onboarding.png';
import alxPic from '@/public/alx.png';
import Image from 'next/image';
import { Button } from '@nextui-org/button';
import Offers from '@/components/offers';
import Faq from '@/components/faq';
import Feature from '@/components/feature';
import Getstarted from '@/public/login.png';
import students from '@/public/students.svg';
import org from '@/public/org.svg';
import edu from "@/public/educator.svg"
import ictchamber from "@/public/ictchamber.jpg"

export default function Home() {
  return (
    <section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10 px-0">
      <div className="flex justify-center gap-8">
        <h1 className="text-primary font-bold md:text-4xl text-2xl text-center">
          Work based learning platform
        </h1>
        {/* <Image width={60} src={onboardPic} alt="Onboard" /> */}
      </div>
      <h1 className="md:w-[50%] text-center">
        Engage in hands-on, project-based learning designed to bridge the gap
        between theoretical knowledge and real-world application.
      </h1>
      <div className="flex gap-3 mt-6">
        <Link isExternal href="https://dev.posinnove.com/login">
          <Button className="bg-primary rounded-full px-10 text-white">
            Get started
          </Button>
        </Link>
      </div>

      <div className="mt-8 flex flex-col items-center gap-4 justify-center">
        <h1 className="text-primary font-bold md:text-2xl">We are grateful for the support from:</h1>
        <div className='flex gap-4 my-10 mx-auto'>
        <Image width={120} src={alxPic} className='object-fill !h-20' alt="Alx" />
        <Image width={200} src={ictchamber} className='object-cover !h-20' alt="Ict chamber" />
        </div>
      </div>
      <Offers />
      <Feature />
      <h1 className="text-primary font-bold text-2xl text-center">
        Who is going to benefit and how?
      </h1>
      <h1 className="mb-8 text-center">
        How the Sustainable Urban Garden Design Project Benefits Students and
        Others
      </h1>
      <div className='max-sm:text-center'>
        <div className="flex md:gap-20 items-center justify-center max-sm:flex-col-reverse">
          <Image className="w-72" src={students} alt="Students" />
          <div className="md:-mt-10 md:w-[40%]">
            <h1 className="text-2xl text-primary my-2 font-semibold">
              For students
            </h1>
            <p>
              Learn by doing, gain real-world experience, and showcase your
              skills to potential employers.
            </p>
          </div>
        </div>
        <div className="flex md:gap-20 items-center justify-center max-sm:flex-col">
          <div className="md:-mt-10 md:w-[40%]">
            <h1 className="text-2xl text-primary my-2 font-semibold">
              For Organizations
            </h1>
            <p>
              Find and train top talent, contribute to educational content, and
              hire skilled individuals.
            </p>
          </div>
          <Image className="w-72" src={org} alt="Students" />
        </div>
        <div className="flex md:gap-20 items-center justify-center max-sm:flex-col-reverse">
          <Image className="w-72" src={edu} alt="Students" />
          <div className="md:-mt-10 md:w-[40%]">
            <h1 className="text-2xl text-primary my-2 font-semibold">
              For Educators
            </h1>
            <p>
              Create and moderate projects, guide students, and make a lasting
              impact on their careers.
            </p>
          </div>
        </div>
      </div>
      <h1 className="text-2xl text-primary my-4 font-bold">How It Works</h1>
      <div className="flex max-sm:w-[95%] max-sm:flex-col gap-16 my-4 items-center justify-center">
        <div className="md:w-[25rem] h-60 rounded-md flex justify-center items-center bg-primary/20 p-5">
          <Image
            className="z-20 w-72 h-44 object-cover border-[12px] border-black rounded-md"
            src={Getstarted}
            alt="Get started"
          />
        </div>
        <div className="md:w-[40%] -mt-3">
          <h1 className=" font-normal">
            Step-by-Step Guide:
            <br /> Sign up, choose your project level, start learning, complete
            projects, and access talent market.
          </h1>
          <div className="flex max-sm:justify-center gap-3 mt-6">
            <Link isExternal href="https://dev.posinnove.com/login">
              <Button className="bg-primary rounded-full px-10 text-white">
                Get started
              </Button>
            </Link>
          </div>
        </div>
      </div>
      <Faq />
    </section>
  );
}
