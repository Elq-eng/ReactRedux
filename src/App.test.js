import { render, screen } from '@testing-library/react';
import App from './App';

describe('Redux App', () => {

  it('test welcome', () => {
    render(<App />)
    expect(screen.getByText("Hello world")).toBeInTheDocument();
  });









})