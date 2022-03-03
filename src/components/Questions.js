import React from "react";
import Button from "react-bootstrap/Button";
import ListGroup from "react-bootstrap/ListGroup";
import Stack from "react-bootstrap/Stack";

import "bootstrap/dist/css/bootstrap.min.css";

class Questions extends React.Component {
  state = {
    questions: [],
  };

  addQuestion = (question) => {
    this.setState((prevState) => ({
      questions: [...prevState.questions, question],
    }));
  };

  render() {
    return (
      <div id="questions">
        <Stack gap={3}>
          <AddQuestionButton onClick={this.addQuestion} />
          <ListGroup id="quesitonsList">
            {this.state.questions.map((question) => (
              <ListGroup.Item id="oneQuestion"> {question} </ListGroup.Item>
            ))}
          </ListGroup>
        </Stack>
      </div>
    );
  }
}

class AddQuestionButton extends React.Component {
  addQuestion = () => {
    console.log("adding question");
    this.props.onClick(Math.random().toString(36).substring(7) + "?");
  };

  render() {
    return (
      <div id="addQuestionButton">
        <Button id="addQuestionButton" onClick={this.addQuestion}>
          Add Question
        </Button>
      </div>
    );
  }
}

export default Questions;
