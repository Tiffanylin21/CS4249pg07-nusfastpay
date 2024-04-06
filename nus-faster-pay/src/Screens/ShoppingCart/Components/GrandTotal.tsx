import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

interface GrandTotalProps {
  cartTotal: number;
}

export default function GrandTotal({ cartTotal }: GrandTotalProps) {
  return (
    <div>
      <Container
        style={{
          border: "1px solid LightGray",
          padding: "50px 0px 10px 0px",
          margin: "20px 0px 20px 0px",
        }}
      >
        <Row>
          {/* image */}
          <Col xs={2}></Col>
          {/* title and name */}
          <Col></Col>
          {/* remove and price details */}
          <Col xs={4}>
            <Row>
              <Row>
                <Col
                  style={{
                    display: "flex",
                    justifyContent: "right",
                    padding: "0px",
                  }}
                >
                  Grand Total
                </Col>
                <Col
                  style={{
                    display: "flex",
                    justifyContent: "right",
                    padding: "0px",
                  }}
                >
                  ${cartTotal.toFixed(2)}
                </Col>
              </Row>
            </Row>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
