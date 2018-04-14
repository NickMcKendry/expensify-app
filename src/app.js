import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import 'normalize.css/normalize.css';
import './styles/styles.scss';

const ExpenseDashboardPage = () => (
  <div>
    <h1>This is dashboard</h1>
  </div>
)

const AddExpensePage = () => (
  <div>
    <h1>This is add</h1>
  </div>
)

const EditExpensePage = () => (
  <div>
    <h1>This is Edit</h1>
  </div>
)

const HelpPage = () => (
  <div>
    <h1>This is Help</h1>
  </div>
)

const NotFoundPage = () => (
  <div>
    <h1>404!</h1>
  </div>
)

const routes = (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={ExpenseDashboardPage} />
      <Route path="/create" component={AddExpensePage} />
      <Route path="/edit" component={EditExpensePage} />
      <Route path="/help" component={HelpPage} />
      <Route component={NotFoundPage}/>
    </Switch>
  </BrowserRouter>
);

ReactDOM.render(routes, document.getElementById('app'))
