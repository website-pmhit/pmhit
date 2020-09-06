import React from 'react';
import { Link } from 'gatsby';
import HeroImage from '../assets/hero_1.svg';

const HeroIndex = ({ question, mainMessage, subMessage }) => {
  return (
    <div className="pb-16 px-10 container grid grid-cols-1 lg:grid-cols-8">
      <div className="lg:col-span-5 py-12 flex flex-col w-full justify-start items-center text-center lg:items-start">
        <p className="mt-4 w-full uppercase text-white tracking-loose lg:text-left">
          {question}
        </p>
        <h1 className="mt-2 w-full text-5xl text-white font-bold leading-tight lg:text-left">
          {mainMessage}
        </h1>
        <p className="mt-2 w-full text-2xl text-white leading-normal tracking-wide lg:text-left">
          {subMessage}
        </p>
        <Link to="/contact" className="z-50 mt-4">
          <button className="p-2 border border-solid-1 border-white bg-blue-500 text-white text-xl font-semibold rounded-full shadow-lg hover:bg-blue-400">
            Contact Us
          </button>
        </Link>
      </div>
      <div className="p-4 lg:col-span-3 flex flex-col justify-center items-center">
        <img className="h-56" src={HeroImage} alt="Depicting growth" />
      </div>
    </div>
  );
};

export default HeroIndex;
