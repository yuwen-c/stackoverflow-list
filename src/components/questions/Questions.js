import React from 'react';
import Question from '../question/Question';

const Questions = ({ questionList }) => {
  return (
    <div>
      {questionList?.length > 0
        ? questionList.map((item) => {
            return <Question key={item.question_id} item={item} />;
          })
        : null}
    </div>
  );
};

export default Questions;
