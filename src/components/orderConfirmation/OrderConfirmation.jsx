// import React, { useContext, useEffect } from "react";

// const OrderConfirmation = ({ orderDetails }) => {
//   // if (!orderId) {
//   //   return <p>Loading order details...</p>; // Display loading message
//   // }
//   console.log(orderDetails);
//   // const { shippingInfo, paymentMethod, orderItems, totalPrice } = orderDetails;

//   const {
//     shippingInfo = {},
//     paymentMethod = "N/A",
//     orderItems = [],
//     totalPrice = 0,
//   } = orderDetails || {};

//   return (
//     <div className="container mt-5 mb-5">
//       <h2>Order Confirmation</h2>
//       <hr className="w-100 mb-4" />
//       <div className="order-details">
//         <h3>Order Details</h3>
//         <ul className="list-group mb-3">
//           <li className="list-group-item">
//             <p>Shipping Information:</p>
//             <ul>
//               <li>Name: {shippingInfo.name}</li>
//               <li>Address: {shippingInfo.address}</li>
//               <li>Phone Number: {shippingInfo.phone_number}</li>
//               <li>City: {shippingInfo.city}</li>
//               <li>Postal Code: {shippingInfo.postalCode}</li>
//               <li>Country: {shippingInfo.country}</li>
//             </ul>
//           </li>
//           <li className="list-group-item">
//             <p>Payment Method: {paymentMethod}</p>
//           </li>
//           <li className="list-group-item">
//             <p>Ordered Items:</p>
//             <ul>
//               {orderItems.map((item) => (
//                 <li key={item.id}>
//                   {item.name} (Quantity: {item.quantity}) - Ksh.{" "}
//                   {item.price * item.quantity}
//                 </li>
//               ))}
//             </ul>
//           </li>
//           <li className="list-group-item d-flex justify-content-between">
//             <p>Total Price:</p>
//             <p className="fw-bold">Ksh. {totalPrice}</p>
//           </li>
//         </ul>
//       </div>
//       <p className="text-muted">
//         Thank you for your order! Your order details have been sent to your
//         email address.
//       </p>
//     </div>
//   );
// };

// export default OrderConfirmation;

import React from "react";

const OrderConfirmation = ({ orderDetails }) => {
  if (!orderDetails) {
    return (
      <div>
        <p>Data not available</p>
      </div>
    );
  }
  const { shippingInfo, paymentMethod, orderItems, totalPrice } = orderDetails;

  return (
    <div className="container mt-5 mb-5">
      <div className="alert alert-success" role="alert">
        <h2>Order Confirmation</h2>
        <p>Thank you for your order! Your order details are below:</p>
        <hr />
        <p>**Shipping Information:**</p>
        <ul>
          <li>Name: {shippingInfo.name}</li>
          <li>Address: {shippingInfo.address}</li>
          <li>Phone Number: {shippingInfo.phone_number}</li>
          <li>City: {shippingInfo.city}</li>
          <li>Postal Code: {shippingInfo.postalCode}</li>
          <li>Country: {shippingInfo.country}</li>
        </ul>
        <p>**Payment Method:** {paymentMethod}</p>
        <p>**Order Items:**</p>
        <ul>
          {orderItems.map((item) => (
            <li key={item.id}>
              {item.name} (Quantity: {item.quantity}) - Ksh.{" "}
              {item.price * item.quantity}
            </li>
          ))}
        </ul>
        <p>**Total Price:** Ksh. {totalPrice}</p>
      </div>
    </div>
  );
};

export default OrderConfirmation;
