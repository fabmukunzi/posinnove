import React from 'react';
import { Button, Typography } from 'antd';
import { useRouter } from 'next/navigation';
import Link from 'next/link';

const Home = () => {
  const { Title } = Typography;
  const { push } = useRouter();
  return (
    <div className="flex justify-center flex-col items-center my-64 md:my-40">
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
        <Link href={`${process.env.NEXT_PUBLIC_DASHBOARD_URL}/login`} target="_blank">
          <Button type="primary" className="w-44 text-white border-none">
            Login Page
          </Button>
        </Link>
        <Link href={`${process.env.NEXT_PUBLIC_DASHBOARD_URL}/signup`} target="_blank">
          <Button type="primary" className="w-44 text-white border-none">
            Signup Page
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default Home;
