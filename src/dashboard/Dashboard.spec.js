import React from 'react';
import renderer from 'react-test-renderer';

import Dashboard from './Dashboard';
import Display from '../display/Display';
import Controls from '../controls/Controls';

describe('<Dashboard />', () => {
    it('Matches snapshot', () => {
        const tree = renderer.create(<Dashboard />);
        expect(tree.toJSON()).toMatchSnapshot();
    });
    it('Renders the "Display" and "Controls" components without crashing', () => {
        renderer.create(<Display />);
        renderer.create(<Controls />);
    });
});
