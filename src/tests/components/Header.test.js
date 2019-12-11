
import React from 'react';
import {shallow,configure} from 'enzyme';
import toJson from 'enzyme-to-json';
import Adapter from 'enzyme-adapter-react-16';


import Header from '../../components/Header';
configure({adapter: new Adapter()});









test('should render Header correctly',()=>{
    const wrapper =shallow(<Header/>);
    expect(toJson(wrapper)).toMatchSnapshot();



    //expect(wrapper.find('h1').text('Expensify')).toBe(1);


    // const renderer = new ReactShallowRenderer();
    // renderer.render(<Header />);
    // expect(renderer.getRenderOutput()).toMatchSnapshot();


});