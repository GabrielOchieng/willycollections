// import React, { useContext, useEffect, useState } from "react";
// import { FaCheckCircle } from "react-icons/fa";
// import { useNavigate, useParams } from "react-router-dom"; // Removed useLocation as it's not used
// import { CartContext } from "../../context/CartContext";
// import { doc, getDoc } from "firebase/firestore";
// import { db } from "../../firebase";

// const OrderConfirmation = () => {
//   // const { orderId } = useContext(CartContext); // Adjust context usage
//   const navigate = useNavigate();
//   const { id } = useParams();

//   const [orderDetails, setOrderDetails] = useState(null);

//   useEffect(() => {
//     const fetchOrderDetails = async () => {
//       const orderRef = doc(db, "orders", id);
//       try {
//         const orderSnap = await getDoc(orderRef);
//         setOrderDetails(orderSnap.data());
//       } catch (error) {
//         console.error("Error fetching order:", error); // Use order instead of product
//         // Implement error handling, e.g., notify user or redirect
//       }
//     };

//     fetchOrderDetails();
//   }, [id]);

//   if (!orderDetails) {
//     return <div className="p-5">Loading order details...</div>;
//   }

//   // Handle potential missing shippingInfo gracefully
//   if (!orderDetails.shippingInfo) {
//     return <div className="p-5">Shipping information not available.</div>;
//   }

//   const { shippingInfo, orderItems, totalPrice, paymentMethod } = orderDetails;

//   return (
//     <div className="container border mt-5 mb-5 rounded shadow p-4">
//       <div className="d-flex justify-content-between mb-4">
//         <h2 className="text-success">
//           Order Confirmation <FaCheckCircle className="ms-2" />
//         </h2>
//         <p>Order ID: {orderDetails.id}</p> {/* Display fetched order ID */}
//       </div>
//       <div className="shipping-info mb-4">
//         <h3>Shipping Information</h3>
//         <ul className="list-group mb-0">
//           <li className="list-group-item">
//             <p className="mb-1">Name:</p>
//             <p>{shippingInfo.name}</p>
//           </li>
//           <li className="list-group-item">
//             <p className="mb-1">Address:</p>
//             <p>{shippingInfo.address}</p>
//           </li>
//           <li className="list-group-item">
//             <p className="mb-1">City:</p>
//             <p>{shippingInfo.city}</p>{" "}
//           </li>{" "}
//           <li className="list-group-item">
//             {" "}
//             <p className="mb-1">Phone No.:</p>
//             <p>{shippingInfo.phone_number}</p>{" "}
//           </li>{" "}
//           <li className="list-group-item">
//             <p className="mb-1">Postal Code:</p>
//             <p>{shippingInfo.postalCode}</p>{" "}
//           </li>{" "}
//           <li className="list-group-item">
//             {" "}
//             <p className="mb-1">Country:</p>
//             <p>{shippingInfo.country}</p>{" "}
//           </li>
//           <li className="list-group-item">
//             {" "}
//             <p className="mb-1">Payment Method:</p> <p>{paymentMethod}</p>{" "}
//           </li>
//         </ul>
//       </div>
//       <div className="order-summary mb-4">
//         <h3>Order Summary</h3>
//         <ul className="list-group mb-3">
//           {orderItems.map((item) => (
//             <li
//               key={item.id}
//               className="list-group-item d-flex justify-content-between"
//             >
//               <div>
//                 <p className="mb-1">{item.name}</p>
//                 <p className="text-muted">Quantity: {item.quantity}</p>
//                 <p className="text-muted">Details: {item.customerDetails}</p>
//               </div>
//               <p className="text-muted">Ksh. {item.price * item.quantity}</p>
//             </li>
//           ))}
//         </ul>
//         <div className="d-flex justify-content-between w-100">
//           <p className="text-muted">Total Price:</p>
//           <p className="fw-bold">Ksh. {totalPrice}</p>
//         </div>
//       </div>
//       <p className="text-muted">
//         You will receive a confirmation email with additional details shortly
//         and then we'll contact you once you make the payment.
//       </p>
//     </div>
//   );
// };

// export default OrderConfirmation;

import React from "react";

const OrderConfirmation = ({ orderDetails }) => {
  // const { shippingInfo, paymentMethod, orderItems, totalPrice } = orderDetails;
  const {
    shippingInfo = {},
    paymentMethod = "N/A",
    orderItems = [],
    totalPrice = 0,
  } = orderDetails || {};

  return (
    <div className="container mt-5 mb-5">
      <h2>Order Confirmation</h2>
      <hr className="w-100 mb-4" />
      <div className="order-details">
        <h3>Order Details</h3>
        <ul className="list-group mb-3">
          <li className="list-group-item">
            <p>Shipping Information:</p>
            <ul>
              <li>Name: {shippingInfo.name}</li>
              <li>Address: {shippingInfo.address}</li>
              <li>Phone Number: {shippingInfo.phone_number}</li>
              <li>City: {shippingInfo.city}</li>
              <li>Postal Code: {shippingInfo.postalCode}</li>
              <li>Country: {shippingInfo.country}</li>
            </ul>
          </li>
          <li className="list-group-item">
            <p>Payment Method: {paymentMethod}</p>
          </li>
          <li className="list-group-item">
            <p>Ordered Items:</p>
            <ul>
              {orderItems.map((item) => (
                <li key={item.id}>
                  {item.name} (Quantity: {item.quantity}) - Ksh.{" "}
                  {item.price * item.quantity}
                </li>
              ))}
            </ul>
          </li>
          <li className="list-group-item d-flex justify-content-between">
            <p>Total Price:</p>
            <p className="fw-bold">Ksh. {totalPrice}</p>
          </li>
        </ul>
      </div>
      <p className="text-muted">
        Thank you for your order! Your order details have been sent to your
        email address.
      </p>
    </div>
  );
};

export default OrderConfirmation;

// import React, { useContext } from "react";
// import { Link } from "react-router-dom";
// import { CartContext } from "../../context/CartContext";

// const OrderConfirmation = () => {
//   const { orderId } = useContext(CartContext);
//   return (
//     <div className="container mt-5 mb-5">
//       <h2>Order Confirmation</h2>
//       <p>Thank you for your order! Your order ID is: {orderId}</p>
//       <p>
//         You can expect a confirmation email with more details about your order
//         shortly.
//       </p>
//       {/* Additional Information (Optional) */}
//       <ul>
//         <li>Order Items:</li>
//         {/* List of ordered items with details */}
//         <li>Shipping Information:</li>
//         {/* Display shipping details */}
//         <li>Billing Information:</li>
//         {/* Display billing details */}
//         <li>Estimated Delivery:</li>
//         {/* Estimated delivery timeframe */}
//       </ul>
//       {/* Links (Optional) */}
//       <div>
//         <Link to="/">Continue Shopping</Link>
//         <Link to="/track-order">Track Your Order</Link>
//       </div>
//     </div>
//   );
// };

// export default OrderConfirmation;
