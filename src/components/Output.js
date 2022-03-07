import React from "react";
import Button from "react-bootstrap/Button";
import ListGroup from "react-bootstrap/ListGroup";
import Stack from "react-bootstrap/Stack";
import words from "../data/valid-common-4.txt";

import "bootstrap/dist/css/bootstrap.min.css";

var wordPairs = [];

function createPairs(list) {
  for (let i = 0; i < list.length; i++) {
    for (let j = 0; j < list.length; j++) {
      if (
        i !== j &&
        list[i][0] != list[j][0] &&
        list[i].substring(1) != list[j].substring(1) &&
        list.includes(list[i].charAt(0) + list[j].substring(1)) &&
        list.includes(list[j].charAt(0) + list[i].substring(1))
      ) {
        wordPairs.push([list[i], list[j]]);
      }
    }
  }

  // for (let i = 0; i < wordPairs.length; i++) {
  //   console.log(wordPairs[i][0] + "-" + wordPairs[i][1]);
  // }
  console.log(wordPairs.length);
}

class Output extends React.Component {
  state = {
    questions: [],
  };

  componentDidMount() {
    let wordList = [];
    fetch(words)
      .then((r) => r.text())
      .then((text) => {
        wordList = text.split("\n");
        createPairs(wordList);
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
    console.log(wordPairs.length);
    let i = Math.floor(Math.random() * wordPairs.length);
    let w1 = wordPairs[i][0];
    let w2 = wordPairs[i][1];
    this.props.onClick(
      w1 +
        ":" +
        w2 +
        " > " +
        w2.charAt(0) +
        w1.substring(1) +
        ":" +
        w1.charAt(0) +
        w2.substring(1)
    );
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
