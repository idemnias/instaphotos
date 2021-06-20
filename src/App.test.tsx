import * as React from 'react';
import { createBrowserHistory } from 'history';
import { render, screen } from '@testing-library/react';
import App from './App';

const history = createBrowserHistory()

test('renders learn react link', () => {
  render(<App history={history}/>);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
