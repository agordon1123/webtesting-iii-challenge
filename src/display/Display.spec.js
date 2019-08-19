import React from 'react';
import renderer from 'react-test-renderer';

import Display from './Display';

describe('<Display />', () => {
    it('Matches snapshot', () => {
        const tree = renderer.create(<Display />);
        expect(tree.toJSON()).toMatchSnapshot();
    });
});
