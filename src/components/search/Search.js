import React from 'react';
import { inputOnChange } from '../../store/search/actions';
import { fetchTags } from '../../store/tag/actions';
import { useDispatch, useSelector } from 'react-redux';
import { inputSelector } from '../../store/search/selectors';

const Search = () => {
  const dispatch = useDispatch();
  const input = useSelector(inputSelector);

  const handleInputChange = (event) => {
    const value = event.target.value;
    dispatch(inputOnChange(value));
    dispatch(fetchTags(value));
  };
  return (
    <div className="pv2 flex w-80 justify-center fixed bg-white mw8">
      <input
        onChange={handleInputChange}
        className="ba b--black-20 pa2 mb2 db w-60"
        value={input}
      />
      {/* <span
        className=" b--black-20 pa2 mb2 db bt br bb"
        onClick={handleInputChange}
      >
        search
      </span> */}
    </div>
  );
};

export default Search;
