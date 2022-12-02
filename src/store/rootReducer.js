import { combineReducers } from 'redux';
import questionReducer from './question/reducer';
import searchReducer from './search/reducer';
import tagReducer from './tag/reducer';

export const rootReducer = combineReducers({
  search: searchReducer,
  tag: tagReducer,
  question: questionReducer,
});
