import { createStore, applyMiddleware,compose } from 'redux';
import rootReducer from './reducer';
import thunkMiddleware from 'redux-thunk'

const composeEnhacer=window.__REDUX_DEVTOOLS_EXTENSION__ || compose;

const store = createStore(
  rootReducer,
  composeEnhacer(applyMiddleware(thunkMiddleware))

  //window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
  //applyMiddleware(thunkMiddleware),
);

export default store;
