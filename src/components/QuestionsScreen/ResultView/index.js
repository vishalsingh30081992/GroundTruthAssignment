import React from "react";
import { Container, Row, Button } from "react-bootstrap";

const ResultView = ({ response, dispatch }) => {
  const wrong = response.filter(val => val === false).length;
  const right = response.length - wrong;

  return (
    <React.Fragment>
      <Container className="quiz-container ">
        <Row>
          You attempted {right} correct questions & {wrong} questions
        </Row>
        <Row className="justify-content-md-center">
          <Button
            onClick={() =>
              dispatch({
                type: "setReset"
              })
            }
          >
            Restart
          </Button>
        </Row>
      </Container>
    </React.Fragment>
  );
};

export default ResultView;
