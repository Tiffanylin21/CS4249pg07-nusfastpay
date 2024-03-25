import { useContext } from "react";
import { PaymentItem } from "../../../Utils/Types";
import { CartContext } from "../../../Contexts/CartContext";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import image from "../Images/image.jpeg";
import { OrangeButton } from "../../../Utils/components/OrangeButton";

interface CartItemCardProps {
  item: PaymentItem;
  updateItemsShown: () => void;
}

export default function CartItemCard({
  item,
  updateItemsShown,
}: CartItemCardProps) {
  const { removeFromCart } = useContext(CartContext);

  return (
    <div
      style={{
        borderBottom: "1px solid LightGray",
        padding: "10px 0px 10px 0px",
      }}
    >
      <Container>
        <Row>
          {/* image */}
          <Col xs={2}>
            <img
              src={image}
              alt="Placeholder CartItemCard"
              style={{
                width: "100%",
                height: "auto",
                padding: "30px 0px 0px 0px",
              }}
            />
          </Col>
          {/* title and name */}
          <Col>
            <Row>{item.title}</Row>
            <Row style={{ padding: "10px 0px 0px 20px" }}>
              Name: MARY LIM (A0000000Z)
            </Row>
          </Col>
          {/* remove and price details */}
          <Col xs={4}>
            <Row>
              <Row style={{ padding: "0px 0px 10px 0px" }}>
                <Col></Col>
                <Col
                  style={{
                    display: "flex",
                    justifyContent: "right",
                  }}
                >
                  <OrangeButton
                    onClick={() => {
                      removeFromCart(item.title);
                      updateItemsShown();
                    }}
                  >
                    Remove
                  </OrangeButton>
                </Col>
              </Row>
              <Row>
                <Col
                  style={{
                    display: "flex",
                    justifyContent: "right",
                    padding: "10px 0px 0px 0px",
                  }}
                >
                  Quantity
                </Col>
                <Col
                  style={{
                    display: "flex",
                    justifyContent: "right",
                    padding: "10px 0px 0px 0px",
                  }}
                >
                  1
                </Col>
              </Row>
              <Row>
                <Col
                  style={{
                    display: "flex",
                    justifyContent: "right",
                    padding: "10px 0px 0px 0px",
                  }}
                >
                  Item: Amount
                </Col>
                <Col
                  style={{
                    display: "flex",
                    justifyContent: "right",
                    padding: "10px 0px 0px 0px",
                  }}
                >
                  {item.price}
                </Col>
              </Row>
              <Row>
                <Col
                  style={{
                    display: "flex",
                    justifyContent: "right",
                    padding: "10px 0px 0px 0px",
                  }}
                >
                  Total
                </Col>
                <Col
                  style={{
                    display: "flex",
                    justifyContent: "right",
                    padding: "10px 0px 0px 0px",
                  }}
                >
                  {item.price}
                </Col>
              </Row>
            </Row>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
