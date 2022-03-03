import Button from "react-bootstrap/Button";
import Questions from "./Questions";
import Container from "react-bootstrap/Container";
import Stack from "react-bootstrap/Stack";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import "bootstrap/dist/css/bootstrap.min.css";

function Home() {
  return (
    <div>
      <Stack gap={3}>
        <Navbar bg="light" expand="lg">
          <Container>
            <Navbar.Brand href="#home">Home</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="me-auto">
                <Nav.Link href="#about">About</Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
        <Container>
          <h1>Spoonerism</h1>
          <p>Lorem ipsum dolor sit amet, consectetaur adipisicing elit, s</p>
          <Stack gap={3}>
            <div>
              <Button variant="primary">Generate spoonerism</Button>
            </div>
            <Questions />
          </Stack>
        </Container>
      </Stack>
    </div>
  );
}

export default Home;
