import { useEffect, useState } from 'react';
import axios from 'axios';

const useQuestionFetch = (selected, pageNumber) => {
  const [isLoading, setIsLoading] = useState(false);
  const [questionList, setQuestionList] = useState([]);
  const [hasMore, setHasMore] = useState();
  console.log('useQuestionFetch');

  useEffect(() => {
    setQuestionList([]);
  }, [selected]);

  useEffect(() => {
    setIsLoading(true);
    axios({
      method: 'get',
      url: 'https://api.stackexchange.com/2.3/questions?order=desc&sort=activity&site=stackoverflow',
      params: {
        tagged: selected,
        page: pageNumber,
        pagesize: 20,
      },
    })
      .then((res) => {
        setQuestionList((prev) => {
          if (prev?.length === 0) {
            return [...res.data.items];
          } else if (
            prev.filter(
              (item) => item.question_id === res.data.items[0]?.question_id
            ).length === 0
          ) {
            return [...prev, ...res.data.items];
          } else {
            return [...prev];
          }
        });
        setHasMore(res.data.has_more);
        setIsLoading(false);
      })
      .catch((error) => console.log(error));
  }, [selected, pageNumber]);

  return {
    questionList,
    isLoading,
    hasMore,
  };
};

export default useQuestionFetch;
