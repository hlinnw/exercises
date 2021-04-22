// use RCE tab to get a class component
import React, {Component} from "react";

class Counter extends Component {
  constructor() {
    super();
    this.state = {
      count: 0,
    };
  }

  increment() {
    // this.state.count = this.state.count + 1; output: error
    // this.setState(
    //   {
    //     count: this.state.count + 1,
    //     // setState needs a second parameter of a call back function
    //   },
    //   () => {
    //     console.log("Callback value", this.state.count);
    //   }
    // );

    this.setState((prevState, props) => ({
      count: prevState.count + props.addValue,
    }));

    console.log(this.state.count);
  }

  incrementFive() {
    this.increment();
    this.increment();
    this.increment();
    this.increment();
    this.increment();
  }
  render() {
    return (
      <div>
        <div>Count - {this.state.count}</div>
        <button onClick={() => this.incrementFive()}>Increment</button>
      </div>
    );
  }
}

export default Counter;
