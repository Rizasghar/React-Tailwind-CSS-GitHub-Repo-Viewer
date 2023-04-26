import React from 'react';

const Commit = ({ commit }) => (
  <div className="border-b border-gray-300 py-2">
    <div className="flex items-center">
     {commit.author.avatar_url &&  <div className="w-12 flex-shrink-0">
        <img src={commit.author.avatar_url} alt={commit.author.login} className="w-10 h-10 rounded-full" />
      </div>
      }
      <div className="ml-4">
        <div className="text-gray-700 font-medium">{commit.author.login}</div>
        <div className="text-gray-500 text-sm">{commit.commit.author.name}</div>
      </div>
      <div className="ml-auto text-gray-500 text-sm">{commit.commit.author.date}</div>
    </div>
    <div className="mt-2 text-gray-800">{commit.commit.message}</div>
  </div>
);


export default Commit;