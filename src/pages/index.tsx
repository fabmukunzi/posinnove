import React from 'react';
import { Button, Typography, Avatar } from 'antd';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { useGetProfileQuery } from '../store/actions/auth';
import { User } from '@phosphor-icons/react';
import ReactConfetti from 'react-confetti';
import useWindowSize from 'react-use/lib/useWindowSize';

const Home = () => {
  const { Title, Paragraph } = Typography;
  const { push } = useRouter();
  const { data } = useGetProfileQuery({});
  const { width, height } = useWindowSize();
  return (
    <div className="flex justify-center flex-col items-center my-32 md:my-20">
      {data ? (
        <>
          <ReactConfetti
            numberOfPieces={300}
            width={width}
            height={height}
            wind={0.01}
            colors={['#091e6a', '#0080ff', 'green', 'pink', '#0080ff']}
          />
          <Avatar
            className="rounded-xl"
            size={150}
            icon={<User color="#091e6a" size={100} weight="fill" />}
          />
          <div className="md:w-[45%] mx-2">
            <Title className="text-[#091e6a] font-bold my-10 text-center text-xl md:text-3xl">
              Dear {data?.data.firstName}, Welcome to Our Platform
              <Paragraph className="font-medium text-center text-primary my-2">
                We are excited to have you with us. Our team is currently hard
                at work building an amazing product, and we can&apos;t wait to
                share it with you. In the meantime, we have added you to our
                waitlist, and you&apos;ll be among the first to know when we
                release our product soon. Thank you for your patience and
                support!
              </Paragraph>
            </Title>
          </div>
          <Link
            href="https://whatsapp.com/channel/0029VaiOLppAu3aHMgLRNT3l"
            className="font-normal bg-primary text-white rounded-xl py-3 px-4 my-2 text-lg md:text-xl"
          >
            Join our community
          </Link>
          {/* <div className="flex gap-2">
            <Link href="https://posinnove.com/" target="_blank">
              <Button type="primary" className="w-44 text-white border-none">
                Landing Page
              </Button>
            </Link>
            <Link
              href={`${process.env.NEXT_PUBLIC_DASHBOARD_URL}/login`}
              target="_blank"
            >
              <Button type="primary" className="w-44 text-white border-none">
                Login Page
              </Button>
            </Link>
            <Link
              href={`${process.env.NEXT_PUBLIC_DASHBOARD_URL}/signup`}
              target="_blank"
            >
              <Button type="primary" className="w-44 text-white border-none">
                Signup Page
              </Button>
            </Link>
          </div> */}
        </>
      ) : (
        <>
          <Title className="text-[#091e6a] font-bold my-0 text-center text-xl md:text-3xl">
            Welcome To Posinnove Platform! 👋
          </Title>
          <Title
            level={3}
            className="text-[#091e6a] font-semibold my-2 text-lg md:text-xl"
          >
            We are coming soon
          </Title>
          <div className="flex gap-2">
            <Link href="https://posinnove.com/" target="_blank">
              <Button type="primary" className="w-44 text-white border-none">
                Landing Page
              </Button>
            </Link>
            <Link
              href={`${process.env.NEXT_PUBLIC_DASHBOARD_URL}/login`}
              target="_blank"
            >
              <Button type="primary" className="w-44 text-white border-none">
                Login Page
              </Button>
            </Link>
            <Link
              href={`${process.env.NEXT_PUBLIC_DASHBOARD_URL}/signup`}
              target="_blank"
            >
              <Button type="primary" className="w-44 text-white border-none">
                Signup Page
              </Button>
            </Link>
          </div>
        </>
      )}
    </div>
  );
};

export default Home;
