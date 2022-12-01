import { SEARCH_TYPES } from './types';

export const inputOnChange = (value) => {
  return {
    type: SEARCH_TYPES.CHANGE_INPUT,
    payload: value,
  };
};
