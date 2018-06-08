import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Goodbye from './Goodbye';
import Hello from './Hello';
import NotFound from './NotFound';

const domWrapper = document.getElementById('react-app');

const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path='/' component={Hello} />
        <Route path='/good-bye' component={Goodbye} />
        <Route component={NotFound} />
      </Switch>
    </BrowserRouter>
  );
};

ReactDOM.render(<App />, domWrapper);
