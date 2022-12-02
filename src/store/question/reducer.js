import { QUESTION_TYPES } from './types';

const INITIAL_STATE = {
  pageNumber: 1,
  questionList: [],
  isLoading: false,
  error: null,
  hasMore: false,
};

const questionReducer = (currentState = INITIAL_STATE, action = {}) => {
  const { type, payload } = action;
  switch (type) {
    case QUESTION_TYPES.FETCH_QUESTION_START:
      return {
        ...currentState,
        isLoading: true,
      };
    case QUESTION_TYPES.FETCH_QUESTION_SUCCESS:
      const { has_more, items } = payload;
      return {
        ...currentState,
        isLoading: false,
        questionList: items,
        hasMore: has_more,
      };
    case QUESTION_TYPES.FETCH_QUESTION_FAILED:
      return {
        ...currentState,
        error: payload,
      };
    case QUESTION_TYPES.CHANGE_PAGE_NUMBER:
      return {
        ...currentState,
        pageNumber: payload,
      };
    default:
      return currentState;
  }
};

export default questionReducer;
