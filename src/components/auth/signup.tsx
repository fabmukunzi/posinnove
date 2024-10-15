import { setToken } from '@store/reducers/app';
import { logo } from '@utils/images';
import {
  Button,
  Checkbox,
  Form,
  Input,
  Typography,
  notification,
  Dropdown,
  Space,
  Radio,
} from 'antd';
import { DownOutlined, UserOutlined } from '@ant-design/icons';
import type { MenuProps } from 'antd';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useSignupMutation } from '@store/actions/auth';

const SignupComponent = () => {
  const { Title } = Typography;
  const [signup, { isLoading }] = useSignupMutation();
  const { push } = useRouter();

  const handleLogin = async (values: any) => {
    try {
      const { confirmPassword, ...signupValues } = values;
      const { message } = await signup(signupValues).unwrap();
      notification.success({
        message,
      });
      push('/');
    } catch (error: any) {
      notification.error({
        message: error.data.message,
      });
    }
  };

  return (
    <div className="flex flex-col items-center justify-center mt-40 md:mt-0">
      <Image src={logo} alt="logo" className="md:hidden" />
      <Title level={2} className="text-primary font-semibold">
        Signup
      </Title>
      <Form
        onFinish={handleLogin}
        requiredMark={false}
        layout="vertical"
        className="md:w-1/2 w-[80%]"
      >
        <Form.Item
          name="email"
          label="Email"
          rules={[
            {
              required: true,
              message: 'Please enter your email',
            },
            { type: 'email', message: 'Please enter a valid email' },
          ]}
        >
          <Input placeholder="Enter your email" />
        </Form.Item>
        <div className="flex flex-col md:flex-row gap-3">
          <Form.Item
            name="firstName"
            label="First Name"
            rules={[
              {
                required: true,
                message: 'Please enter your first name',
              },
              { min: 2, message: 'First name must be at least 2 characters' },
            ]}
          >
            <Input placeholder="Enter your first name" />
          </Form.Item>
          <Form.Item
            name="lastName"
            label="Last Name"
            rules={[
              {
                required: true,
                message: 'Please enter your last name',
              },
              { min: 2, message: 'Last name must be at least 2 characters' },
            ]}
          >
            <Input placeholder="Enter your last name" />
          </Form.Item>
        </div>
        <div className="flex flex-col md:flex-row gap-3">
          <Form.Item
            name="password"
            label="Password"
            rules={[
              {
                required: true,
                message: 'Enter password',
              },
              { min: 6, message: 'Password must be at least 6 characters' },
            ]}
          >
            <Input.Password placeholder="Enter your password" />
          </Form.Item>

          <Form.Item
            name="confirmPassword"
            label="Confirm Password"
            rules={[
              {
                required: true,
              },
              ({ getFieldValue }) => ({
                validator(_, value) {
                  if (!value || getFieldValue('password') === value) {
                    return Promise.resolve();
                  }
                  return Promise.reject(new Error("Passwords doesn't match!"));
                },
              }),
            ]}
          >
            <Input.Password placeholder="Confirm password" />
          </Form.Item>
        </div>
        <div className="flex">
          <Form.Item
            className="w-full"
            initialValue="student"
            label="Select Role"
            name="role"
          >
            <Radio.Group size="small" buttonStyle="solid">
            <Radio.Button value="learner">Student</Radio.Button>
            <Radio.Button value="instructor">Educator</Radio.Button>
            </Radio.Group>
          </Form.Item>
          <Form.Item
            className="w-full"
            initialValue="male"
            label="Select Gender"
            name="gender"
          >
            <Radio.Group size="small" buttonStyle="solid">
              <Radio.Button value="male">Male</Radio.Button>
              <Radio.Button value="female">Female</Radio.Button>
              <Radio.Button value="other">Other</Radio.Button>
            </Radio.Group>
          </Form.Item>
        </div>
        <Button
          loading={isLoading}
          className="my-3"
          htmlType="submit"
          type="primary"
          block
        >
          Signup
        </Button>
        <Title
          level={5}
          className="font-normal flex flex-col md:flex-row items-center justify-center gap-1"
        >
          Already have an account?
          <Link href="/login" className="text-primary font-medium">
            Login
          </Link>
        </Title>
      </Form>
    </div>
  );
};

export default SignupComponent;
