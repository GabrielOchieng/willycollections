import React from "react";
import mpesa from "../../assets/mpesa.png";

const MpesaComp = () => {
  return (
    <div className="border rounded  p-3 shadow d-flex flex-column align-items-center gap-3 mb-3">
      <h5>PAY VIA MPESA</h5>
      <img
        src={mpesa}
        alt="Mpesa Logo"
        className="img-fluid"
        width="150"
      />{" "}
      <p>Total Amount: </p>
      <p>MPESA NO: 0705956148</p>
      <p>MPESA NAME: WILKISTA OGINGA</p>
    </div>
  );
};

export default MpesaComp;
