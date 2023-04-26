import React from 'react';
import { render } from '@testing-library/react';
import Commit from './Commit';
import '@testing-library/jest-dom';


import { JSDOM } from 'jsdom';

const dom = new JSDOM('<!doctype html><html><body></body></html>');
global.document = dom.window.document;
global.window = dom.window;

const mockCommit = {
  author: {
    avatar_url: 'https://example.com/avatar.jpg',
    login: 'testuser'
  },
  commit: {
    author: {
      name: 'Test User',
      date: '2022-05-01T12:00:00Z'
    },
    message: 'Test commit message'
  }
};

describe('Commit component', () => {
  test('renders commit author name', () => {
    const { getByText } = render(<Commit commit={mockCommit} />);
    expect(getByText('Test User')).toBeInTheDocument();
  });

  test('renders commit author login', () => {
    const { getByText } = render(<Commit commit={mockCommit} />);
    expect(getByText('testuser')).toBeInTheDocument();
  });

  test('renders commit message', () => {
    const { getByText } = render(<Commit commit={mockCommit} />);
    expect(getByText('Test commit message')).toBeInTheDocument();
  });

  test('renders commit date', () => {
    const { getByText } = render(<Commit commit={mockCommit} />);
    expect(getByText('2022-05-01T12:00:00Z')).toBeInTheDocument();
  });

  test('renders commit avatar if available', () => {
    const { getByAltText } = render(<Commit commit={mockCommit} />);
    expect(getByAltText('testuser')).toBeInTheDocument();
  });
});