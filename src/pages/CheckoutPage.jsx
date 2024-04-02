import React, { useContext, useState } from "react";

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

const CheckoutPage = () => {
  const navigate = useNavigate();
  const { dispatch, shoppingCart, totalPrice, createOrder } =
    useContext(CartContext);
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
    try {
      // Call the createOrder function from CartContext
      const orderId = await createOrder(orderDetails);
      console.log(orderId); // Log the order ID

      // Clear shopping cart after successful order creation
      dispatch({ type: "CLEAR_CART" });

      // Update orderId in CartContext
      // setOrderId(orderId);

      // Redirect to order confirmation page with order ID

      navigate(`/order-confirmation/${orderId}`);
    } catch (error) {
      // ... handle errors
    }
  };

  // const handleCheckout = async () => {
  //   try {
  //     // Call the createOrder function from CartContext to create the order
  //     const orderId = await createOrder(orderDetails);
  //     console.log(orderId);
  //     // Clear shopping cart after successful order creation
  //     dispatch({ type: "CLEAR_CART" });

  //     // Redirect to order confirmation page with order ID
  //     // navigate(`/order-confirmation/:${orderId}`);

  //     alert("Order placed successfully!");
  //   } catch (error) {
  //     console.error("Error creating order:", error);
  //     alert("Error: Failed to create order. Please try again.");
  //   }
  // };

  // .. Implement your checkout logic here ...
  const orderDetails = {
    shippingInfo,
    paymentMethod,
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
          {/* Conditionally render MpesaComp */}
          {/* <Link to="/order-confirmation" state={{ orderDetails }}> */}
          <button
            type="button"
            onClick={handleCheckout}
            className="btn btn-primary w-100 mt-5"
          >
            Place Order
          </button>
          {/* </Link> */}
        </div>
      </div>
    </div>
  );
};

export default CheckoutPage;
