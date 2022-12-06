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

// check if fetch the same page
const fetchSuccess = (res, questionList) => {
  const { has_more, items } = res.data;
  let payload;
  if (questionList.length === 0) {
    payload = {
      questionList: items,
      hasMore: has_more,
    };
  } else if (
    questionList.filter((item) => item.question_id === items[0]?.question_id)
      .length === 0
  ) {
    const newList = [...questionList, ...items];
    payload = {
      questionList: newList,
      hasMore: has_more,
    };
  } else {
    payload = {
      questionList,
      hasMore: has_more,
    };
  }
  return {
    type: QUESTION_TYPES.FETCH_QUESTION_SUCCESS,
    payload,
  };
};

const fetchFailed = (error) => {
  return {
    type: QUESTION_TYPES.FETCH_QUESTION_FAILED,
    payload: error,
  };
};

export const fetchQuestionList = () => async (dispatch, getState) => {
  const { pageNumber, questionList } = getState().question;
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
      dispatch(fetchSuccess(res, questionList));
    })
    .catch((error) => {
      dispatch(fetchFailed(error));
    });
};
