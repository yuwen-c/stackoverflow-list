import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { selectedTagSelector } from '../../store/tag/selectors';
import { selectTag } from '../../store/tag/actions';
import { backToFirstPage } from '../../store/question/actions';

const Tag = ({ name }) => {
  const selectedTag = useSelector(selectedTagSelector);
  const dispatch = useDispatch();

  const handleTagChange = (name) => {
    dispatch(selectTag(name));
    dispatch(backToFirstPage(1));
  };

  return (
    <ol
      id={name}
      className={`list ba b--light-blue br3 pa2 bw1 ml1 tc ${
        selectedTag === name ? 'bg-light-blue' : null
      }`}
      onClick={() => handleTagChange(name)}
    >
      {name}
    </ol>
  );
};

export default Tag;
