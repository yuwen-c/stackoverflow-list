import { TYPES } from './types';

export const handleInputChange = (event) => {
  return {
    type: TYPES.CHANGE_INPUT,
    payload: event.target.value,
  };
};
