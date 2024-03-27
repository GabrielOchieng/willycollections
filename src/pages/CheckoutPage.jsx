import React, { useContext, useState } from "react";

import {
  FaMoneyBillAlt,
  FaPaypal,
  FaCreditCard,
  FaShippingFast,
} from "react-icons/fa"; // Import icons
import { CartContext } from "../context/CartContext";
import { Link } from "react-router-dom";

const CheckoutPage = () => {
  const { shoppingCart, totalPrice } = useContext(CartContext);
  const [paymentMethod, setPaymentMethod] = useState("select"); // Initial payment method
  const [shippingInfo, setShippingInfo] = useState({
    address: "",
    phone_number: "",
    city: "",
    postalCode: "",
    country: "Kenya",
  });

  const handleInputChange = (event) => {
    setShippingInfo({
      ...shippingInfo,
      [event.target.name]: event.target.value,
    });
  };
  const handlePaymentMethodChange = (event) => {
    setPaymentMethod(event.target.value);
  };

  const handleCheckout = async () => {
    // Implement your checkout logic here, including:
    // - Sending order details (cart items, shipping info, total price) to your backend
    // - Processing payment (if applicable)
    // - Redirecting to confirmation or order tracking page
    console.log("Checkout with:", shoppingCart, shippingInfo, totalPrice);
    alert("Order details submitted successfully! (placeholder)");
  };

  // .. Implement your checkout logic here ...
  const orderDetails = {
    shippingInfo,
    orderItems: shoppingCart, // Assuming shoppingCart contains ordered items
    totalPrice,
  };
  console.log("Order details:", orderDetails); // For verification

  return (
    <div className="container border mt-5 mb-5 rounded shadow">
      <div className="checkout d-flex flex-column pt-5 pb-5 px-4 align-items-center">
        <h2>Checkout</h2>
        <hr className="w-100 mb-4" />
        <div className="shipping-info mb-4">
          <h3>Shipping Information</h3>
          <form>
            <div className="mb-3">
              <label htmlFor="name" className="form-label">
                Name:
              </label>
              <textarea
                className="form-control"
                id="name"
                name="name"
                rows="1"
                value={shippingInfo.name}
                onChange={handleInputChange}
                required
              ></textarea>
            </div>
            <div className="mb-3">
              <label htmlFor="address" className="form-label">
                Address:
              </label>
              <textarea
                className="form-control"
                id="address"
                name="address"
                rows="2"
                value={shippingInfo.address}
                onChange={handleInputChange}
                required
              ></textarea>
            </div>
            <div className="d-flex mb-3">
              <div className="me-3">
                <label htmlFor="city" className="form-label">
                  Phone No.:
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="phone_number"
                  name="phone_number"
                  value={shippingInfo.phone_number}
                  onChange={handleInputChange}
                  required
                />
              </div>
              <div className="me-3">
                <label htmlFor="city" className="form-label">
                  City:
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="city"
                  name="city"
                  value={shippingInfo.city}
                  onChange={handleInputChange}
                  required
                />
              </div>
              <div className="me-3">
                <label htmlFor="postalCode" className="form-label">
                  Postal Code:
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="postalCode"
                  name="postalCode"
                  value={shippingInfo.postalCode}
                  onChange={handleInputChange}
                  required
                />
              </div>
              <div>
                <label htmlFor="country" className="form-label">
                  Country:
                </label>
                <select
                  className="form-select"
                  id="country"
                  name="country"
                  value={shippingInfo.country}
                  onChange={handleInputChange}
                  required
                >
                  <option value="">Select Country...</option>
                  {/* Add options for different countries */}
                </select>
              </div>
            </div>
          </form>
        </div>
        <div className="order-summary mb-4">
          <h3>Order Summary</h3>
          <ul className="list-group mb-3">
            {shoppingCart.map((item) => (
              <li
                key={item.id}
                className="list-group-item d-flex justify-content-between"
              >
                <div>
                  <p className="mb-1">{item.name}</p>
                  <p className="text-muted">Quantity: {item.quantity}</p>
                  <p className="text-muted">
                    Customer Details: {item.customerDetails}
                  </p>
                </div>
                <p className="text-muted">Ksh. {item.price * item.quantity}</p>
              </li>
            ))}
          </ul>
          <div className="d-flex justify-content-between w-100">
            <p className="text-muted">Total Price:</p>
            <p className="fw-bold">Ksh. {totalPrice}</p>
          </div>
        </div>
        <div className="payment-info mb-4">
          <h3>Payment Information</h3>
          <div className="d-flex mb-3">
            <div className="form-check me-3">
              <input
                className="form-check-input"
                type="radio"
                name="paymentMethod"
                id="creditCard"
                value="creditcard"
                onChange={handlePaymentMethodChange}
              />
              <label className="form-check-label" htmlFor="creditCard">
                Credit Card <FaCreditCard className="ms-2" />
              </label>
            </div>
            <div className="form-check me-3">
              <input
                className="form-check-input"
                type="radio"
                name="paymentMethod"
                id="paypal"
                value="paypal"
                onChange={handlePaymentMethodChange}
              />
              <label className="form-check-label" htmlFor="paypal">
                PayPal <FaPaypal className="ms-2" />
              </label>
            </div>
            <div className="form-check">
              <input
                className="form-check-input"
                type="radio"
                name="paymentMethod"
                id="cashOnDelivery"
                value="cashondelivery"
                onChange={handlePaymentMethodChange}
              />
              <label className="form-check-label" htmlFor="cashOnDelivery">
                Cash on Delivery <FaMoneyBillAlt className="ms-2" />
              </label>
            </div>
          </div>
          <Link to="/order-confirmation" state={{ orderDetails }}>
            <button type="button" className="btn btn-primary w-100 mt-5">
              Place Order
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CheckoutPage;
