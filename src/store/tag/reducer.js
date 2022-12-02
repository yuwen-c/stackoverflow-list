import { TAG_TYPES } from './types';

const INITIAL_STATE = {
  isLoading: false,
  tagList: [],
  selectedTag: '',
  error: null,
};

const tagReducer = (currentState = INITIAL_STATE, action = {}) => {
  const { type, payload } = action;
  switch (type) {
    case TAG_TYPES.FETCH_TAG_START:
      return {
        ...currentState,
        isLoading: true,
        tagList: [],
        selectedTag: '',
        error: null,
      };
    case TAG_TYPES.FETCH_TAG_SUCCESS_WITH_DEFAULT_TAG:
      return {
        ...currentState,
        isLoading: false,
        tagList: payload,
        selectedTag: payload[0].name,
      };
    case TAG_TYPES.FETCH_TAG_FAILED:
      return {
        ...currentState,
        isLoading: false,
        error: payload,
      };
    case TAG_TYPES.SELECT_TAG:
      return {
        ...currentState,
        selectedTag: payload,
      };
    default:
      return currentState;
  }
};

export default tagReducer;
