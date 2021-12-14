import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import ListTask from "./Components/ListTask";
import AddTask from "./Components/AddTask";

function App() {
  return (
    <div className="App">
      <AddTask />
      <ListTask />
    </div>
  );
}

export default App;
