'use client';

import {
  Button,
  Input,
  Modal,
  ModalBody,
  ModalContent,
  ModalHeader,
} from '@nextui-org/react';
import axios from 'axios';
import {
  CheckCircle,
  Instagram,
  Linkedin,
  RocketIcon,
  Twitter,
  XCircle,
} from 'lucide-react';
import NextLink from 'next/link';
import { useState } from 'react';
import { BASE_API_URL } from '../utils/constants';

function Footer() {
  const [loading, setLoading] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [modalMessage, setModalMessage] = useState('');
  const [isSuccess, setIsSuccess] = useState<boolean | null>(null);
  const [formData, setFormData] = useState({ names: '', email: '' });
  const [errors, setErrors] = useState<{ names?: string; email?: string }>({});

  const handleChange = (e: any) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const validateForm = () => {
    let newErrors: { names?: string; email?: string } = {};

    if (!formData.names.trim()) {
      newErrors.names = 'Name is required';
    } else if (formData.names.length < 3) {
      newErrors.names = 'Name must be at least 3 characters long';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Invalid email format';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleNewsletterSignUp = async (e: any) => {
    e.preventDefault();
    if (!validateForm()) return;

    setLoading(true);
    try {
      await axios.post(`${BASE_API_URL}/api/subscribe`, formData);
      setModalMessage(
        "Thank you for subscribing to our newsletter! You'll now receive the latest updates on our projects, insights, and exclusive opportunities straight to your inbox."
      );
      setIsSuccess(true);
      setFormData({ names: '', email: '' });
    } catch (error) {
      setModalMessage(
        'Oops! Something went wrong while subscribing. Please check your details and try again. If the issue persists, feel free to contact us for assistance.'
      );
      setIsSuccess(false);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-[#303950] w-full flex flex-col mt-10">
      <div className="flex justify-around mx-[5%] mt-[5%] mb-[2%] text-white max-sm:flex-wrap max-sm:gap-5">
        <div className="max-sm:w-[1/2]">
          <h2 className="font-semibold text-xl pb-4">Learn More</h2>
          <p>
            <NextLink href="/about"> About us</NextLink>
          </p>
          <p>
            <NextLink href="/#whatWeoffer">What We offer</NextLink>
          </p>
          <p>
            <NextLink href="/#">Our Blogs</NextLink>
          </p>
          <p>
            <NextLink href="/#">Our Offerings</NextLink>
          </p>
        </div>
        <div className="max-sm:w-[1/2]">
          <h2 className="font-semibold text-xl pb-4">Get in Touch</h2>
          <p>KN 78 St, Kigali</p>
          <p>Norrsken House Kigali</p>
          <p>posinnove@gmail.com</p>
        </div>
        <div className="max-sm:w-[1/2] flex flex-col">
          <h2 className="font-semibold text-xl pb-4">Policy and Terms</h2>
          <ul>
            <li className="hover:underline">
              <NextLink href="/terms">Terms and Conditions</NextLink>
            </li>
            <li className="hover:underline">
              <NextLink href="/terms/privacy">Privacy and Policy</NextLink>
            </li>
          </ul>
        </div>
        <div className="w-[24%] max-sm:w-full max-sm:mt-10">
          <h2 className="font-semibold text-xl pb-4">Our Newsletter</h2>
          <p>Subscribe to get updates on our latest projects and insights.</p>
          <Button
            onPress={() => setIsOpen(true)}
            className="mt-4 bg-primary text-white w-40 h-12 text-base font-medium"
          >
            Subscribe <RocketIcon size={20} className="ml-2 text-white" />
          </Button>

          <Modal isOpen={isOpen} onClose={() => setIsOpen(false)}>
            {modalMessage ? (
              <ModalContent>
                <ModalHeader className="flex flex-col items-center">
                  {isSuccess ? (
                    <CheckCircle size={80} className="text-green-500 mt-16" />
                  ) : (
                    <XCircle size={80} className="text-red-500 mt-16" />
                  )}
                </ModalHeader>
                <ModalBody className="text-center mb-10">
                  <p className="text-lg text-gray-700">{modalMessage}</p>
                </ModalBody>
              </ModalContent>
            ) : (
              <ModalContent>
                {() => (
                  <>
                    <ModalHeader className="flex flex-col gap-1">
                      Subscribe to posinnove
                    </ModalHeader>
                    <ModalBody>
                      <p className="text-center text-gray-600">
                        Subscribe to receive the latest updates on our projects,
                        insights, and opportunities.
                      </p>
                      <form
                        onSubmit={handleNewsletterSignUp}
                        className="flex flex-col gap-6 p-6"
                      >
                        <Input
                          name="names"
                          value={formData.names}
                          onChange={handleChange}
                          placeholder="Full name"
                          required
                        />
                        <Input
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          placeholder="Email address"
                          required
                        />
                        <Button
                          type="submit"
                          isLoading={loading}
                          disabled={loading}
                          className="bg-primary text-white mt-10 h-11"
                        >
                          Submit
                        </Button>
                      </form>
                    </ModalBody>
                  </>
                )}
              </ModalContent>
            )}
          </Modal>
        </div>

        <div>
          <h2 className="font-semibold text-xl pb-4 max-sm:hidden">
            Social Links
          </h2>
          <div className="flex gap-4 max-sm:py-4">
            <NextLink
              target="_blank"
              href="https://x.com/posinnove"
              className="hover:text-gray-300 hover:scale-110 duration-500"
            >
              <Twitter />
            </NextLink>
            <NextLink
              href="https://www.linkedin.com/company/posinnove-tech/"
              className="hover:text-gray-300 hover:scale-110 duration-500"
            >
              <Linkedin />
            </NextLink>
            <NextLink
              href="https://www.instagram.com/posinnove/"
              className="hover:text-gray-300 hover:scale-110 duration-500"
            >
              <Instagram />
            </NextLink>
          </div>
        </div>
      </div>

      <div className="w-full flex justify-center">
        <div className="w-[90%] h-[1px] bg-white"></div>
      </div>
      <div className="w-full flex justify-center">
        <p className="text-white pb-[2%] pt-[1%]">
          © {new Date().getFullYear()} Posinnove Tech Solution
        </p>
      </div>
    </div>
  );
}

export default Footer;
