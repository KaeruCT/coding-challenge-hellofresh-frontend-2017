import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { Provider } from 'unstated';
import LoginPage from './LoginPage.jsx';
import RecipesPage from './RecipesPage.jsx';

const App = () => (
  <Provider>
    <BrowserRouter>
      <Switch>
        <Route path="/recipes" component={RecipesPage} />
        <Route component={LoginPage} />
      </Switch>
    </BrowserRouter>
  </Provider>
);

export default App;
