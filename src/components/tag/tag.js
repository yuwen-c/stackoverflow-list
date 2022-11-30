import React from 'react';

const Tag = ({ name, handleTagChange, selected }) => {
  return (
    <ol
      id={name}
      className={`list ba b--light-blue br3 pa2 bw1 ml1 tc ${
        selected === name ? 'bg-light-blue' : null
      }`}
      onClick={() => handleTagChange(name)}
    >
      {name}
    </ol>
  );
};

export default Tag;
