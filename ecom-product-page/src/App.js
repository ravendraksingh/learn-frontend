import "./App.css";
import Header from "./components/Header";
import ProductHome from "./components/ProductHome";

function App() {
  return (
    <div className="container">
      <Header />
      <hr className="d-none d-sm-block" />
      <ProductHome />
    </div>
  );
}

export default App;
