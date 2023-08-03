import { useState } from "react";
import "./App.css";
import ProductList from "./components/ProductList";

function App() {

  const [productArr, setProductArr] = useState([]);

  return (
    <>
      <ProductList productArr={productArr} setProductArr={setProductArr} />
    </>
  );
}

export default App;
