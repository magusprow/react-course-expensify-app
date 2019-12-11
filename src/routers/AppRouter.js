import React from "react";
import {BrowserRouter, Route,Switch,Link,NavLink} from 'react-router-dom';
import ExpenseDashboardPage from '../components/ExpanseDashboardPage';
import AddExpensePage from '../components/AddExpensePage';
import HelpPage from '../components/HelpPage';
import NotFoundPage from '../components/NotFoundPage';
import EditExpensePage from '../components/EditExpensePage';
import Header from '../components/Header';


// const ExpenseDashboardPage=()=>(
//     <div>
//         This is from my dashboard component 
//     </div>
// );

// const AddExpensePage=()=>(
//     <div>
//         This is from my add expense component 
//     </div>
// );

// const EditExpansePage=()=>(
//     <div>
//         This is from my edit expense component 
//     </div>
// );

// const HelpPage=()=>(
//     <div>
//         This is from my help component 
//     </div>
// );

// const NotFoundPage=()=>(
//     <div>
//        404 - <NavLink to='/'>Go Home</NavLink>
//     </div>
// );

// const Header=()=>(
//     <header>
//         <h1>Expensify</h1>
//         <NavLink to='/' activeClassName='is-active'>Dashboard</NavLink>
//         <NavLink to='create' activeClassName='is-active'>Create</NavLink>
//         <NavLink to='edit' activeClassName='is-active'>Edit</NavLink>
//         <NavLink to='help' activeClassName='is-active'>Help</NavLink>
    
//     </header>
// );

const AppRouter=()=>(
    <BrowserRouter>
    <div>
        <Header/>
       
        <Switch>
        <Route path='/' component={ExpenseDashboardPage} exact={true}/>
        <Route path='/create' component={AddExpensePage}/>
        <Route path='/edit/:id' component={EditExpensePage}/>
        <Route path='/help' component={HelpPage}/>
        <Route component={NotFoundPage}/>

    </Switch>
        
    </div>
    
    </BrowserRouter>
)

export default AppRouter;