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

export default function Home() {
  return (
    <section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10 px-0">
      <div className="flex justify-center gap-8">
        <h1 className="text-primary font-bold text-4xl">
          Revolutionize Education
        </h1>
        <Image width={60} src={onboardPic} alt="Onboard" />
      </div>
      <h1>
        Transform Education with Practical Learning and Collaboration through
        Posinnove
      </h1>
      <div className="flex gap-3">
        <Link isExternal href="https://dev.posinnove.com/login">
          <Button className="bg-primary rounded-full px-10 text-white">
            Get started
          </Button>
        </Link>
      </div>

      <div className="mt-8 flex flex-col items-center gap-4 justify-center">
        <h1 className="text-primary font-bold text-2xl">Backed by</h1>
		<Image width={60} src={alxPic} alt="Alx" />
      </div>
	  <Offers />
    <Feature />
	  <Faq />
    </section>
  );
}
