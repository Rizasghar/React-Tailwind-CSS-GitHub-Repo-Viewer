import React from 'react';
import { FaArrowLeft } from 'react-icons/fa';

const RepoCommitsHeader = ({ repoName, onBackClick }) => (
  <div className="bg-gray-800 py-12">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
      <button
        className="text-white flex items-center text-lg hover:text-gray-300 focus:outline-none"
        onClick={onBackClick}
      >
        <FaArrowLeft className="mr-2" />
        Back to repos
      </button>
      <h1 className="text-3xl leading-9 font-bold text-white">
        {repoName} Commits
      </h1>
      <div></div>
    </div>
  </div>
);

export default RepoCommitsHeader;