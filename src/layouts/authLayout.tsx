import React from 'react';
import { homeImage, logo } from '@utils/images';
import { Typography } from 'antd';
import { motion } from 'framer-motion';
import Image from 'next/image';

type Props = {
  children: React.ReactNode;
};
const AuthLayout = ({ children }: Props) => {
  const { Title } = Typography;
  const text =
    'Transform Education with Practical Learning and Collaboration through Posinnove'.split(
      ' '
    );
  return (
    <div className="flex w-screen h-screen justify-center items-center">
      <div className="hidden w-1/2 h-screen bg-[#cccccc16] md:flex flex-col items-center justify-center">
        <Image src={logo} alt="logo" className="relative left-0" />
        <Image src={homeImage} alt="Home" className="my-8 rounded-md" />
        <Title level={3} className="font-semibold w-[70%] text-primary">
          {text.map((el, i) => (
            <motion.span
              // initial={{ opacity: 0 }}
              // animate={{ opacity: 1 }}
              // transition={{
              //   duration: 2,
              //   delay: i / 5,
              // }}
              key={i}
            >
              {el}{' '}
            </motion.span>
          ))}
        </Title>
      </div>
      <div className="md:w-1/2 w-screen">{children}</div>
    </div>
  );
};

export default AuthLayout;
