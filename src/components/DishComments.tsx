import { Container, Row, Col, ListGroup } from "react-bootstrap";

export interface CommentsData {
  id: number;
  rating: number;
  comment: string;
  author: string;
  date: string;
}

const DishComments = ({ selectedPasta }: any) => (
  <Container>
    <Row className="justify-content-center mt-3">
      <Col xs={12} md={6}>
        <ListGroup>
          {selectedPasta ? (
            selectedPasta.comments.map((c: CommentsData) => (
              <ListGroup.Item key={c.id}>{c.comment}</ListGroup.Item>
            ))
          ) : (
            <p>Click on a dish to read its comments</p>
          )}
        </ListGroup>
      </Col>
    </Row>
  </Container>
);

export default DishComments;
