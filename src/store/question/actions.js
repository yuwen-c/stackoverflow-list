import axios from 'axios';
import { QUESTION_TYPES } from './types';

export const nextPage = () => {
  return {
    type: QUESTION_TYPES.NEXT_PAGE,
  };
};

export const backToFirstPage = () => {
  return {
    type: QUESTION_TYPES.BACK_TO_FIRST_PAGE,
  };
};

const fetchStart = () => {
  return {
    type: QUESTION_TYPES.FETCH_QUESTION_START,
  };
};

const fetchSuccess = (res) => {
  return {
    type: QUESTION_TYPES.FETCH_QUESTION_SUCCESS,
    payload: res,
  };
};

const fetchFailed = (error) => {
  return {
    type: QUESTION_TYPES.FETCH_QUESTION_FAILED,
    payload: error,
  };
};

export const fetchQuestionList = () => async (dispatch, getState) => {
  const { pageNumber } = getState().question;
  const { selectedTag } = getState().tag;

  dispatch(fetchStart());
  axios({
    method: 'get',
    url: 'https://api.stackexchange.com/2.3/questions?order=desc&sort=activity&site=stackoverflow',
    params: {
      tagged: selectedTag,
      page: pageNumber,
      pagesize: 20,
    },
  })
    .then((res) => {
      dispatch(fetchSuccess(res.data));
    })
    .catch((error) => {
      dispatch(fetchFailed(error));
    });
};
