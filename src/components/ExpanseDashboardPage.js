import React from 'react';
import ExpenseList from './ExpenseList';
import ExpenseListFilters from './ExpenseListFilters';
import ExpensesSummary from './ExpensesSummary';



const ExpanseDashboardPage = () => (
    
    
    <div>
        <ExpenseListFilters/>
        <ExpenseList/>
        <ExpensesSummary/>

        </div>
   

);

export default ExpanseDashboardPage;