import React, { useEffect, useRef, useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Question from '../question/Question';
import { fetchQuestionList, nextPage } from '../../store/question/actions';
import {
  questionListSelector,
  isQuestionLoadingSelector,
  hasMoreSelector,
} from '../../store/question/selectors';
import { selectedTagSelector } from '../../store/tag/selectors';

const Questions = () => {
  const dispatch = useDispatch();
  const loader = useRef(null);

  const questionList = useSelector(questionListSelector);
  const selectedTag = useSelector(selectedTagSelector);
  const isLoading = useSelector(isQuestionLoadingSelector);
  const hasMore = useSelector(hasMoreSelector);

  useEffect(() => {
    if (selectedTag.length > 0) {
      dispatch(fetchQuestionList());
    }
  }, [dispatch, selectedTag]);

  const handleObserver = useCallback(
    (entries) => {
      const target = entries[0];
      if (target.isIntersecting) {
        if (hasMore) {
          dispatch(nextPage());
          dispatch(fetchQuestionList());
        }
      }
    },
    [hasMore, dispatch]
  );

  useEffect(() => {
    const option = {
      root: null,
      rootMargin: '20px',
      threshold: 0,
    };
    const observer = new IntersectionObserver(handleObserver, option);
    if (loader.current) observer.observe(loader.current);
  }, [handleObserver]);

  return (
    <div>
      {questionList?.length > 0
        ? questionList.map((item) => {
            return <Question key={item.question_id} item={item} />;
          })
        : null}
      <div ref={loader} className="pv1" />
      {isLoading && <p>Loading...</p>}
    </div>
  );
};

export default Questions;
