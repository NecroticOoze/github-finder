import React from "react";
import icon from "bootstrap-icons/icons/info-circle-fill.svg";

const Alert = ({ alert }) => {
  return (
    alert !== null && (
      <div className="container my-3">
        <div className={`alert alert-${alert.type}`}>
          <img src={icon} alt="info" />&nbsp;
          {alert.msg}
        </div>
      </div>
    )
  );
};

export default Alert;
