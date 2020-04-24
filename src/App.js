import React from 'react';
import Index from './views/index/Index'
import List from "./list/List"
import { BrowserRouter as Router, Route, Redirect, Switch } from 'react-router-dom'
function App() {
  return (
    <Router>
      <Switch>
        <Route path='/index' component={Index}></Route>
        <Route path="/list" component={List}></Route>
        <Redirect exact from="/" to="/index"></Redirect>
        <Route path="*" render={() => {
          return <h1>404</h1>
        }}></Route>
      </Switch>
    </Router>
  );
}

export default App;
