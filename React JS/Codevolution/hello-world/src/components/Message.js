import React, {Component} from "react";

class Message extends Component {
  // create a state object and initialize it- first step to create a state obj. This is done in constructor
  constructor() {
    // call super() is required
    super();
    //create the state
    this.state = {
      // initialize the property
      message: "Welcome Visistor",
    };
  }

  // step five: call method changeMessage() to change the state of a class component
  changeMessage() {
    this.setState({
      message: "Thank you for subscribing",
    });
  }
  render() {
    // return <h1>Class Component</h1>;
    // use props with class component
    // return <h1>Welcome Visitor</h1>;
    // second step is to bind the state value into render()
    return (
      <div>
        <h1>{this.state.message}</h1>
        {/* step three:  onClick is the event */}
        {/* step four: this.changeMessage() is event handler */}
        <button onClick={() => this.changeMessage()}>Subscribe</button>
      </div>
    );
  }
}
export default Message;
