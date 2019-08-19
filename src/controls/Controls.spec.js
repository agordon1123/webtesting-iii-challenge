import React from 'react';
import renderer from 'react-test-renderer';
import { render, fireEvent } from '@testing-library/react';

import Controls from './Controls';
console.log(Controls);

describe('<Controls />', () => {
    it('Matches snapshot', () => {
        const tree = renderer.create(<Controls />);
        expect(tree.toJSON()).toMatchSnapshot();
    });
    it('Renders "Lock Gate" and "Close Gate" initially', () => {
        const { getByText } = render(<Controls />);
        const lockGate = getByText('Lock Gate');
        const closeGate = getByText('Close Gate');
        expect(lockGate).toBe(lockGate);
        expect(closeGate).toBe(closeGate);
    })
});
