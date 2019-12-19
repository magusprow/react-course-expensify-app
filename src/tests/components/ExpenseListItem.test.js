import React from 'react';
import {shallow,configure} from 'enzyme';
import expenses from '../fixtures/expenses';
import ExpenseListItem from '../../components/ExpenseListItem';
import toJson from 'enzyme-to-json';
import Adapter from 'enzyme-adapter-react-16';
import numeral from 'numeral';
//import {filters,altFilters} from '../fixtures/filters';


configure({adapter: new Adapter()});

test('should render ExpenseListItem correctly',()=>{
    const wrapper = shallow(<ExpenseListItem {...expenses[0]}/>);
    expect(wrapper).toMatchSnapshot();
});