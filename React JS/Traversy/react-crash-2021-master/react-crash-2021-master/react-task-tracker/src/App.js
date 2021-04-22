import Header from "./components/Header";
import Tasks from "./components/Tasks";
function App() {
  // const name = "Brad";
  // const x = true;
  return (
    <div className="container">
      <Header />
      <Tasks />

      {/* <h1>Hello From React</h1>;<h2>Hello {x ? "Yes" : "No"}</h2> */}
    </div>
  );
}

export default App;
