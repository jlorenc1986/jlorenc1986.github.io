import { combineReducers } from 'redux';
import {SWITCH_LOCALE} from '../constants/constants';

import {
  ReduxRouter,
  routerStateReducer,
  reduxReactRouter,
  pushState
} from 'redux-router';


function application(state={},action)
{


  switch (action.type) {
    case SWITCH_LOCALE:
      return [...state,
        {locale:action.payload}
      ];
      break;
    default:
      return state;
  }
}

const reducers = combineReducers({
application,
router:routerStateReducer
});

export default reducers;
