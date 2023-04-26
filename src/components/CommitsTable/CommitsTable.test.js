import React from 'react';
import { render } from '@testing-library/react';
import CommitsTable from './CommitsTable';
import '@testing-library/jest-dom';


import { JSDOM } from 'jsdom';

const dom = new JSDOM('<!doctype html><html><body></body></html>');
global.document = dom.window.document;
global.window = dom.window;

describe('CommitsTable', () => {
  const commits = [
    {
      sha: '123abc',
      author: {
        avatar_url: 'https://example.com/avatar.png',
        login: 'testuser'
      },
      commit: {
        author: {
          name: 'Test User',
          date: '2022-05-01T14:25:00Z'
        },
        message: 'Test commit message'
      }
    }
  ];

  const repo = {
    name: 'testrepo',
    description: 'Test repository'
  };

  const onBackClick = jest.fn();

  it('renders the repository name and description', () => {
    const { getByText } = render(<CommitsTable commits={commits} repo={repo} onBackClick={onBackClick} />);
    expect(getByText('testrepo Commits')).toBeInTheDocument();
    expect(getByText('Test repository')).toBeInTheDocument();
  });

  it('renders the commit details', () => {
    const { getByText } = render(<CommitsTable commits={commits} repo={repo} onBackClick={onBackClick} />);
    expect(getByText('testuser')).toBeInTheDocument();
    expect(getByText('Test User')).toBeInTheDocument();
    expect(getByText('2022-05-01T14:25:00Z')).toBeInTheDocument();
    expect(getByText('Test commit message')).toBeInTheDocument();
  });
});