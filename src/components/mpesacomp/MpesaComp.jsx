import React from "react";
import mpesa from "../../assets/mpesa.png";

const MpesaComp = ({ totalPrice }) => {
  return (
    <div className="border rounded ms-5  p-3 shadow d-flex flex-column  w-75 gap-3 mb-3">
      <div>
        {" "}
        <h5 className="text-decoration-underline">PAY VIA MPESA</h5>
        <img
          src={mpesa}
          alt="Mpesa Logo"
          className="img-fluid"
          width="150"
        />{" "}
      </div>
      <div>
        <p>
          Total Amount: Ksh. <span className="fw-bold">{totalPrice}</span>{" "}
        </p>
        <p>MPESA NO: 0705956148</p>
        <p>MPESA NAME: WILKISTA OGINGA</p>
      </div>
    </div>
  );
};

export default MpesaComp;
