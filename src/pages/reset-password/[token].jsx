
import AuthLayout from "@layout/authLayout";
import { Typography, Button, Input, Form, message } from 'antd'; // Import message correctly

const ResetPassword = () => {

    const Title = Typography;

 

    return (
        <AuthLayout>
            <div>
                <Title level={2} 
                className="text-primary 
                font-bold text-xl font-serif
                mb-1
                underline">
                Reset Password
                </Title>
                <Form
                    // onFinish={handleSubmit} // Changed from onSubmit to onFinish for Ant Design form
                    requiredMark={false}
                    layout='vertical'
                    className="md:w-1/2 w-[80%]"
                >
                    <Form.Item
                        label="Enter new Password:"
                        name="password"
                        rules={[{ required: true, message: 'Please enter your new password!' }]}
                    >
                        <Input.Password
                            className='border-2 px-2 rounded w-96'
                            placeholder="Enter new password"
                        />
                    </Form.Item>
                    
                    <Form.Item
                        label="Confirm new Password:"
                        name="confirmPassword"
                        rules={[{ required: true, message: 'Please confirm your new password!' }]}
                    >
                        <Input.Password
                            className='border-2 px-2 rounded w-96'
                            placeholder="Re-enter new password"
                        />
                    </Form.Item>
                    
                    <Button 
                    type="primary" 
                    block 
                    htmlType="submit"
                    className='my-3 w-96'
                    >Reset Password
                    </Button>
                </Form>
                {/* {responseMessage && <p>{responseMessage}</p>} Render response message */}
            </div>
        </AuthLayout>
    );
};

export default ResetPassword;
