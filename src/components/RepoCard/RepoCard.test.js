import { render, screen } from '@testing-library/react';
import RepoCard from './RepoCard';
import React from 'react';
import '@testing-library/jest-dom';

import { JSDOM } from 'jsdom';

const dom = new JSDOM('<!doctype html><html><body></body></html>');
global.document = dom.window.document;
global.window = dom.window;

test('renders repo card with correct props', () => {
  const repo = {
    name: 'test-repo',
    html_url: 'https://github.com/test-user/test-repo',
    stargazers_count: 10,
    watchers_count: 5,
    forks_count: 2,
  };

  render(<RepoCard repo={repo} />);

  const repoNameElement = screen.getByText(/test-repo/i);
  expect(repoNameElement).toBeInTheDocument();

  const repoLinkElement = screen.getByText(/https:\/\/github\.com\/test-user\/test-repo/i);
  expect(repoLinkElement).toBeInTheDocument();

  const repoStarsElement = screen.getByText(/10 stars/i);
  expect(repoStarsElement).toBeInTheDocument();

  const repoWatchersElement = screen.getByText(/5 watchers/i);
  expect(repoWatchersElement).toBeInTheDocument();

  const repoForksElement = screen.getByText(/2 forks/i);
  expect(repoForksElement).toBeInTheDocument();

  const viewCommitsButton = screen.getByText(/view commits/i);
  expect(viewCommitsButton).toBeInTheDocument();
});