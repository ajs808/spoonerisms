import Output from "./Output";
import Container from "react-bootstrap/Container";
import Stack from "react-bootstrap/Stack";
import "bootstrap/dist/css/bootstrap.min.css";

function Home() {
  return (
    <div>
      <Container fluid="xxl" className="py-3">
        <h1>Spooner</h1>
        <Stack gap={3}>
          <Output />
        </Stack>
      </Container>
    </div>
  );
}

export default Home;
