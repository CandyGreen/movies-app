import React from 'react';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import Search from './Search';
import Button from '../Button/Button';

configure({ adapter: new Adapter() });

describe('<Search />', () => {
    let wrapper = null;

    beforeEach(() => {
        wrapper = shallow(<Search />);
    });
    
    it('Should not render <Button>', () => {
        expect(wrapper.find(Button)).toHaveLength(0);
    })
    ;
    it('Should render <label>', () => {
        expect(wrapper.contains(<label></label>)).toHaveLength(1);
    });
});