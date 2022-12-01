import { SEARCH_TYPES } from './types';

const INITIAL_STATE = {
  input: '',
};

const searchReducer = (currentState = INITIAL_STATE, action = {}) => {
  const { type, payload } = action;
  switch (type) {
    case SEARCH_TYPES.CHANGE_INPUT:
      return {
        ...currentState,
        input: payload,
      };

    default:
      return currentState;
  }
};

export default searchReducer;
