import React, { useState } from "react";
import { Typography, Button, Input, Form, message } from 'antd';
import { BsPatchExclamation } from "react-icons/bs";
import { IoIosArrowBack } from "react-icons/io";
import Link from "next/link";
import axios from 'axios';

const { Title, Text } = Typography;

const Forgot = () => {
    const [form] = Form.useForm();
    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleSend = async (values) => {
        setIsSubmitting(true); // Start the submission process
        try {
            const response = await axios.post(
                "/api/users/forgetpassword", // Ensure this endpoint matches your server's route
                { email: values.email },
                {
                    headers: {
                        "Content-Type": "application/json",
                    },
                }
            );

            message.success("Check your email for reset instructions."); // Provide a user-friendly message
            form.resetFields(); // Reset the form fields
        } catch (error) {
            console.error("Error sending forgot password request:", error);
            if (error.response) {
                message.error(error.response.data.message || "Something went wrong");
            } else {
                message.error("Failed to send forgot password request");
            }
        } finally {
            setIsSubmitting(false); // End the submission process
        }
    };

    return (
        <div className="flex flex-col items-center justify-center">
            <BsPatchExclamation className="mb-4 text-blue-900 text-6xl" />
            <Title level={2} className="text-primary font-bold text-xl">Forgot Password</Title>
            <Form
                form={form} // Use the form instance
                requiredMark={false}
                layout="vertical"
                className="md:w-1/2 w-[80%]"
                onFinish={handleSend}
            >
                <Text className="text-base mt-7 mb-2">
                    Enter your email and we will send you a link to reset your password.
                </Text>
                <Form.Item
                    name="email"
                    label="Email"
                    rules={[
                        { required: true, message: 'Email is required!' },
                        { type: 'email', message: 'Please enter a valid email address' },
                    ]}
                >
                    <Input placeholder="Enter your email" />
                </Form.Item>
                <Button type="primary" block htmlType="submit" loading={isSubmitting}>Send</Button>
                <div className="mt-4 justify-center flex">
                    <Link href="/login">
                        <span className="text-base flex items-center cursor-pointer">
                            <IoIosArrowBack className="mr-1" /> Back to Login
                        </span>
                    </Link>
                </div>
            </Form>
        </div>
    );
};

export default Forgot;
