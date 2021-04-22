import React from "react";

const Hello = () => {
  // using JSX
  //   return (
  //     <div className="dummyClass">
  //       <h1>Hello Hui</h1>
  //     </div>
  //   );

  // without using jsx
  return React.createElement(
    "div",
    {id: "hello", className: "dummyClass"},
    React.createElement("h1", null, "Hello Hui")
  );
};

export default Hello;
