import { useEffect, useState, useRef, useCallback } from 'react';
import './App.css';
import 'tachyons';
import Search from './components/search/Search';
import Tags from './components/tags/Tags';
import Questions from './components/questions/Questions';
import useQuestionFetch from './hooks/useQuestionFetch';

function App() {
  // const [input, setInput] = useState('');
  const [tagList, setTagList] = useState([]);
  const [selected, setSelected] = useState('');
  const [pageNumber, setPageNumber] = useState(1);
  const loader = useRef(null);

  const { questionList, isLoading, hasMore } = useQuestionFetch(
    selected,
    pageNumber
  );

  const handleObserver = useCallback(
    (entries) => {
      // console.log('handleObserver');
      const target = entries[0];
      if (target.isIntersecting) {
        // console.log('isIntersecting');
        if (hasMore) {
          setPageNumber((prev) => prev + 1);
        }
      }
    },
    [hasMore]
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
    <div className="App">
      <Search />
      <div className="mt5">
        <Tags />
        <Questions questionList={questionList} />
        <div ref={loader} className="pv1" />
        {isLoading && <p>Loading...</p>}
      </div>
    </div>
  );
}

export default App;
