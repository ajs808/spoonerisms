import React from "react";
import Button from "react-bootstrap/Button";

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
        <AddQuestionButton onClick={this.addQuestion} />
        <ol id="quesitonsList">
          {this.state.questions.map((question) => (
            <li id="oneQuestion"> {question} </li>
          ))}
        </ol>
      </div>
    );
  }
}

class AddQuestionButton extends React.Component {
  addQuestion = () => {
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
