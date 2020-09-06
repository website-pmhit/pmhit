import React from 'react';
import { Link } from 'gatsby';
import aboutUs1 from '../assets/about_us_1.svg';
import aboutUs2 from '../assets/about_us_2.svg';

const ContentIndex = () => {
  return (
    <div className="container mx-auto mt-17">
      <h1 className="w-full my-2 text-5xl font-bold leading-tight text-center text-blue-800">
        About Us
      </h1>
      <div className="w-full mb-4">
        <div className="h-1 mx-auto __gradient w-64 opacity-25 my-0 py-0 rounded-lg"></div>
      </div>

      <div className="py-8 grid grid-cols-1 md:grid-cols-2 ">
        <div className="p-6 flex flex-col items-center justify-center">
          <h3 className="w-full text-3xl text-blue-500 font-bold leading-none mb-3">
            Training that puts people first
          </h3>
          <p className="w-full text-lg text-gray-600 mb-8">
            Our training philosophy puts the attendee experience at the heart of
            everything we do. Our courses are delivered by experienced trainers
            in 60 minute modules that combine to provide comprehensive content
            and knowledge. We blend small group sizes with a highly focused
            environment to achieve the optimum learning experience.
          </p>
        </div>
        <div className="p-8 flex flex-col items-center justify-center">
          <img className="h-48" src={aboutUs1} />
        </div>
      </div>

      <div className="py-8 grid grid-cols-1 md:grid-cols-2 ">
        <div className="p-8 flex flex-col items-center justify-center">
          <img className="hidden md:block h-48" src={aboutUs2} />
        </div>
        <div className="p-6 flex flex-col items-center justify-center">
          <h3 className="w-full text-3xl text-blue-500 font-bold leading-none mb-3">
            Training that puts people first
          </h3>
          <p className="w-full text-lg text-gray-600 mb-8">
            Whether it’s for a company or direct to the individual, our courses
            offer the perfect mix of content and efficiency. And best of all,
            our <em>Training Revolution</em> drastically reduces the cost to the
            user without compromising on quality.{' '}
            <Link
              className="text-blue-400 hover:text-blue-800 hover:underline"
              to="/contact"
            >
              Contact us
            </Link>{' '}
            to find out more.
          </p>
        </div>
      </div>
    </div>
  );
};

export default ContentIndex;
