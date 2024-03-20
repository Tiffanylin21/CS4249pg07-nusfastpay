import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { useContext } from "react";
import { CartContext } from "../../../Contexts/CartContext";

export default function GrandTotal() {
  const { calculateTotal } = useContext(CartContext);

  return (
    <Container>
      <Row>
        <Col></Col>
        <Col></Col>
        <Col>Grand Total</Col>
        <Col>${calculateTotal().toFixed(2)}</Col>
      </Row>
    </Container>
  );
}
