import React from 'react';
import { Link, graphql, useStaticQuery } from 'gatsby';
import Img from 'gatsby-image';

const HeroIndex = ({ mainMessage, subMessage }) => {
  const data = useStaticQuery(graphql`
    query {
      file(relativePath: { eq: "hero_1.png" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid_tracedSVG
          }
        }
      }
    }
  `);

  return (
    <div className="pb-16 container grid grid-cols-1 gap-4 md:gap-6 lg:grid-cols-2">
      <div className="py-12 flex flex-col w-full justify-start items-center text-center lg:items-start">
        <p className="mt-4 w-full uppercase text-white tracking-loose lg:text-left">
          some question to catch reader's eye?
        </p>
        <h1 className="mt-2 w-full text-5xl text-white font-bold leading-tight lg:text-left">
          {mainMessage}
        </h1>
        <p className="mt-2 w-full text-2xl text-white leading-normal lg:text-left">
          {subMessage}
        </p>
        <Link to="/contact" className="z-50 mt-4">
          <button className="p-2 border border-solid-1 border-white bg-blue-500 text-white text-xl font-semibold rounded-full shadow-lg hover:bg-blue-400">
            Contact Us
          </button>
        </Link>
      </div>
      <div className="">
        <Img
          className="m-auto z-50"
          fluid={data.file.childImageSharp.fluid}
          alt="Depicting generic growth"
        />
      </div>
    </div>
  );
};

export default HeroIndex;
