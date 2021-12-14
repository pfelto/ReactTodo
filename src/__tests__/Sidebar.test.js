import React from 'react';
import Sidebar from '../component/Sidebar'
import { shallow } from 'enzyme'

it('Should be True', ()=>{
    expect(true).toBe(true);
})

it('Should have h1 tag',()=>{
    const wrapper = shallow(< Sidebar />);
    expect(wrapper.find('h1').text()).toEqual('Hi!');
})

