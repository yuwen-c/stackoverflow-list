import React from 'react';

const Search = ({ handleInputChange }) => {
  return (
    <div className="pv2 flex w-80 justify-center fixed bg-white mw8">
      <input
        onChange={handleInputChange}
        className="ba b--black-20 pa2 mb2 db w-60"
      />
      <span
        className=" b--black-20 pa2 mb2 db bt br bb"
        onClick={handleInputChange}
      >
        search
      </span>
    </div>
  );
};

export default Search;
