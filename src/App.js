import './App.css';
import 'tachyons';
import { useEffect, useState, useRef, useCallback } from 'react';
import Search from './components/search/Search';
import Tags from './components/tags/Tags';
import Questions from './components/questions/Questions';
import useQuestionFetch from './hooks/useQuestionFetch';
import axios from 'axios';

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

  // useEffect(() => {
  //   // let cancel;
  //   axios({
  //     method: 'get',
  //     url: 'https://api.stackexchange.com/2.3/tags?order=desc&sort=popular&site=stackoverflow',
  //     params: {
  //       page: 1,
  //       pagesize: 10,
  //       inname: input,
  //       // cancelToken: new axios.CancelToken((c) => (cancel = c)),
  //     },
  //   })
  //     .then((res) => {
  //       setTagList(res.data.items);
  //       setSelected(res.data.items[0]?.name);
  //       setPageNumber(1);
  //     })
  //     .catch((error) => console.log(error));
  //   // return () => cancel();
  // }, [input]);

  // todo: 送出的按鈕不能用event
  // const handleInputChange = (event) => {
  //   setInput(event.target.value);
  //   setPageNumber(1);
  // };

  const handleTagChange = (name) => {
    setSelected(name);
    setPageNumber(1);
  };

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
        <Tags
          tagList={tagList}
          handleTagChange={handleTagChange}
          selected={selected}
        />
        <Questions questionList={questionList} />
        <div ref={loader} className="pv1" />
        {isLoading && <p>Loading...</p>}
      </div>
    </div>
  );
}

export default App;
