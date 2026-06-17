// src/App.test.js
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders ApiPrime title', () => {
    render(<App />);
    const titleElement = screen.getByText(/ApiPrime/i);
    expect(titleElement).toBeInTheDocument();
});
