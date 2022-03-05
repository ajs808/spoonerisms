import React from "react";
import Button from "react-bootstrap/Button";
import ListGroup from "react-bootstrap/ListGroup";
import Stack from "react-bootstrap/Stack";
import words from "../data/valid-common-4.txt";

import "bootstrap/dist/css/bootstrap.min.css";

var wordList = [];

class Output extends React.Component {
  state = {
    questions: [],
  };

  componentDidMount() {
    fetch(words)
      .then((r) => r.text())
      .then((text) => {
        wordList = text.split("\n");
        console.log(wordList);
      });
  }

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
    this.props.onClick(wordList[Math.floor(Math.random() * wordList.length)]);
  };

  render() {
    return (
      <div id="generateSpoonerismButton">
        <Button id="generateSpoonerismButton" onClick={this.generateSpoonerism}>
          Generate spoonerism
        </Button>
      </div>
    );
  }
}

export default Output;
