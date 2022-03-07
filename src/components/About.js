import Container from "react-bootstrap/Container";
import "bootstrap/dist/css/bootstrap.min.css";

var Latex = require("react-latex");

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
          to <b>(b)ead (h)and</b>.{" "}
        </p>
        <h1>How does this app generate spoonerisms?</h1>
        <p>
          Let's start with the simpler type: <i>orthographic</i> or{" "}
          <i>spelling-based</i> spoonerisms, as opposed to{" "}
          <i>pronunciation-based</i> spoonerisms (this app only generates four
          letter orthographic spoonerisms from a select set of words, for now at
          least). Out of our examples, only the third is not an orthographic
          spoonerism, so no shoving leopards.
        </p>
        <p>
          And from the simpler of the two types let's dumb it down even further
          and only concern ourselves with single letter swaps (examples one and
          four). Our aim is to find pairs of real words <Latex>$s$</Latex> and{" "}
          <Latex>$p$</Latex>, where <Latex>$(p[0] + s[1:])\in R$</Latex> and{" "}
          <Latex>$(s[0] + p[1:])\in R$</Latex>, where <Latex>$R$</Latex> is our
          set of real words. If <Latex>$R$</Latex> has length <Latex>$n$</Latex>{" "}
          and we have no prior set optimizations, each pair validation will take
          take up to <Latex>$2n$</Latex> operations (comparing one word to
          another runs in <Latex>$O(1)$</Latex> time), and run in{" "}
          <Latex>$O(n)$</Latex> time.
        </p>
        <p>
          If we want to check every single possible word pair (again,
          brute-forcing for now) we will have to generate{" "}
          <Latex>$n(n-1) \div 2$</Latex>, with each pair's validation taking up
          to <Latex>$2n$</Latex> operations, we're already looking at a time
          complexity of <Latex>$O(n^3)$</Latex> (currently working on
          optimization).
        </p>
        {/* <p>
          This is where <i>prefix trees</i> become useful!
        </p> */}
      </Container>
    </div>
  );
}

export default About;
