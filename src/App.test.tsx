import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders the Top Bar', () => {
	render(<App />);
	const appTitle = screen.getByText(/Pokedex/i);
	expect(appTitle).toBeInTheDocument();
});

it('checks if true is truthy', () => {
	expect(true).toBeTruthy();
});
