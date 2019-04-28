import React from 'react';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import Movie from './Movie';

configure({ adapter: new Adapter() });

describe('<Movie />', () => {
    it('should render if props.info was passed', () => {
        const wrapper = shallow(<Movie info={{}} />);
        expect(wrapper).toBeTruthy();
    });
});