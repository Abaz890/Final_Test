import { describe, it, expect } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import App from '../App';

describe('App Component', () => {
  it('renders Vite and React logos', () => {
    render(<App />);
    const viteLogo = screen.getByAltText('Vite logo');
    const reactLogo = screen.getByAltText('React logo');

    expect(viteLogo).toBeInTheDocument();
    expect(reactLogo).toBeInTheDocument();
    expect(viteLogo.closest('a')).toHaveAttribute('href', 'https://vite.dev');
    expect(reactLogo.closest('a')).toHaveAttribute('href', 'https://react.dev');
  });

  it('renders heading and initial counter', () => {
    render(<App />);
    const heading = screen.getByText(/Vite \+ React/i);
    const button = screen.getByRole('button', { name: /count is 0/i });

    expect(heading).toBeInTheDocument();
    expect(button).toBeInTheDocument();
  });

  it('increments counter on button click', () => {
    render(<App />);
    const button = screen.getByRole('button', { name: /count is 0/i });

    // click button
    fireEvent.click(button);
    fireEvent.click(button);

    // expect count to increment
    expect(screen.getByRole('button')).toHaveTextContent('count is 2');
  });

  it('renders instructional text and read-the-docs paragraph', () => {
    render(<App />);
    const codeText = screen.getByText(/src\/App.tsx/i);
    const docsParagraph = screen.getByText(/Click on the Vite and React logos to learn more/i);

    expect(codeText).toBeInTheDocument();
    expect(docsParagraph).toBeInTheDocument();
  });
});
