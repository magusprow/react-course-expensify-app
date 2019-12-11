import React from 'react';
import {shallow,configure} from 'enzyme';
import {AddExpensePage} from '../../components/AddExpensePage';

import toJson from 'enzyme-to-json';
import Adapter from 'enzyme-adapter-react-16';



import expenses from '../fixtures/expenses';


configure({adapter: new Adapter()});

let addExpense,history,wrapper;

beforeEach(()=>{
    addExpense = jest.fn();
    history ={push:jest.fn()}
    wrapper = shallow(<AddExpensePage addExpense={addExpense} history={history}/>);

});

test('should render AddExpensePage correctly',()=>{
    
    expect(wrapper).toMatchSnapshot();
});


test('should handle on onSubmit',()=>{
   
    wrapper.find('ExpenseForm').prop('onSubmit')(expenses[1]);
    expect(history.push).toHaveBeenLastCalledWith('/');
    expect(addExpense).toHaveBeenLastCalledWith(expenses[1]);
   
});