import { Link } from '@nextui-org/link';
import alxPic from '@/public/alx.png';
import Image from 'next/image';
import { Button } from '@nextui-org/button';
import Offers from '@/components/offers';
import Faq from '@/components/faq';
import Feature from '@/components/feature';
import Getstarted from '@/public/login.png';
import students from '@/public/students.svg';
import org from '@/public/org.svg';
import edu from '@/public/educator.svg';
import ictchamber from '@/public/ictchamber.jpg';
import sandtech from '@/public/sandtech.jpg'
import Hero from '@/components/heroSection/hero';

export default function Home() {
  return (
    <section className="flex flex-col items-center justify-center gap-4 px-0 py-8 md:py-10">
      <Hero />
      <div className="flex flex-col items-center justify-center gap-4 mt-8">
        <h1 className="font-bold text-primary md:text-2xl">
          We are grateful for the support from:
        </h1>
        <div className="flex mx-auto my-10 gap-7">
          <Image
            width={120}
            src={sandtech}
            className="object-cover !h-20"
            alt="Sandtech"
          />
          <Image
            width={120}
            src={alxPic}
            className="object-fill !h-20"
            alt="Alx"
          />
          <Image
            width={200}
            src={ictchamber}
            className="object-cover !h-20"
            alt="Ict chamber"
          />
        </div>
      </div>
      <Offers />
      <Feature />
      <h1 className="text-2xl font-bold text-center text-primary">
        Who is going to benefit and how?
      </h1>
      <h1 className="mb-8 text-center">
        How the Sustainable Urban Garden Design Project Benefits Students and
        Others
      </h1>
      <div className="max-sm:text-center">
        <div className="flex items-center justify-center md:gap-20 max-sm:flex-col-reverse">
          <Image className="w-72" src={students} alt="Students" />
          <div className="md:-mt-10 md:w-[40%]">
            <h1 className="my-2 text-2xl font-semibold text-primary">
              For students
            </h1>
            <p>
              Learn by doing, gain real-world experience, and showcase your
              skills to potential employers.
            </p>
          </div>
        </div>
        <div className="flex items-center justify-center md:gap-20 max-sm:flex-col">
          <div className="md:-mt-10 md:w-[40%]">
            <h1 className="my-2 text-2xl font-semibold text-primary">
              For Organizations
            </h1>
            <p>
              Find and train top talent, contribute to educational content, and
              hire skilled individuals.
            </p>
          </div>
          <Image className="w-72" src={org} alt="Students" />
        </div>
        <div className="flex items-center justify-center md:gap-20 max-sm:flex-col-reverse">
          <Image className="w-72" src={edu} alt="Students" />
          <div className="md:-mt-10 md:w-[40%]">
            <h1 className="my-2 text-2xl font-semibold text-primary">
              For Educators
            </h1>
            <p>
              Create and moderate projects, guide students, and make a lasting
              impact on their careers.
            </p>
          </div>
        </div>
      </div>
      <h1 className="my-4 text-2xl font-bold text-primary">How It Works</h1>
      <div className="flex max-sm:w-[95%] max-sm:flex-col gap-16 my-4 items-center justify-center">
        <div className="md:w-[25rem] h-60 rounded-md flex justify-center items-center bg-primary/20 p-5">
          <Image
            className="z-20 w-72 h-44 object-cover border-[12px] border-black rounded-md"
            src={Getstarted}
            alt="Get started"
          />
        </div>
        <div className="md:w-[40%] -mt-3">
          <h1 className="font-normal ">
            Step-by-Step Guide:
            <br /> Sign up, choose your project level, start learning, complete
            projects, and access talent market.
          </h1>
          <div className="flex gap-3 mt-6 max-sm:justify-center">
            <Link isExternal href="https://dev.posinnove.com/login">
              <Button size='lg' className="px-10 text-white bg-primary">
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
