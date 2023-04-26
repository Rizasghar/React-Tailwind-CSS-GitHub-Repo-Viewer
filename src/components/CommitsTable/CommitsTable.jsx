import React from 'react';
import Commit from '../Commit/Commit';

const CommitsTable = ({ commits, repo }) => (
    <div className="bg-white shadow sm:rounded-md flex">
    <div className="px-4 py-5 sm:px-6">
      <h3 className="text-lg leading-6 font-medium text-gray-900">{repo.name} Commits</h3>
      <p className="mt-1 max-w-2xl text-sm text-gray-500">{repo.description}</p>
    </div>
    <div className="border-t border-gray-200 px-4 py-5 sm:p-0">
      <dl>
        {commits.map(commit => (
          <div key={commit.sha}>
            <dt className="sr-only">Commit</dt>
            <dd>
              <Commit commit={commit} />
            </dd>
          </div>
        ))}
      </dl>
    </div>
  </div>
  );
  
  export default CommitsTable;