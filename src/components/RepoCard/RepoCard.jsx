import React from 'react';
import { FaEye, FaStar, FaCodeBranch, FaExternalLinkAlt } from "react-icons/fa";


const RepCard = ({ repo, seeCommits }) => {
    const handleClick = async (e) => {
        e.preventDefault();
        await seeCommits({
          commitsUrl: repo.commits_url,
          screenName: "commits",
          repoName: repo.name
        });
      };
  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden">
      <div className="px-4 py-4 sm:px-6">
        <h3 className="text-lg font-medium leading-6 text-gray-900 truncate">{repo.name}</h3>
        <p className="mt-1 max-w-2xl text-sm text-gray-500 truncate">{repo.description}</p>
      </div>
      <div className="border-t border-gray-200 px-4 py-2 sm:px-6">
        <dl className="grid grid-cols-2 gap-x-4 gap-y-2 text-sm text-gray-600">
          <div className="flex justify-start">
          <span className='p-[0.12rem]'><FaExternalLinkAlt /></span>
            <a href={repo.html_url} target="_blank" rel="noopener noreferrer" className="hover:underline">{repo.html_url}</a>
          </div>
          <div className="flex justify-start">
          <span className='p-[0.12rem]'><FaStar /></span>
            <span>{repo.stargazers_count}</span>
          </div>
      <div className="flex justify-start">
      <span className='p-[0.12rem]'><FaEye /></span>
        <span>{repo.watchers_count}</span>
      </div>
      <div className="flex justify-start">
      <span className='p-[0.12rem]'><FaCodeBranch /></span>
        <span>{repo.forks_count}</span>
      </div>
    </dl>
  </div>
  <div className="px-4 py-2 sm:px-6 flex justify-end">
    <a onClick={(e) => handleClick(e, repo)}  target="_blank" rel="noopener noreferrer" className="bg-indigo-500 text-white py-2 px-4 rounded hover:bg-indigo-600 focus:outline-none focus:bg-indigo-600">
      View Commits
    </a>
  </div>
</div>
);
};

export default RepCard;

          