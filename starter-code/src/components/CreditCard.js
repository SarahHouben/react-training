import React from "react";
import Visa from "../assets/img/visa.png";
import MasterCard from "../assets/img/master-card.svg";

const types = {
  Visa: Visa,
  "Master Card": MasterCard
};

const CreditCard = props => {
  return (
    <div
      className="credit-card"
      style={{ backgroundColor: `${props.bgColor}`, color: `${props.color}` }}
    >
      <img className="card-img" src={types[props.type]} alt="credit-logo" />
      <p className="card-number">
        &#9679;&#9679;&#9679;&#9679; &#9679;&#9679;&#9679;&#9679;
        &#9679;&#9679;&#9679;&#9679; {props.number.slice(-4)}
      </p>
      <div className="details">
        <div className="top-details">
          <p>
            Expires: {props.expirationMonth}/{props.expirationYear}
          </p>
          <p>{props.bank}</p>
        </div>
        <p>{props.owner}</p>
      </div>
    </div>
  );
};

export default CreditCard;
