import React from 'react';

const Hero = () => {
  return (
    <section className="bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center justify-center py-12 md:flex-row md:justify-between">
          <div className="md:w-1/2 lg:w-2/3">
            <h1 className="text-4xl font-bold text-white mb-4 md:text-5xl lg:text-6xl">
              Discover the Top 100 GitHub Repositories
            </h1>
            <p className="text-gray-300 text-lg mb-8 md:text-xl">
              Explore the most popular repositories on GitHub and stay up-to-date with the latest trends in software development.
            </p>
            <button className="bg-white text-gray-900 rounded-full py-3 px-6 font-bold text-lg md:text-xl hover:bg-gray-100">
              Get Started
            </button>
          </div>
          <div className="hidden md:block md:w-1/2 lg:w-1/3">
            <img className="w-full h-auto" src="https://cdn4.iconfinder.com/data/icons/iconsimple-logotypes/512/github-512.png" alt="Hero Image"/>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;