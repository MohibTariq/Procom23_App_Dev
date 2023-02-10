import { combineReducers, applyMiddleware, createStore} from 'redux';
import userReducer from './reducers/user';
import thunk from 'redux-thunk';
import { getAsyncStorage } from './actions/user';
 
const rootReducer = combineReducers({
  user: userReducer,
});
 
export const store = createStore(rootReducer, applyMiddleware(thunk));
store.dispatch(getAsyncStorage());
