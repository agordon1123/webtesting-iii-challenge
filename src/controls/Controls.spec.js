import React from 'react';
import renderer from 'react-test-renderer';
import { render, fireEvent } from '@testing-library/react';
import 'react-testing-library/cleanup-after-each';

import Controls from './Controls';

describe('<Controls />', () => {
    it('Matches snapshot', () => {
        const tree = renderer.create(<Controls />);
        expect(tree.toJSON()).toMatchSnapshot();
    });
    it('provide buttons to toggle the `closed` and `locked` states', () => {
        const { getByText } = render(<Controls />);
        const lockGate = getByText('Lock Gate');
        const closeGate = getByText('Close Gate');
        expect(lockGate).toBe(lockGate);
        expect(closeGate).toBe(closeGate);
    });
    it('buttons text changes to reflect the state the door will be in if clicked', () => {
        const { getByText } = render(<Controls closed={true} />);
        const OpenButton = getByText('Open Gate')
        expect(OpenButton).toBe(OpenButton);
    });
    it('the locked toggle button is disabled if the gate is open', () => {
        const toggleClosed = jest.fn();
        const { getByText } = render(<Controls toggleClosed={toggleClosed} />);
        fireEvent.click(getByText('Lock Gate'));
        expect(toggleClosed).not.toHaveBeenCalled();
    });
    it('the closed toggle button is disabled if the gate is locked', () => {
        const toggleLocked = jest.fn();
        const { getByText } = render(<Controls closed={true} locked={true} toggleLocked={toggleLocked} />);
        fireEvent.click(getByText('Open Gate'))
        expect(toggleLocked).not.toHaveBeenCalled();
    });
});
