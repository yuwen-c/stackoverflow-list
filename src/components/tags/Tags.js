import React from 'react';
import Tag from '../tag/tag';

const Tags = ({ tagList, handleTagChange, selected }) => {
  return (
    <div>
      <h2 className="tl">Trending</h2>
      <ul className="flex justify-start flex-wrap">
        {tagList.map((item) => {
          const { name } = item;
          return (
            <Tag
              key={name}
              name={name}
              selected={selected}
              handleTagChange={handleTagChange}
            />
          );
        })}
      </ul>
    </div>
  );
};

export default Tags;
