import { combineReducers } from 'redux';
import searchReducer from './search/reducer';

export const rootReducer = combineReducers({
  search: searchReducer,
});
