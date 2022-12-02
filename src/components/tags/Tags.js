import React from 'react';
import { useSelector } from 'react-redux';
import Tag from '../tag/tag';
import { tagListSelector } from '../../store/tag/selectors';

const Tags = () => {
  const tagList = useSelector(tagListSelector);

  return (
    <div>
      <h2 className="tl">Trending</h2>
      <ul className="flex justify-start flex-wrap">
        {tagList.map((item) => {
          const { name } = item;
          return <Tag key={name} name={name} />;
        })}
      </ul>
    </div>
  );
};

export default Tags;
