import React, { useContext, useEffect, useState } from "react";

import {
  FaMoneyBillAlt,
  FaPaypal,
  FaCreditCard,
  FaShippingFast,
} from "react-icons/fa"; // Import icons
import { CartContext } from "../context/CartContext";
import { Link, useNavigate } from "react-router-dom";
import mpesa from "../assets/mpesa.png";
import MpesaComp from "../components/mpesacomp/MpesaComp";
import Cart_Services from "../services/Cart_Services";
import OrderSuccess from "../components/ordersuccess/OrderSuccess";

const CheckoutPage = () => {
  const navigate = useNavigate();
  const { dispatch, shoppingCart, totalPrice, createOrder } =
    useContext(CartContext);
  const [paymentMethod, setPaymentMethod] = useState("select"); // Initial payment method
  const [showOrderSuccess, setShowOrderSuccess] = useState(false);
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

  const orderDetails = {
    shippingInfo,
    paymentMethod,
    orderItems: shoppingCart, // Assuming shoppingCart contains ordered items
    totalPrice,
  };
  console.log("Order details:", orderDetails); // For verification
  const handleCheckout = async (e) => {
    e.preventDefault();
    if (!orderDetails) {
      alert("Please fill in all required fields.");
      return;
    }

    try {
      const orderId = await createOrder(orderDetails);

      dispatch({ type: "CLEAR_CART" });

      // Render OrderSuccess component instead of redirecting
      setShowOrderSuccess(true);
    } catch (error) {
      console.error("Error creating order:", error);
      // Display an error message to the user
    }

    // setShowOrderSuccess(true);
  };

  return (
    <div className="container border mt-5 mb-5 rounded shadow">
      {!showOrderSuccess && (
        <div className="checkout d-flex flex-column pt-5 pb-5 px-4 align-items-center">
          <h2>Checkout</h2>
          <hr className="w-100 mb-4" />

          <div className="order-summary mb-4 full-width">
            <h3>Order Summary</h3>

            <ul className="list-group  mb-3">
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
                  <p className="text-muted">
                    Ksh. {item.price * item.quantity}
                  </p>
                </li>
              ))}
            </ul>
            <div className="d-flex justify-content-between w-100">
              <p className="text-muted">Total Price:</p>
              <p className="fw-bold">Ksh. {totalPrice}</p>
            </div>
          </div>
          <hr className="w-100 mb-4" />

          <div className="payment-info mb-4">
            <h3>Payment Information</h3>
            <div className="d-flex mb-3 flex-column flex-md-row">
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
                  id="mpesa"
                  value="mpesa"
                  onChange={handlePaymentMethodChange}
                />
                <label className="form-check-label" htmlFor="paypal">
                  MPESA{" "}
                  <img
                    src={mpesa}
                    alt="mpesa"
                    style={{ width: "40px", height: "auto" }}
                  />
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
            {paymentMethod === "mpesa" && <MpesaComp totalPrice={totalPrice} />}{" "}
            <hr className="w-100 mb-4" />
            <div className="shipping-info mb-4 mt-5">
              <h3>Shipping Information</h3>
              <form onSubmit={handleCheckout}>
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
                  <label htmlFor="email" className="form-label">
                    Email:
                  </label>
                  <textarea
                    className="form-control"
                    id="email"
                    name="email"
                    rows="1"
                    value={shippingInfo.email}
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
                <div className="d-flex mb-3 d-flex flex-column flex-md-row">
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
                      <option value="KE">Kenya</option>
                      <option value="TZ">Tanzania</option>
                      <option value="UG">Uganda</option>
                      <option value="RW">Rwanda</option>
                      <option value="BI">Burundi</option>
                      <option value="SS">South Sudan</option>
                      <option value="ET">Ethiopia</option>
                      <option value="ER">Eritrea</option>
                      <option value="DJ">Djibouti</option>
                      <option value="SO">Somalia</option>
                    </select>
                  </div>
                </div>
                <button type="submit" className="btn btn-primary w-100 mt-5">
                  Place Order
                </button>
              </form>
            </div>
          </div>
        </div>
      )}
      {showOrderSuccess && <OrderSuccess orderDetails={orderDetails} />}
    </div>
  );
};

export default CheckoutPage;
