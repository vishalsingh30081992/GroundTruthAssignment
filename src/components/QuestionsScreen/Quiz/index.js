import React, { useReducer } from "react";
import { Container } from "react-bootstrap";
import Question from "../Question";
import ResultView from "../ResultView";

import "./quiz.css";

const Quiz = ({ data = {} }) => {
  const { results = [] } = data;

  const [state, dispatch] = useReducer(reducer, { questions: {} });

  const allAnswered = results.length === Object.keys(state.questions).length;

  return results.length && allAnswered ? (
    <ResultView response={Object.values(state.questions)} dispatch={dispatch} />
  ) : (
    <React.Fragment>
      <Container className="quiz-container ">
        <p>
          <b>Please answer the questions below : </b>
        </p>
        {results.map((question, index) => {
          return (
            <Question
              questionId={index + 1}
              question={question}
              dispatch={dispatch}
              disabled={Object.keys(state.questions).includes(`${index + 1}`)}
            />
          );
        })}
      </Container>
    </React.Fragment>
  );
};

const reducer = (state = {}, action) => {
  const { payload } = action;
  switch (action.type) {
    case "setUserResponse":
      return {
        ...state,
        questions: {
          ...state.questions,
          [`${payload.questionId}`]: payload.correct
        }
      };
    case "setReset":
      return {
        ...state,
        questions: {}
      };
    default:
      throw new Error();
  }
};

export default Quiz;
