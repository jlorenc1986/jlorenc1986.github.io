import { createStore, applyMiddleware, combineReducers, compose} from 'redux';
import thunkMiddleware from 'redux-thunk';
import createLogger from 'redux-logger';
import reducers from '../reducers/application';
import createBrowserHistory from 'history/lib/createBrowserHistory';
import createHashHistory from 'history/lib/createHashHistory';
import { reduxReactRouter, routerStateReducer } from 'redux-router';
// Redux DevTools store enhancers
import { devTools, persistState } from 'redux-devtools';

const loggerMiddleware = createLogger();

const createHistory = process.env.NODE_ENV === 'production' ? createHashHistory : createBrowserHistory;



export default function configureStore(initialState) {

  const store = compose(
    applyMiddleware(thunkMiddleware, loggerMiddleware),
    reduxReactRouter({createHistory}),
    devTools(),
  )(createStore)(reducers, initialState);
  return store;
}
