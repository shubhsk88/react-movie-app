import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';

import MovieList from './movies/MovieList';
import MovieDetail from './movies/MovieDetail';
import rootReducer from './rootReducer';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import { composeWithDevTools } from 'redux-devtools-extension';

const middleware = [logger, thunk];

const App = () => {
  const store = createStore(
    rootReducer,
    {},
    composeWithDevTools(applyMiddleware(...middleware))
  );

  return (
    <Provider store={store}>
      <Router>
        <div className="App text-4xl ">
          <header>
            <Link to="/">hello there</Link>
          </header>
          <Switch>
            <Route exact path="/" component={MovieList} />
            <Route path="/:id" component={MovieDetail} />
          </Switch>
        </div>
      </Router>
    </Provider>
  );
};

export default App;
