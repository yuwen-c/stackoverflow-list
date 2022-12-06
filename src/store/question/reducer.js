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
      const newList = [...new Set([...currentState.questionList, ...items])];
      return {
        ...currentState,
        isLoading: false,
        questionList: newList,
        hasMore: has_more,
      };
    case QUESTION_TYPES.FETCH_QUESTION_FAILED:
      return {
        ...currentState,
        error: payload,
      };
    case QUESTION_TYPES.NEXT_PAGE:
      return {
        ...currentState,
        pageNumber: currentState.pageNumber + 1,
      };
    case QUESTION_TYPES.BACK_TO_FIRST_PAGE:
      return {
        ...currentState,
        pageNumber: 1,
      };
    default:
      return currentState;
  }
};

export default questionReducer;
