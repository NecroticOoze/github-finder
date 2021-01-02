import React, { useContext } from "react";
import AlertContext from "../../context/alert/alertContext";
import icon from "bootstrap-icons/icons/info-circle-fill.svg";

const Alert = () => {
  const alertContext = useContext(AlertContext);
  const { alert } = alertContext;
  return (
    alert !== null && (
      <div className="container my-3">
        <div className={`alert alert-${alert.type}`}>
          <img src={icon} alt="info" />
          &nbsp;
          {alert.msg}
        </div>
      </div>
    )
  );
};

export default Alert;
