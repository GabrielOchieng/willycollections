// import React from "react";

// const OrderSuccess = ({ orderId }) => {
//   return (
//     <div className="container mt-5 mb-5">
//       <h2 className="text-center">Order Successfull!</h2>
//       <hr className="w-100 mb-4" />
//       <div className="alert alert-success" role="alert">
//         <h4 className="alert-heading">
//           Your order has been placed successfully!
//         </h4>
//         <p>
//           Thank you for your order. Your order ID is: <strong>{orderId}</strong>
//           .
//         </p>
//         <p>
//           You will receive a confirmation email with your order details shortly.
//         </p>
//       </div>
//     </div>
//   );
// };

// export default OrderSuccess;

import React from "react";
import { Link } from "react-router-dom"; // Import Link for navigation

const OrderSuccess = ({ orderDetails }) => {
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
