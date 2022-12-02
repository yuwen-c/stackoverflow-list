import axios from 'axios';
import { QUESTION_TYPES } from './types';

export const changePageNumber = (pageNumber) => {
  return {
    type: QUESTION_TYPES.CHANGE_PAGE_NUMBER,
    payload: pageNumber,
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

export const fetchQuestionList = (tag, pageNumber) => async (dispatch) => {
  dispatch(fetchStart());
  axios({
    method: 'get',
    url: 'https://api.stackexchange.com/2.3/questions?order=desc&sort=activity&site=stackoverflow',
    params: {
      tagged: tag,
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
