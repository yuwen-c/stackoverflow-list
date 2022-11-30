import React from 'react';

const Question = ({ item }) => {
  const {
    title,
    score,
    answer_count,
    view_count,
    owner,
    link,
    accepted_answer_id,
  } = item;
  const { profile_image, display_name } = owner;

  const getAnswerSpan = () => {
    if (answer_count === 0) {
      return <span>{answer_count}</span>;
    } else {
      return (
        <span
          className={`ba b--green ${accepted_answer_id && 'bg-green white'}`}
        >
          {answer_count}
        </span>
      );
    }
  };

  return (
    <div className="flex bb b--black-40 pv2">
      <div className="w-90">
        <h3 className="mt0 mb2 fw4 tl">
          <a
            className="no-underline black"
            href={link}
            target="_blank"
            rel="noreferrer"
          >
            {title}
          </a>
          {title}
        </h3>
        <div className="flex justify-around">
          <div className="flex flex-column">
            <span className="dark-red">Score</span>
            <span className={score < 0 ? 'red' : null}>{score}</span>
          </div>
          <div className="flex flex-column">
            <span className="dark-red">Answers</span>
            {getAnswerSpan()}
          </div>
          <div className="flex flex-column">
            <span className="dark-red">Viewed</span>
            <span>{view_count}</span>
          </div>
        </div>
      </div>
      <div className="w-10 flex flex-column">
        <div className="br-100 overflow-hidden" style={{ width: '85px' }}>
          <img
            src={profile_image}
            width="90px"
            alt="avatar"
            className="flex"
            loading="lazy"
          />
        </div>
        <span>{display_name}</span>
      </div>
    </div>
  );
};

export default Question;
