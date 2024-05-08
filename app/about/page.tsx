import Image from 'next/image';
import Image1 from '@/public/image 6.png';
import Image2 from '@/public/image 4.png';
import { valuesArray } from '@/utils/offers';
import { Card, CardBody, CardHeader } from '@nextui-org/card';
import { User } from '@nextui-org/react';
import home1 from "@/public/home.png"
export default function AboutPage() {
  return (
    <div className="w-">
      <div className="flex justify-center items-center gap-10 w-full">
        <div className="w-1/2">
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
        <Image src={Image1} alt="Image" width={300} height={100} />
      </div>
      <div className="grid grid-cols-3 gap-6 my-10">
        {valuesArray.map((offer, i) => (
          <Card key={i} className="w-[80%]">
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
      <div className="flex justify-center items-center gap-32 w-full my-10 px-20">
        <Image src={Image2} alt="Image" width={500} height={200} />
        <div className="w-1/2">
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
      <div>
        {/* <p className="text-primary font-semibold text-3xl">Our Core Values</p>
        <User
          name="Ownership"
          description="Ownership is a core value of our team, driving accountability, commitment, and a sense of responsibility for our collective goals and outcomes."
          avatarProps={{
            src: "@/public/home.png",
          }}
        /> */}
      </div>
    </div>
  );
}
