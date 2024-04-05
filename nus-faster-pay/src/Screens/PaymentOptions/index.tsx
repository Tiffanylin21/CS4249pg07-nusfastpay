import { useLocation, useNavigate } from "react-router-dom";
import payNowImage from './images/pay_now.jpg';
import converaImage from './images/convera.jpg';
import invoiceImage from './images/invoice.jpg';
import mastercardImage from './images/mastercard.jpg';
import CartBar from "../../Utils/components/CartBar";
import { useContext } from "react";
import { CartContext } from "../../Contexts/CartContext";

function PaymentOptions() {
  const navigate = useNavigate();
  const location = useLocation();
  const ivConfig = location.state;
  const { cart, calculateTotal } = useContext(CartContext);

  const handleImageClick = () => {
    navigate("/customer-details", { state: ivConfig });
  };

  const navToShoppingCart = () => {
    navigate("/shopping-cart", { state: { ivConfig } });
  }

  return (
    <div>
        <CartBar cartSize={cart.size} totalPayment={calculateTotal()} navToShoppingCart={navToShoppingCart} />
        <p>Payment Options Screen</p>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '20px' }}>
          <div style={{ flex: 1, minWidth: '150px', maxWidth: '250px' }}>
            <img
              src={payNowImage}
              alt="Pay Now"
              onClick={handleImageClick}
              style={{ width: '100%', height: 'auto', objectFit: 'contain', cursor: 'pointer' }}
            />
          </div>
          <div style={{ flex: 1, minWidth: '150px', maxWidth: '250px' }}>
            <img src={converaImage} alt="Convera" style={{ width: '100%', height: 'auto', objectFit: 'contain' }} />
          </div>
          <div style={{ flex: 1, minWidth: '150px', maxWidth: '250px' }}>
            <img src={invoiceImage} alt="Invoice" style={{ width: '100%', height: 'auto', objectFit: 'contain' }} />
          </div>
          <div style={{ flex: 1, minWidth: '150px', maxWidth: '250px' }}>
            <img src={mastercardImage} alt="Mastercard" style={{ width: '100%', height: 'auto', objectFit: 'contain' }} />
          </div>
        </div>
        {/* we comment out next button in case we need it next time */}
        {/* <button onClick={handleImageClick}>Next</button> */}
    </div>
  );
}

export default PaymentOptions;
