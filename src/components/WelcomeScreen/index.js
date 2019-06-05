import React from "react";
import { Container, Row, Button } from "react-bootstrap";
import { withRouter } from "react-router-dom";

const WelcomeScreen = props => {
  return (
    <Container>
      <Row className="justify-content-md-center">
        <Button onClick={() => props.history.push("/questions")}>
          Click Here to Start Quiz
        </Button>
      </Row>
    </Container>
  );
};
export default withRouter(WelcomeScreen);
