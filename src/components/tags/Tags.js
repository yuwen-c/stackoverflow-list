import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Tag from '../tag/tag';
import { tagListSelector } from '../../store/tag/selectors';
import { fetchTags } from '../../store/tag/actions';

const Tags = () => {
  const tagList = useSelector(tagListSelector);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchTags(''));
  }, [dispatch]);

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
