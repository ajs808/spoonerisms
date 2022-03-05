import React from "react";
import Button from "react-bootstrap/Button";
import ListGroup from "react-bootstrap/ListGroup";
import Stack from "react-bootstrap/Stack";
import words from "../data/valid-common-4.txt";

import "bootstrap/dist/css/bootstrap.min.css";

var wordList = [];
var wordPairs = [];
var spoonPairs = [];

function createPairs() {
  // let out1 = "";
  // let out2 = "";
  let out = [];
  for (let i = 0; i < wordList.length; i++) {
    for (let j = 0; j < wordList.length; j++) {
      if (i !== j) {
        console.log(wordList[i]);
        wordPairs.push([wordList[i], wordList[j]]);
      }
    }
  }

  for (let i = 0; i < wordPairs.length; i++) {
    console.log(wordPairs[i][0] + "-" + wordPairs[i][1]);
  }
}

class Output extends React.Component {
  state = {
    questions: [],
  };

  componentDidMount() {
    fetch(words)
      .then((r) => r.text())
      .then((text) => {
        wordList = text.split("\n");
        console.log(wordList.length);
      });
    console.log("mounted");
    createPairs();
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
          <ListGroup id="spoonerismsList">
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
