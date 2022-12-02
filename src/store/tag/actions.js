import { TAG_TYPES } from './types';
import axios from 'axios';

const fetchStart = () => {
  return {
    type: TAG_TYPES.FETCH_TAG_START,
  };
};

const fetchSuccess = (res) => {
  const tags = res.data.items;
  return {
    type: TAG_TYPES.FETCH_TAG_SUCCESS_WITH_DEFAULT_TAG,
    payload: tags,
  };
};

const fetchFailed = (error) => {
  return {
    type: TAG_TYPES.FETCH_TAG_FAILED,
    payload: error,
  };
};

/**
 * 這邊無法拿到dispatch，必須從React component裡面拿到後傳過來
 * thunk lets store accepts function as dispatch thing.
 */
export const fetchTags = (input) => async (dispatch) => {
  dispatch(fetchStart());
  axios({
    method: 'get',
    url: 'https://api.stackexchange.com/2.3/tags?order=desc&sort=popular&site=stackoverflow',
    params: {
      page: 1,
      pageSize: 10,
      inname: input,
    },
  })
    .then((res) => {
      dispatch(fetchSuccess(res));
    })
    .catch((error) => {
      dispatch(fetchFailed(error));
    });
};

export const selectTag = (tagName) => {
  return {
    type: TAG_TYPES.SELECT_TAG,
    payload: tagName,
  };
};
