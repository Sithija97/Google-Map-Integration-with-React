import "./App.css";
import Header from "./components/Header";
import MapView from "./components/Map";
import Test from "./components/Test";

function App() {
  return (
    <div className="App">
      <Header />
      <MapView />
      <Test name={"chamrith"} />
    </div>
  );
}

export default App;
