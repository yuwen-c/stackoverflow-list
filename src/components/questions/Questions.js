import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Question from '../question/Question';
import { fetchQuestionList } from '../../store/question/actions';
import {
  questionListSelector,
  isQuestionLoadingSelector,
  hasMoreSelector,
  pageNumberSelector,
} from '../../store/question/selectors';
import { selectedTagSelector } from '../../store/tag/selectors';

const Questions = () => {
  console.log('question component re-runs');
  const dispatch = useDispatch();
  const questionList = useSelector(questionListSelector);
  const selectedTag = useSelector(selectedTagSelector);
  const isLoading = useSelector(isQuestionLoadingSelector);
  const hasMore = useSelector(hasMoreSelector);
  const pageNumber = useSelector(pageNumberSelector);

  useEffect(() => {
    dispatch(fetchQuestionList(selectedTag, 1));
  }, [dispatch, selectedTag]);

  return (
    <div>
      {questionList?.length > 0
        ? questionList.map((item) => {
            return <Question key={item.question_id} item={item} />;
          })
        : null}
    </div>
  );
};

export default Questions;
