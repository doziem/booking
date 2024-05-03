import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';

const SearchAvailableRoom = () => {
  return (
    <Container className="p-4">
      <Row>
        <Col sm={4}>1 of 2</Col>
        <Col sm={8}>
          <Form>
            <Row className="mb-4">
              <Form.Group as={Col} controlId="formGridEmail">
                <Form.Control type="email" placeholder="Enter email" />
              </Form.Group>

              <Form.Group as={Col} controlId="formGridPassword">
                <Form.Control type="password" placeholder="Password" />
              </Form.Group>
            </Row>
            <Row className="mb-4">
              <Form.Group as={Col} controlId="formGridState">
                <Form.Select defaultValue="Choose...">
                  <option>Choose...</option>
                  <option>...</option>
                </Form.Select>
              </Form.Group>

              <Form.Group as={Col} controlId="formGridZip">
                <Form.Select defaultValue="Choose...">
                  <option>Choose...</option>
                  <option>...</option>
                </Form.Select>
              </Form.Group>
            </Row>
            <Button variant="primary" type="submit">
              Submit
            </Button>
          </Form>
        </Col>
      </Row>
    </Container>
  );
}

export default SearchAvailableRoom
