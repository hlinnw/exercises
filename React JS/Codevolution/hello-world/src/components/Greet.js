import React from "react";

// function Greet() {
//   return <h1>Hello Hui</h1>;
// }

// const Greet = (props) => {
// destructure props
const Greet = ({name, heroName}) => {
  //   console.log(props);
  return (
    // use <div> to wrap all items that will be rendered
    <div>
      <h1>
        {/* Hello {props.name} a.k.a {props.heroName} */}
        {/* destructure props */}
        Hello {name} a.k.a {heroName}
      </h1>
      {/* props.children is saved for any potential attributes */}
      {/* {props.children} */}
    </div>
  );
};

// second way to destructure props
// const Greet = (props) => {
//   const {name, heroName} = props;
//   return (
//     <div>
//       <h1>
//         Hello {name} a.k.a {heroName}
//       </h1>
//     </div>
//   );
// };
export default Greet;
