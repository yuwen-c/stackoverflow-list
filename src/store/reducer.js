import { TYPES } from './types';

const INITIAL_STATE = {
  input: '',
  tagList: [],
  selected: '',
  questionList: [],
  pageNumbers: 1,
};

const reducer = (init = INITIAL_STATE, action = {}) => {
  const { type, payload } = action;
  switch (type) {
    case TYPES.CHANGE_INPUT:
      return {
        ...init,
        input: payload,
      };

    case TYPES.SELECT_TAG:
      return {
        input: '',
        tagList: [],
        selected: '',
        questionList: [],
        pageNumbers: 1,
      };

    case TYPES.SCROLL_TO_BUTTON:
      return {
        input: '',
        tagList: [],
        selected: '',
        questionList: [],
        pageNumbers: 1,
      };

    default:
      return null;
  }
};

export default reducer;
