import Container from "react-bootstrap/Container";
import "bootstrap/dist/css/bootstrap.min.css";

function NoPage() {
  return (
    <div>
      <Container fluid="xxl" className="py-3">
        <h1>Page not found :/</h1>
      </Container>
    </div>
  );
}

export default NoPage;
