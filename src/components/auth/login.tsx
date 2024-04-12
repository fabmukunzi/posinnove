import { logo } from '@utils/images';
import { Button, Checkbox, Form, Input, Typography } from 'antd';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const LoginComponent = () => {
  const { Title } = Typography;
  return (
    <div className="flex flex-col items-center justify-center -mt-20 md:mt-0">
      <Image src={logo} alt="logo" className="md:hidden" />
      <Title level={2} className="text-primary font-semibold">
        Login
      </Title>
      <Form requiredMark={false} layout="vertical" className="md:w-1/2 w-[80%]">
        <Form.Item
          name="email"
          label="Email"
          rules={[
            {
              required: true,
            },
            { type: 'email', message: 'Please enter a valid email' },
          ]}
        >
          <Input placeholder="Enter your email" />
        </Form.Item>
        <Form.Item
          name="password"
          label="Password"
          rules={[
            {
              required: true,
            },
            { min: 6, message: 'Password must be atleast 6 characters' },
          ]}
        >
          <Input.Password placeholder="Enter your password" />
        </Form.Item>
        <div className="flex justify-between">
          <Form.Item name="remember" className="flex items-start my-0">
            <Checkbox>Remember Me</Checkbox>
          </Form.Item>
          <Link href="/forgot-password" className="text-primary">
            Forgot Password?
          </Link>
        </div>
        <Button className="my-3" htmlType="submit" type="primary" block>
          Login
        </Button>
        <Title
          level={5}
          className="font-normal flex items-center justify-center gap-1"
        >
          I don’t have an account?{' '}
          <Link href="/Signup" className="text-primary font-medium">
            Signup
          </Link>
        </Title>
      </Form>
    </div>
  );
};

export default LoginComponent;
