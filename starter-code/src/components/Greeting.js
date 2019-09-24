import React from "react";

const language = {
  de: "Hallo",
  en: "Hello",
  es: "Hola",
  fr: "Bonjour"
};

const Greeting = props => {
  return (
    <div className="greeting box">
      <p>
        {language[props.lang]}
        {props.children}
      </p>
    </div>
  );
};

export default Greeting;
