import React, { useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../../context/CartContext";
import emailjs from "@emailjs/browser";

const OrderSuccess = ({ orderDetails }) => {
  const { dispatch } = useContext(CartContext);

  const serviceId = "service_24lvd9i"; // Replace with your actual EmailJS service ID
  const templateId = "template_lihqopb"; // Replace with your actual EmailJS template ID
  const publicKey = "WrLNFNzq0IHmm7g4_"; // Replace with your EmailJS public key

  const handleOrderSuccess = async () => {
    try {
      const email = orderDetails.shippingInfo.email; // Extract customer email
      await emailjs.send(
        serviceId,
        templateId,
        {
          to_email: email,
          orderDetails,
        },
        publicKey
      );

      console.log("Email sent successfully!");
      dispatch({ type: "CLEAR_CART" });
    } catch (error) {
      console.error("Error sending email:", error);
    }
  };

  useEffect(() => {
    // Call handleOrderSuccess directly without event trigger
    handleOrderSuccess();
  }, []);
  return (
    <div className="container mt-5 mb-5 text-center">
      <h2 className="text-center">Order Successful!</h2>
      <hr className="w-100 mb-4" />
      <div className="alert alert-success" role="alert">
        <h4 className="alert-heading">
          Your order has been placed successfully!
        </h4>
        <p>
          Thank you for your order. Your items will be delivered in{" "}
          <strong>{orderDetails.shippingInfo.city}</strong>.
        </p>
        <p>
          You will receive a confirmation email with your order details shortly.
        </p>
      </div>
      <div className="d-flex justify-content-center">
        <Link to="/" className="btn btn-primary">
          Go to Homepage
        </Link>
      </div>
    </div>
  );
};

export default OrderSuccess;
