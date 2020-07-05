import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux;';

function App() {
  const store= createStore()
  return (
    <Provider store={store}>
      <Router>
        <div className="App text-4xl ">
          <header>Hello ther</header>
          <Switch>
            <Route exact path="/" component={MoviesList} />
            <Route path="/:id" component={MovieDetail} />
          </Switch>
        </div>
      </Router>
    </Provider>
  );
}

export default App;
