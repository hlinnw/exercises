import React, {Component} from "react";

class Welcome extends Component {
  render() {
    // return <h1>Class Component</h1>;
    // use props with class component
    return (
      <h1>
        Welcome {this.props.name} a.k.a {this.props.heroName}
      </h1>
    );
  }
}

// destructure props in render()
// class Welcome extends Component {
//   render() {
//     // return <h1>Class Component</h1>;
//     // use props with class component
//     const {name, heroName} = this.props;
//     const {state1, state2} = this.state;
//     return (
//       <h1>
//         Welcome {name} a.k.a {heroName}
//       </h1>
//     );
//   }
// }
export default Welcome;
