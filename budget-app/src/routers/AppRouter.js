import React from 'react';
import {Route, BrowserRouter, Switch} from 'react-router-dom';
import Header from '../components/Header';
import notFound from '../components/NotFound';
import expenseDashboard from '../components/expenseDashboard';
import addExpense from '../components/addExpense';
import editExpense from '../components/editExpense';
import helpExpense from '../components/help';

const AppRouter = () => (
  <BrowserRouter>
    <div>
      <Header />
      <Switch>
        <Route path="/" component={expenseDashboard} exact={true} />
        <Route path="/create" component={addExpense} />
        <Route path="/edit" component={editExpense} />
        <Route path="/help" component={helpExpense} />
        <Route component={notFound} />
      </Switch>
    </div>
  </BrowserRouter>
);

export default AppRouter;
