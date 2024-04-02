// import React from "react";
// import { FaCheckCircle } from "react-icons/fa";
// import { useLocation } from "react-router-dom";

// const OrderConfirmation = () => {
//   const location = useLocation();
//   // Ensure orderDetails is defined before destructuring

//   const orderDetails = location.state?.orderDetails; // Access state from location prop

//   const { shippingInfo, orderItems, totalPrice, paymentMethod } = orderDetails;
//   console.log(totalPrice);

//   if (!orderDetails) {
//     return <div className="p-5">Loading order details...</div>; // Or handle the error differently
//   }

//   // Handle potential missing shippingInfo gracefully
//   if (!shippingInfo) {
//     return <div className="p-5">Shipping information not available.</div>;
//   }

//   return (
//     <div className="container border mt-5 mb-5 rounded shadow p-4">
//       <div className="d-flex justify-content-between mb-4">
//         <h2 className="text-success">
//           Order Confirmation <FaCheckCircle className="ms-2" />
//         </h2>
//         <p>Order ID: {/* Generate and display order ID here */}</p>
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
//             <p>{shippingInfo.city}</p>
//           </li>
//           <li className="list-group-item">
//             <p className="mb-1">Phone No.:</p>
//             <p>{shippingInfo.phone_number}</p>
//           </li>
//           <li className="list-group-item">
//             <p className="mb-1">Postal Code:</p>
//             <p>{shippingInfo.postalCode}</p>
//           </li>
//           <li className="list-group-item">
//             <p className="mb-1">Country:</p>
//             <p>{shippingInfo.country}</p>
//           </li>
//           <li className="list-group-item">
//             <p className="mb-1">Payment Method:</p>
//             <p>{paymentMethod}</p>
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

import React, { useEffect, useState } from "react";
import { FaCheckCircle } from "react-icons/fa";
import { useLocation, useNavigate } from "react-router-dom";
import { getDoc, doc } from "firebase/firestore"; // Import Firebase functions

const OrderConfirmation = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [orderDetails, setOrderDetails] = useState(null); // Initialize state for order details

  // Fetch order details from Firebase on component mount
  useEffect(() => {
    const fetchOrderDetails = async () => {
      try {
        // Replace with your actual Firebase configuration and logic
        const orderId = location.state?.orderId; // Get order ID from location state
        if (!orderId) return;

        const docRef = doc("users", userId, "orders", orderId);
        const docSnap = await getDoc(docRef);

        if (docSnap.exists) {
          setOrderDetails(docSnap.data()); // Set order details from fetched data
        } else {
          console.error("Order document not found!");
          navigate("/"); // Redirect to home page on error
        }
      } catch (error) {
        console.error("Error fetching order details:", error);
        navigate("/"); // Redirect to home page on error
      }
    };

    fetchOrderDetails();
  }, [location.state]); // Run effect only when location state changes

  if (!orderDetails) {
    return <div className="p-5">Loading order details...</div>;
  }

  // Handle potential missing shippingInfo gracefully
  if (!orderDetails.shippingInfo) {
    return <div className="p-5">Shipping information not available.</div>;
  }

  const { shippingInfo, orderItems, totalPrice, paymentMethod } = orderDetails;

  return (
    <div className="container border mt-5 mb-5 rounded shadow p-4">
      <div className="d-flex justify-content-between mb-4">
        <h2 className="text-success">
          Order Confirmation <FaCheckCircle className="ms-2" />
        </h2>
        <p>Order ID: {orderDetails.id}</p> {/* Display fetched order ID */}
      </div>
      <div className="shipping-info mb-4">
        <h3>Shipping Information</h3>
        <ul className="list-group mb-0">
          <li className="list-group-item">
            <p className="mb-1">Name:</p>
            <p>{shippingInfo.name}</p>
          </li>
          <li className="list-group-item">
            <p className="mb-1">Address:</p>
            <p>{shippingInfo.address}</p>
          </li>
          <li className="list-group-item">
            <p className="mb-1">City:</p>
            <p>{shippingInfo.city}</p>{" "}
          </li>{" "}
          <li className="list-group-item">
            {" "}
            <p className="mb-1">Phone No.:</p>
            <p>{shippingInfo.phone_number}</p>{" "}
          </li>{" "}
          <li className="list-group-item">
            <p className="mb-1">Postal Code:</p>
            <p>{shippingInfo.postalCode}</p>{" "}
          </li>{" "}
          <li className="list-group-item">
            {" "}
            <p className="mb-1">Country:</p>
            <p>{shippingInfo.country}</p>{" "}
          </li>
          <li className="list-group-item">
            {" "}
            <p className="mb-1">Payment Method:</p> <p>{paymentMethod}</p>{" "}
          </li>
        </ul>
      </div>
      <div className="order-summary mb-4">
        <h3>Order Summary</h3>
        <ul className="list-group mb-3">
          {orderItems.map((item) => (
            <li
              key={item.id}
              className="list-group-item d-flex justify-content-between"
            >
              <div>
                <p className="mb-1">{item.name}</p>
                <p className="text-muted">Quantity: {item.quantity}</p>
                <p className="text-muted">Details: {item.customerDetails}</p>
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
      <p className="text-muted">
        You will receive a confirmation email with additional details shortly
        and then we'll contact you once you make the payment.
      </p>
    </div>
  );
};

export default OrderConfirmation;
