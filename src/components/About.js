import Container from "react-bootstrap/Container";
import "bootstrap/dist/css/bootstrap.min.css";

function About() {
  return (
    <div>
      <Container fluid="xxl" className="py-3">
        <h1>What is a spoonerism?</h1>
        <p>
          A spoonerism is an error in speech where letters from the beginnings
          of two words are swapped. For example, <b>(j)elly (b)eans</b> becomes{" "}
          <b>(b)elly (j)eans</b> as the first letter of each word is substituted
          for the other.
        </p>
        <p>
          Spoonerisms can involve <i>multigraph swaps</i> as well, where letter
          groups are swapped, e.g. <b>(cr)ushing (bl)ow</b> to{" "}
          <b>(bl)ushing (cr)ow</b>.
        </p>
        <p>
          Spelling can be adjusted as necessary—<b>(l)oving (sh)epherd</b> to{" "}
          <b>(sh)oving (l)eopard</b>—as can pronunciation—<b>(h)ead (b)and</b>{" "}
          to <b>(b)ead (h)and</b>.
        </p>
      </Container>
    </div>
  );
}

export default About;
