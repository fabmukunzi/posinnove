import Image from 'next/image';
import Image1 from '@/public/image 6.png';
import Image2 from '@/public/image 4.png';
import { valuesArray } from '@/utils/offers';
import { Card, CardBody, CardFooter, CardHeader } from '@nextui-org/react';
import { Button, User } from '@nextui-org/react';
import home1 from '@/public/home.png';
import collab from '@/public/collab.svg';
import accountability from '@/public/account.svg';
import team from '@/public/Onboarding.png';
import mugisha from '@/public/mugisha.jpg';
import bonheur from '@/public/Bonheur.jpg';
import fab from '@/public/fab.png';
import jeanette from '@/public/jeannette.png';
import paradis from '@/public/paradis.jpg';
import agape from '@/public/agape.png';
import { Linkedin } from 'lucide-react';
import Link from 'next/link';
export default function AboutPage() {
  const coreValues = [
    {
      title: 'Ownership',
      description:
        'Ownership is a core value of our team, driving accountability, commitment, and a sense of responsibility for our collective goals and outcomes.',

      image: home1,
    },
    {
      title: 'Teamwork',
      description:
        'Teamwork is a core value of our team, fostering collaboration, synergy, and mutual support to achieve our shared objectives effectively.',
      image: team,
    },
    {
      title: 'Accountability',
      description:
        'Accountability is a core value of our team, emphasizing individual responsibility, transparency, and integrity in delivering on our commitments and meeting expectations.',
      image: accountability,
    },
    {
      title: 'Collaboration',
      description:
        'Collaboration is a core value of our team, promoting communication, cooperation, and collective problem-solving to achieve shared goals and foster innovation.',
      image: collab,
    },
  ];

  const teamMembers = [
    {
      names: 'Bonheur Iraguha',
      role: 'CEO',
      image: bonheur,
      linkedin: 'https://www.linkedin.com/in/bonheur-iraguha-150894256/',
    },
    {
      names: 'Fabrice Mukunzi',
      role: 'CTO',
      image: "https://res.cloudinary.com/dagurahkl/image/upload/v1698509499/xpu6s3rcfvdnvjrvnr61.png",
      linkedin: 'https://www.linkedin.com/in/mukunzi-fabrice/',
    },
    {
      names: 'Jeannette Uwanyirigira',
      role: 'Marketing Manager',
      image: jeanette,
      linkedin: 'https://www.linkedin.com/in/jeannette-uwanyirigira-208319285/',
    },
    {
      names: 'Agape Mugisha',
      role: 'Analytics Lead',
      image: agape,
      linkedin: 'https://www.linkedin.com/in/agape-mugisha-b3a901253/',
    },
    {
      names: 'Paradis Ishimwe',
      role: 'Software Developer',
      image: paradis,
      linkedin: 'https://www.linkedin.com/in/ishimwe-ami-paradis-14b34026a/',
    },
    {
      names: 'Joseph Mugisha',
      role: 'Software Developer',
      image: mugisha,
      linkedin: 'https://www.linkedin.com/in/mugisha-joseph-23087a261/',
    },
  ];
  return (
    <div className="mt-20">
      <div className="flex justify-between max-sm:flex-col-reverse gap-20 max-sm:gap-10 w-full">
        <div className="w-1/2 max-sm:w-full">
          <h1 className="text-primary font-semibold text-3xl">
            Experience the Future of Education with Posinnove
          </h1>
          <p>
            conveys the forward-thinking nature of Posinnove&apos;s solution,
            emphasizing its interactive and innovative approach to education.
            Through this platform, users are offered a glimpse into a future
            where technology enhances learning outcomes, fosters engagement, and
            prepares learners for success in a rapidly evolving digital world.
          </p>
        </div>
        <div className="w-1/2 max-sm:w-full">
          <Image
            className=" object-cover"
            src={Image1}
            alt="Image"
            width={350}
            height={100}
          />
        </div>
      </div>
      <div className="grid grid-cols-3 gap-6 my-10 max-sm:flex max-sm:flex-col">
        {valuesArray.map((offer, i) => (
          <Card key={i} className="w-[80%] max-sm:w-full">
            {/* <CardHeader className="flex justify-center">
              <Users size={80} color="#002278" fill="#002278" />
            </CardHeader> */}
            <CardBody>
              <h1 className="text-primary text-center font-semibold text-xl">
                {offer.title}
              </h1>
              {offer.description}
            </CardBody>
          </Card>
        ))}
      </div>
      <div className="flex justify-center items-center max-sm:flex-col gap-32 w-full my-10 max-sm:gap-10">
        <Image className="" src={Image2} alt="Image" width={300} height={200} />
        <div className="w-1/2 max-sm:w-full">
          <h1 className="text-primary font-semibold text-3xl">Our Story</h1>
          <p>
            In Kigali, Rwanda, Bonheur, a driven student, observed the disparity
            between classroom teachings and practical skills needed for success.
            Motivated by this gap, he envisioned Posinnove, an online platform
            to bridge theory with practice in education. With determination and
            a dedicated team, they overcame challenges to create Posinnove,
            empowering Rwandan students with hands-on learning experiences.
            <br />
            Despite hurdles, Posinnove&apos;s launch captivated the education
            sector, inspiring learners and educators alike. Today, Posinnove
            continues to revolutionize education, embodying the power of
            student-led innovation in Rwanda and beyond.
          </p>
        </div>
      </div>
      <div className="mx-20 max-sm:mx-0">
        <p className="text-primary font-semibold text-3xl my-20 max-sm:text-center max-sm:my-0">
          Our Core Values
        </p>
        {coreValues.map((value, i) => (
          <div
            key={i}
            className="flex my-8 gap-5 items-center border border-[#B6B6B6] p-2 w-[100%] rounded-lg"
          >
            <Image className="w-14 mx-2" src={value.image} alt="logo" />
            <div>
              <h1 className="text-primary text-2xl font-semibold">
                {value.title}
              </h1>
              <p>{value.description}</p>
            </div>
          </div>
        ))}
      </div>
      <p className="text-primary text-center my-8 text-2xl font-semibold">
        Leadership Team
      </p>
      <div className="mx-44 grid grid-cols-3 gap-4 max-sm:mx-0 max-lg:mx-32 max-sm:justify-center max-sm:grid-cols-1 max-lg:grid-cols-2">
        {teamMembers.map((member, i) => (
          <Card
            key={i}
            isFooterBlurred
            radius="lg"
            className="border-none h-[18rem] w-[17rem] max-sm:w-full max-sm:h-[18rem]"
          >
            <Image
              alt="Woman listing to music"
              className="object-cover mx-auto"
              height={330}
              src={member.image}
              width={300}
            />
            <CardFooter className="justify-between bg-primary before:bg-white/10 border-white/20 border-1 overflow-hidden py-1 absolute before:rounded-xl rounded-large bottom-1 w-[calc(100%_-_8px)] shadow-small ml-1 z-10">
              <div>
                <p className="my-1 text-base font-medium text-white">
                  {member.names}
                </p>
                <p className="text-tiny my-1 font-medium text-white/80">
                  {member.role}
                </p>
              </div>
              <Button
                href={member.linkedin}
                as={Link}
                target="_blank"
                className="text-tiny text-white bg-black/20"
                variant="flat"
                color="default"
                radius="lg"
                size="sm"
              >
                <Linkedin size={20} />
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  );
}
