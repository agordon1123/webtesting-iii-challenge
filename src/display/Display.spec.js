import React from 'react';
import { render } from '@testing-library/react';
import renderer from 'react-test-renderer';
import 'jest-dom/extend-expect';

import Display from './Display';

describe('<Display />', () => {
    it('Matches snapshot', () => {
        const tree = renderer.create(<Display />);
        expect(tree.toJSON()).toMatchSnapshot();
    });
    it('displays if gate is open/closed and if it is locked/unlocked', () => {
        const { getByText } = render(<Display />)
        getByText(/unlocked/i)
        getByText(/open/i)
    })
    it('displays "Closed" if the `closed` prop is `true` and "Open" if otherwise', () => {
        const { getByText } = render(<Display closed={true} />);
        const Closed = getByText(/closed/i);
        expect(Closed).toBeTruthy();
    });
    it('displays "Locked" if the `locked` prop is `true` and "Unlocked" if otherwise', () => {
        const { getByText } = render(<Display locked={true} />);
        const Locked = getByText(/locked/i);
        expect(Locked).toBeTruthy();
    });
    it('when `locked` or `closed` use the `red-led` class', () => {
        const { getByText } = render(<Display locked={true} closed={true} />);
        const Locked = getByText(/locked/i);
        expect(Locked).toHaveClass('red-led');
    });
    it('when `unlocked` or `open` use the `green-led` class', () => {
        const { getByText } = render(<Display locked={false} closed={false} />);
        const Open = getByText(/open/i);
        expect(Open).toHaveClass('green-led');
    })
});
