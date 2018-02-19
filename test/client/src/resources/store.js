import { createStore, applyMiddleware, compose } from 'redux';
import thunkMiddleware from 'redux-thunk';
import combineSectionReducers from 'combine-section-reducers';

import repository from './repository/repository.reducer.js';
import commit from './commit/commit.reducer.js';

const reducer = combineSectionReducers({
  repository, commit,
});

export default createStore(
  reducer,
  compose(
    applyMiddleware(thunkMiddleware),
    window.__REDUX_DEVTOOLS_EXTENSION__ ? window.__REDUX_DEVTOOLS_EXTENSION__() :
      noop => noop,
  ),
);
