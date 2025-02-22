import logo from "./logo.svg";
import "./App.css";
import Greet from "./components/Greet.js";
import Welcome from "./components/Welcome";
import Hello from "./components/Hello";
import Message from "./components/Message";
import Counter from "./components/Counter";
import FunctionClick from "./components/FunctionClick";
import ClassClick from "./components/ClassClick";

function App() {
  return (
    <div className="App">
      <FunctionClick />
      <ClassClick />
      {/* <Message /> */}
      {/* <Greet name="Bruce" heroName="Batman"> 
         <p>This is children props</p>
       </Greet> */}

      {/* <Greet name="Diana" heroName="Superman">
      <button>Action</button>
        </Greet> */}
      {/* <Greet name="Holly" heroName="Wonder Woman" /> */}
      {/* <Welcome name="Bruce" heroName="Batman" /> */}
      {/* <Welcome name="Diana" heroName="Superman" />
        <Welcome name="Holly" heroName="Wonder Woman" />  */}
      {/* <Hello /> */}
    </div>
  );
}

export default App;
