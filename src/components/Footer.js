import React from 'react';
import { Link } from 'gatsby';

const Footer = () => {
  return (
    <footer className="__gradient">
      <div className="container mx-auto px-2">
        <div className="w-full flex flex-col md:flex-row pt-6">
          <div className="flex-1 mb-6">
            <Link
              className="text-white no-underline hover:no-underline font-bold text-xl lg:text-4xl"
              to="/"
            >
              pmHIT
            </Link>
          </div>
          <div className="flex-1">
            <p className="uppercase text-white md:mb-6">Links</p>
            <ul className="list-reset mb-6">
              <li className="mt-2 inline-block mr-2 md:block md:mr-0">
                <Link
                  to="/training"
                  className="no-underline hover:underline text-gray-300 hover:text-white"
                >
                  Training
                </Link>
              </li>
              <li className="mt-2 inline-block mr-2 md:block md:mr-0">
                <Link
                  to="/coaching"
                  className="no-underline hover:underline text-gray-300 hover:text-white"
                >
                  Coaching
                </Link>
              </li>
              <li className="mt-2 inline-block mr-2 md:block md:mr-0">
                <Link
                  to="/consulting"
                  className="no-underline hover:underline text-gray-300 hover:text-white"
                >
                  Consulting
                </Link>
              </li>
              {
                // <li className="mt-2 inline-block mr-2 md:block md:mr-0">
                //   <Link
                //     to="/testimonials"
                //     className="opacity-50 cursor-not-allowed no-underline hover:underline text-gray-300 hover:text-white"
                //   >
                //     Testimonials
                //   </Link>
                // </li>
                // <li className="mt-2 inline-block mr-2 md:block md:mr-0">
                //   <Link
                //     to="/faq"
                //     className="opacity-50 cursor-not-allowed no-underline hover:underline text-gray-300 hover:text-white"
                //   >
                //     FAQ
                //   </Link>
                // </li>
              }
            </ul>
          </div>
          <div className="flex-1">
            <p className="uppercase text-white md:mb-6">Legal</p>
            <ul className="list-reset mb-6">
              <li className="mt-2 inline-block mr-2 md:block md:mr-0">
                <Link
                  to="/faq"
                  className="opacity-50 cursor-not-allowed no-underline hover:underline text-gray-300 hover:text-white"
                >
                  Terms
                </Link>
              </li>
              <li className="mt-2 inline-block mr-2 md:block md:mr-0">
                <Link
                  to="/faq"
                  className="opacity-50 cursor-not-allowed no-underline hover:underline text-gray-300 hover:text-white"
                >
                  Privacy
                </Link>
              </li>
            </ul>
          </div>
          <div className="flex-1">
            <p className="uppercase text-white md:mb-6">Social</p>
            <ul className="list-reset mb-6">
              <li className="mt-2 inline-block mr-2 md:block md:mr-0">
                <Link
                  to="/faq"
                  className="opacity-50 cursor-not-allowed no-underline hover:underline text-gray-300 hover:text-white"
                >
                  Linkedin
                </Link>
              </li>
              <li className="mt-2 inline-block mr-2 md:block md:mr-0">
                <Link
                  to="/faq"
                  className="opacity-50 cursor-not-allowed no-underline hover:underline text-gray-300 hover:text-white"
                >
                  Twitter
                </Link>
              </li>
              <li className="mt-2 inline-block mr-2 md:block md:mr-0">
                <Link
                  to="/faq"
                  className="opacity-50 cursor-not-allowed no-underline hover:underline text-gray-300 hover:text-white"
                >
                  Youtube
                </Link>
              </li>
            </ul>
          </div>
          <div className="flex-1">
            <p className="uppercase text-white md:mb-6">Company</p>
            <ul className="list-reset mb-6">
              <li className="mt-2 inline-block mr-2 md:block md:mr-0">
                <Link
                  to="/blog"
                  className="no-underline hover:underline text-gray-300 hover:text-white"
                >
                  Blog
                </Link>
              </li>
              <li className="mt-2 inline-block mr-2 md:block md:mr-0">
                <Link
                  to="/contact"
                  className="no-underline hover:underline text-gray-300 hover:text-white"
                >
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="text-gray-300 mb-2 tracking-wide">
          Copyright &copy; {new Date().getFullYear()} pmHIT
        </div>
      </div>
    </footer>
  );
};

export default Footer;
