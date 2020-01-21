import React from 'react';
import { render } from '@testing-library/react';
import CrystalBall from './CrystalBall';

test('renders CrystalBall', () => {
    const { getByText } = render(<CrystalBall />);
    const linkElement = getByText(/What is your future/i);
    expect(linkElement).toBeInTheDocument();
});
