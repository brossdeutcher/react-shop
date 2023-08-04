import { useState } from "react";
import "./App.css";
import ProductList from "./components/ProductList";
import SingleProduct from "./components/SingleProduct";

function App() {

  const [productArr, setProductArr] = useState([]);
  const [productId, setProductId] = useState(null);

  return (
    <>
      {productId && <SingleProduct productId={productId} setProductId={setProductId} />}
      {!productId && <ProductList productArr={productArr} setProductArr={setProductArr} setProductId={setProductId} />}
    </>
  );
}

export default App;
