import { useLoginMutation } from '@store/actions/auth';
import { setToken } from '@store/reducers/app';
import { logo } from '@utils/images';
import { Button, Checkbox, Form, Input, Typography, notification, Dropdown, Space } from 'antd';
import { DownOutlined, UserOutlined } from '@ant-design/icons';
import type { MenuProps } from 'antd';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';

const SignupComponent = () => {
  const { Title } = Typography;
  const [login, { isLoading }] = useLoginMutation();
  const [gender, setGender] = useState("Gender");
  const { push } = useRouter();
  const dispatch = useDispatch();

  const handleButtonClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    console.log('click left button', e);
  };

  const handleMenuClick: MenuProps['onClick'] = (e) => {
    console.log('click', e.key);
    if (e.key === '1') {
      setGender("Male");
    }
    if (e.key === '2') {
      setGender("Female");
    }
  };

  const items: MenuProps['items'] = [
    {
      label: 'Male',
      key: '1',
      icon: <UserOutlined />,
    },
    {
      label: 'Female',
      key: '2',
      icon: <UserOutlined />,
    },
  ];

  const menuProps = {
    items,
    onClick: handleMenuClick,
  };

  const handleLogin = async (values: any) => {
    try {
      const { data } = await login(values).unwrap();
      dispatch(setToken(data.token));
      push('/');
    } catch (error: any) {
      notification.error({
        message: error.data.message,
      });
      console.log(error, 'responseee');
    }
  };

  return (
    <div className="flex flex-col items-center justify-center -mt-20 md:mt-0">
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
        <div className="flex gap-3">
          <Form.Item
            name="password"
            label="Password"
            rules={[
              {
                required: true,
                message: 'Please enter your password',
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
                message: 'Please confirm your password',
              },
              { min: 6, message: 'Password must be at least 6 characters' },
              ({ getFieldValue }) => ({
                validator(_, value) {
                  if (!value || getFieldValue('password') === value) {
                    return Promise.resolve();
                  }
                  return Promise.reject(new Error('The two passwords do not match!'));
                },
              }),
            ]}
          >
            <Input.Password placeholder="Confirm your password" />
          </Form.Item>
        </div>

        <div className="flex gap-3">
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

        <Form.Item name="gender" label="Gender">
          <Dropdown menu={menuProps}>
            <Button>
              <Space>
                {gender}
                <DownOutlined />
              </Space>
            </Button>
          </Dropdown>
        </Form.Item>

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
          className="font-normal flex items-center justify-center gap-1"
        >
          I don’t have an account?{' '}
          <Link href="/login" className="text-primary font-medium">
            Login
          </Link>
        </Title>
      </Form>
    </div>
  );
};

export default SignupComponent;
