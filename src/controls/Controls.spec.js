import React from 'react';
import renderer from 'react-test-renderer';

import Controls from './Controls';

describe('<Controls />', () => {
    it('Matches snapshot', () => {
        const tree = renderer.create(<Controls />);
        expect(tree.toJSON()).toMatchSnapshot();
    });
});
