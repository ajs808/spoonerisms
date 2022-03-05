import React from "react";
import Button from "react-bootstrap/Button";
import ListGroup from "react-bootstrap/ListGroup";
import Stack from "react-bootstrap/Stack";

import "bootstrap/dist/css/bootstrap.min.css";

class Output extends React.Component {
  state = {
    questions: [],
  };

  generateSpoonerism = (question) => {
    this.setState((prevState) => ({
      questions: [...prevState.questions, question],
    }));
  };

  render() {
    return (
      <div id="questions">
        <Stack gap={3}>
          <GenerateSpoonerismButton onClick={this.generateSpoonerism} />
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

class GenerateSpoonerismButton extends React.Component {
  generateSpoonerism = () => {
    console.log("generating spoonerism");
    this.props.onClick(Math.random().toString(36).substring(7) + "?");
  };

  render() {
    return (
      <div id="generateSpoonerismButton">
        <Button id="generateSpoonerismButton" onClick={this.generateSpoonerism}>
          Add Question
        </Button>
      </div>
    );
  }
}

export default Output;
