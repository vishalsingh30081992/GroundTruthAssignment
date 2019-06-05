import React from "react";
import { Card } from "react-bootstrap";
import "./question.css";

const Question = ({ questionId, question, dispatch, disabled }) => {
  const createdOptions = createOptions(
    questionId,
    [question.correct_answer, ...question.incorrect_answers],
    0
  );
  const createMarkUp = () => ({
    __html: `${questionId}. ${question.question}`
  });
  return (
    <Card>
      <Card.Body>
        <div dangerouslySetInnerHTML={createMarkUp()} />
        <Options
          key={questionId}
          questionId={questionId}
          disabled={disabled}
          options={createdOptions.options}
          handleOptionSelect={value => {
            dispatch({
              type: "setUserResponse",
              payload: {
                questionId: `${questionId}`,
                correct: createdOptions.correct === value
              }
            });
          }}
        />
      </Card.Body>
    </Card>
  );
};

const createOptions = (questionId, optionsReq = [], correctIndex) => {
  let correct = null;
  const options = {};
  for (let index = 0; index < optionsReq.length; index++) {
    const option = optionsReq[index];
    const uuid = `${questionId}-${index}`;
    if (index === correctIndex) {
      correct = uuid;
    }
    options[uuid] = option;
  }
  return {
    options,
    correct
  };
};

const Options = ({ questionId, options, handleOptionSelect, disabled }) => {
  return (
    <React.Fragment>
      {Object.keys(options).map(key => (
        <>
          <input
            key={key}
            type="radio"
            disabled={disabled}
            name={questionId}
            value={key}
            className="question-radio"
            onChange={e => handleOptionSelect(e.target.value)}
          />
          {options[key]}
        </>
      ))}
    </React.Fragment>
  );
};

export default Question;
