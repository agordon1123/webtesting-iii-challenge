import React from 'react';
import { render } from '@testing-library/react';
import renderer from 'react-test-renderer';

import Display from './Display';

describe('<Display />', () => {
    it('Matches snapshot', () => {
        const tree = renderer.create(<Display />);
        expect(tree.toJSON()).toMatchSnapshot();
    });
    it('Initially defaults to "Open" and "Unlocked"', () => {
        const { getByText } = render(<Display />);
        const Open = getByText('Open');
        const Unlocked = getByText('Unlocked');
        expect(Open).toBe(Open);
        expect(Unlocked).toBe(Unlocked);
    });
});
