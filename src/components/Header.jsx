import React from 'react';

const Header = () => {
  return (
    <header className="bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-6 md:justify-start md:space-x-10">
          <div className="flex justify-start lg:w-0 lg:flex-1">
            <a href="#">
              <span className="sr-only">Logo</span>
              <img className="h-8 w-auto sm:h-10" src="https://cdn4.iconfinder.com/data/icons/iconsimple-logotypes/512/github-512.png" alt="Logo"/>
            </a>
          </div>
          <div className="hidden md:flex items-center justify-end md:flex-1 lg:w-0">
            <a href="#" className="whitespace-nowrap text-base font-medium text-gray-500 hover:text-gray-900">
              Top 100 GitHub Repos
            </a>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;