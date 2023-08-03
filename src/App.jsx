import { useState } from "react";
import "./App.css";
import ProductList from "./components/ProductList";
import SingleProduct from "./components/SingleProduct";

function App() {

  const [productArr, setProductArr] = useState([]);
  const [productId, setProductID] = useState(null);

  return (
    <>
      <SingleProduct productId={productId} />
      <ProductList productArr={productArr} setProductArr={setProductArr} setProductID={setProductID} />
    </>
  );
}

export default App;
