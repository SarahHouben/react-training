import React from "react";

const IdCard = props => {
  return (
    <div className="id-card box">
      <img src={props.picture} alt="id-pic" className="id-pic" />
      <div className="id-right">
        <p>
          <strong>First Name</strong>: {props.firstName}
        </p>
        <p>
          <strong>Last Name</strong>: {props.lastName}
        </p>
        <p>
          <strong>Gender</strong>: {props.gender}
        </p>
        <p>
          <strong>Height</strong>: {props.height / 100}m
        </p>
        <p>
          <strong>Birthdate</strong>: {props.birth.toDateString()}
        </p>
        <p>
          <strong></strong>
          {}
        </p>
      </div>
    </div>
  );
};

export default IdCard;
