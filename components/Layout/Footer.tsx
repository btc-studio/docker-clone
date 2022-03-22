import {
  FaFacebookF,
  FaLinkedinIn,
  FaRss,
  FaTwitter,
  FaYoutube,
} from 'react-icons/fa';
import Image from 'next/image';

import FooterLogo from '../../public/logo2.svg';

export default function Footer() {
  return (
    <div className=" bg-blue2 text-white font-medium pt-16 md:pt-12 md:px-10">
      <div className="md:max-w-screen-lg md:mx-auto md:grid md:grid-cols-12 ">
        <div className="mb-8 ml-8 md:col-span-2 md:m-0">
          <Image src={FooterLogo} width={110} height={29} />
        </div>

        <div className="w-full grid grid-cols-2 gap-7 p-3  md:col-span-10 md:grid-cols-5 md:gap-0 md:p-0 ">
          <div>
            <ul>
              <li>Products</li>
              <ul>
                <li className="mt-3">
                  Product of Offerings
                  <ul className="text-xs text-gray1">
                    <li>Docker Personal</li>
                    <li>Docker Pro</li>
                    <li>Docker Team</li>
                    <li>Docker Business</li>
                  </ul>
                </li>
                <li className="mt-3">
                  Features
                  <ul className="text-xs text-gray1">
                    <li>Docker Desktop</li>
                    <li>Docker Hub</li>
                    <li>Secure Software Supply</li>
                    <li>Chain</li>
                    <li>Container Runtime</li>
                    <li>Developer Tools</li>
                    <li>Trusted Content</li>
                    <li>Docker Product Roadmap</li>
                    <li>Support</li>
                  </ul>
                </li>
              </ul>
            </ul>
          </div>

          <div>
            <ul>
              <li>
                Developers
                <ul className="text-sm text-gray1 mt-3">
                  <li>Docs</li>
                  <li>Getting Started</li>
                  <li>Community</li>
                  <li>Open Source</li>
                  <li>Preview Program</li>
                </ul>
              </li>
            </ul>
          </div>

          <div>
            <ul>
              <li>
                Pricing
                <ul className="text-sm text-gray1 mt-3">
                  <li>FAQ</li>
                  <li>Docker Verified Publisher</li>
                  <li>Partners</li>
                </ul>
              </li>
            </ul>
          </div>

          <div>Blog</div>

          <div>
            <ul>
              <li>
                About Us
                <ul className="text-sm text-gray1 mt-3">
                  <li>What is a Container</li>
                  <li>Why Docker</li>
                  <li>Virtual Events</li>
                  <li>Swag Store</li>
                  <li>Newsroom</li>
                  <li>Careers</li>
                  <li>Contact Us</li>
                  <li>Customer</li>
                  <li>Newsletter</li>
                </ul>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className=" flex items-center flex-col-reverse p-9 md:grid md:grid-cols-12 md:max-w-screen-lg md:mx-auto">
        <ul className="text-md flex space-x-3 p-6 items-center text-center md:col-span-8 md:mx-auto ">
          <li className="hover:underline">Terms of Service</li>
          <li className="hover:underline">Privacy</li>
          <li className="hover:underline">Legal</li>
        </ul>

        <div className="flex space-x-8 text-2xl p-6 pb-8 md:col-span-4 md:p-0">
          <FaFacebookF className="cursor-pointer hover:text-gray-500 transition duration-100 ease-linear" />
          <FaTwitter className="cursor-pointer hover:text-gray-500 transition duration-100 ease-linear" />
          <FaYoutube className="cursor-pointer hover:text-gray-500 transition duration-100 ease-linear" />
          <FaLinkedinIn className="cursor-pointer hover:text-gray-500 transition duration-100 ease-linear" />
          <FaRss className="cursor-pointer hover:text-gray-500 transition duration-100 ease-linear" />
        </div>
      </div>
    </div>
  );
}
